import { NextResponse } from 'next/server';
import * as googleTTS from 'google-tts-api';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, format, script, genre, energy, tempo, bgMusic } = body;

    // Use the raw script instead of the full system prompt if available
    const rawContent = script || prompt;

    if (!rawContent) {
      return NextResponse.json({ error: "Missing content to generate" }, { status: 400 });
    }

    // "Suno-like Jugaad": Clean the script to remove any emotional or structure tags like [Outro], (Pause), SYSTEM COMMAND: etc.
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

    if (!textToSynthesize) {
       textToSynthesize = "Please provide a valid script to read.";
    }

    // Generate Audio using getAllAudioBase64 to support LONG text (>200 chars)
    const audioBase64Array = await googleTTS.getAllAudioBase64(textToSynthesize, {
      lang: 'hi',
      slow: false,
      host: 'https://translate.google.com',
      splitPunct: ',.?!',
    });

    const buffers = audioBase64Array.map(result => Buffer.from(result.base64, 'base64'));
    const combinedBuffer = Buffer.concat(buffers);
    const combinedBase64 = combinedBuffer.toString('base64');
    const audioUrl = `data:audio/mp3;base64,${combinedBase64}`;

    // Generate Background Music via Hugging Face API (MusicGen)
    let bgUrl = null;
    if (genre && bgMusic && process.env.HUGGINGFACE_API_KEY) {
      try {
        const hfPrompt = `${genre}, ${energy || 'Medium energy'}, ${tempo || '120 BPM'}, ${bgMusic} instrumental`;
        console.log("Generating AI Music via HF API:", hfPrompt);
        
        const hfResponse = await fetch("https://api-inference.huggingface.co/models/facebook/musicgen-small", {
          method: "POST",
          headers: { 
            "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ inputs: hfPrompt })
        });
        
        if (hfResponse.ok) {
          const arrayBuffer = await hfResponse.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          bgUrl = `data:audio/wav;base64,${buffer.toString('base64')}`;
          console.log("HF Music Generated Successfully");
        } else {
          console.error("HF API Error:", await hfResponse.text());
        }
      } catch(e) {
        console.error("HF API Exception:", e);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Audio generated successfully using open-source TTS and HF MusicGen.",
      audioUrl: audioUrl,
      bgUrl: bgUrl, // Send the AI generated background track if available
      meta: {
        model: bgUrl ? 'Google TTS + MusicGen (HF API)' : 'Google TTS',
        tokens_used: textToSynthesize.length
      }
    });

  } catch (error) {
    console.error("API Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate content via TTS API" }, { status: 500 });
  }
}
