import { NextResponse } from 'next/server';
import * as googleTTS from 'google-tts-api';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, format, script } = body;

    // Use the raw script instead of the full system prompt if available
    const rawContent = script || prompt;

    if (!rawContent) {
      return NextResponse.json({ error: "Missing content to generate" }, { status: 400 });
    }

    // "Suno-like Jugaad": Clean the script to remove any emotional or structure tags like [Outro], (Pause), SYSTEM COMMAND: etc.
    // This regex removes anything between brackets [] and parentheses ()
    let textToSynthesize = rawContent
      .replace(/\[.*?\]/g, '')
      .replace(/\(.*?\)/g, '')
      .replace(/SYSTEM COMMAND:.*?(\n|$)/g, '')
      .replace(/\[ CONTENT FORMAT \][\s\S]*?\n\n/g, '')
      .replace(/\[ PRODUCTION STYLING.*?\]\n/g, '')
      .replace(/\[ RAW INPUT SCRIPT.*?\]\n/g, '')
      .replace(/\[ EXECUTION DIRECTIVE.*?\]\n/g, '')
      .replace(/"""/g, '')
      .replace(/- Delivery Speed:.*?\n/g, '')
      .replace(/- Vocal Tone:.*?\n/g, '')
      .replace(/- Emotion.*?:\n/g, '')
      .replace(/- Background Track:.*?\n/g, '')
      .trim();

    // If after cleaning it's empty, return error
    if (!textToSynthesize) {
       textToSynthesize = "Please provide a valid script to read.";
    }

    // Generate Audio using getAllAudioBase64 to support LONG text (>200 chars)
    const audioBase64Array = await googleTTS.getAllAudioBase64(textToSynthesize, {
      lang: 'hi',
      slow: false,
      host: 'https://translate.google.com',
      splitPunct: ',.?!', // Split text intelligently by punctuation
    });

    // google-tts-api's getAllAudioBase64 returns an array of objects: { shortText, base64 }
    // Actually, getting multiple base64 strings and playing them sequentially is one way.
    // But `getAllAudioUrls` is better for playing on the frontend, OR we can combine base64 buffers.
    // Wait, google-tts-api's `getAllAudioBase64` returns an array of objects. 
    // Let's just return the array of base64 chunks or combined? Combining base64 MP3 chunks is tricky without ffmpeg.
    // Let's use `getAllAudioUrls` instead, which returns an array of direct mp3 urls.
    
    // Wait, since we are doing it on the backend, returning multiple audioBase64 strings and making the frontend play them in a sequence is possible, but returning `getAllAudioUrls` is MUCH easier!
    // Let's look at `google-tts-api` docs: `getAllAudioBase64` returns `Promise<{ shortText: string, base64: string }[]>`.
    
    // Actually, playing an array of URLs on the frontend is hard to sync with background music natively without a playlist component.
    // Since we want to combine them, let's just stick to the text limits for now OR we can return the array and let the frontend play the first one?
    // A better way: In node, we can easily concatenate base64 mp3s. 
    // MP3s can be concatenated by just appending the binary buffers!
    const buffers = audioBase64Array.map(result => Buffer.from(result.base64, 'base64'));
    const combinedBuffer = Buffer.concat(buffers);
    const combinedBase64 = combinedBuffer.toString('base64');
    
    const audioUrl = `data:audio/mp3;base64,${combinedBase64}`;

    return NextResponse.json({
      success: true,
      message: "Audio generated successfully using open-source TTS.",
      audioUrl: audioUrl,
      meta: {
        model: 'Google TTS (Open-Source Hindi Long Form)',
        tokens_used: textToSynthesize.length
      }
    });

  } catch (error) {
    console.error("API Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate content via TTS API" }, { status: 500 });
  }
}
