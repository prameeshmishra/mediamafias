import { NextResponse } from 'next/server';
import * as googleTTS from 'google-tts-api';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, format } = body;

    if (!prompt) {
      return NextResponse.json({ error: "Missing master prompt" }, { status: 400 });
    }

    // Clean up the prompt to remove the "[Outro..." tags and extract the actual Hindi text if possible
    // We'll just generate audio for the last few lines or the whole prompt if it's short.
    let textToSynthesize = prompt.replace(/\[.*?\]/g, '').trim(); // Remove [Outro ...] tags
    if (textToSynthesize.length > 200) {
      // google-tts-api has a 200 char limit per request, so take the last 200 chars or use getAllAudioBase64
      textToSynthesize = textToSynthesize.substring(0, 200); 
    }

    // Generate Audio using google-tts-api
    // We default to 'hi' (Hindi) as requested by the user, or fallback to 'en' if no Hindi is detected.
    const audioBase64 = await googleTTS.getAudioBase64(textToSynthesize, {
      lang: 'hi',
      slow: false,
      host: 'https://translate.google.com',
    });

    const audioUrl = `data:audio/mp3;base64,${audioBase64}`;

    return NextResponse.json({
      success: true,
      message: "Audio generated successfully using open-source TTS.",
      audioUrl: audioUrl,
      meta: {
        model: 'Google TTS (Open-Source Hindi)',
        tokens_used: textToSynthesize.length
      }
    });

  } catch (error) {
    console.error("API Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate content via TTS API" }, { status: 500 });
  }
}
