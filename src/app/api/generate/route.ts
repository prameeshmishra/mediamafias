import { NextResponse } from 'next/server';
import * as googleTTS from 'google-tts-api';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, format, script } = body;

    const rawContent = script || prompt;

    if (!rawContent) {
      return NextResponse.json({ error: "Missing content to generate" }, { status: 400 });
    }

    // Try connecting to the Local Python GPU Engine
    try {
      const localEngineResponse = await fetch("http://127.0.0.1:8000/api/generate_and_mix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (!localEngineResponse.ok) {
        throw new Error("Local engine returned an error");
      }

      const data = await localEngineResponse.json();

      return NextResponse.json({
        success: true,
        message: "Audio generated successfully using Local GPU Engine.",
        audioUrl: data.audioUrl,
        meta: {
          model: 'MusicGen & Local TTS Pipeline',
          tokens_used: rawContent.length
        }
      });

    } catch (engineError) {
      console.error("Failed to connect to Local AI Server:", engineError);
      return NextResponse.json({ 
        error: "LOCAL_ENGINE_OFFLINE",
        details: "The local AI engine is not running. Please start the Python server on your laptop."
      }, { status: 503 });
    }

  } catch (error) {
    console.error("API Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate content via AI" }, { status: 500 });
  }
}
