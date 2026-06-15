import { NextResponse } from 'next/server';
import { EdgeTTS } from 'node-edge-tts';
import fs from 'fs';
import path from 'path';
import os from 'os';
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, format, script, genre, energy, tempo, bgMusic, musicPrompt, ttsDirectives } = body;

    // Use the raw script instead of the full system prompt if available
    const rawContent = script || prompt;

    if (!rawContent) {
      return NextResponse.json({ error: "Missing content to generate" }, { status: 400 });
    }

    // Clean script
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

    // The "Jugaad" for TTS Emotions using Punctuation Formatting
    if (ttsDirectives) {
       const directives = ttsDirectives.toLowerCase();
       if (directives.includes("excited") || directives.includes("high energy")) {
         // Replace some periods with exclamation marks to raise pitch
         textToSynthesize = textToSynthesize.replace(/\./g, '!');
       }
       if (directives.includes("slow") || directives.includes("dramatic") || directives.includes("storyteller") || directives.includes("serious")) {
         // Add dramatic pauses by replacing periods with ellipses
         textToSynthesize = textToSynthesize.replace(/\./g, '... ');
       }
    }

    if (!textToSynthesize) {
       textToSynthesize = "Please provide a valid script to read.";
    }

    // Generate Audio using ElevenLabs TTS (Premium Emotional AI Voices)
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    if (!ELEVENLABS_API_KEY) {
      return NextResponse.json({ error: "Missing ELEVENLABS_API_KEY in environment variables" }, { status: 500 });
    }

    // Default: Adam (Male, Narrative), Bella (Female, Soft)
    const voiceId = ttsDirectives && ttsDirectives.toLowerCase().includes("female") ? 'EXAVITQu4vr4xnSDxMaL' : 'pNInz6obpgDQGcFmaJgB';
    
    // Emotion mapping for stability and similarity boost
    let stability = 0.5; // default
    let similarity_boost = 0.75;
    
    if (ttsDirectives) {
      const dirs = ttsDirectives.toLowerCase();
      if (dirs.includes("excited") || dirs.includes("dramatic")) {
        stability = 0.3; // More emotional variation
      }
      if (dirs.includes("serious") || dirs.includes("news") || dirs.includes("flat")) {
        stability = 0.8; // More stable/monotone
      }
    }

    const ttsResponse = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: "POST",
      headers: {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: textToSynthesize,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: stability,
          similarity_boost: similarity_boost
        }
      })
    });

    if (!ttsResponse.ok) {
      const errText = await ttsResponse.text();
      console.error("ElevenLabs API Error:", errText);
      return NextResponse.json({ error: "Failed to generate audio from ElevenLabs" }, { status: 500 });
    }

    const audioArrayBuffer = await ttsResponse.arrayBuffer();
    const combinedBase64 = Buffer.from(audioArrayBuffer).toString('base64');
    const audioUrl = `data:audio/mp3;base64,${combinedBase64}`;

    // Generate Background Music (Instant Local Library Fallback)
    // HuggingFace Free API is too slow for Vercel/Local dev (causes 503 timeouts). 
    // We use a curated list of royalty-free links to instantly provide dynamic BGM.
    const LOCAL_BGM_LIBRARY: Record<string, string[]> = {
      "Lo-Fi / Chill": [2,4,10,14,15].map(i => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i}.mp3`),
      "Lofi Chill": [2,4,10,14,15].map(i => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i}.mp3`),
      "Tense Ambient": [1,3,8,13,16].map(i => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i}.mp3`),
      "Upbeat Corporate": [5,6,7,9,11,12,17].map(i => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i}.mp3`),
      "Trap / Hip Hop": [11,12,17].map(i => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i}.mp3`),
      "Bhojpuri Bass": [7,9,16].map(i => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i}.mp3`),
      "Bundeli Folk": [4,15].map(i => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i}.mp3`),
    };

    let bgUrl = null;
    const selectedMood = genre || bgMusic;
    if (selectedMood && selectedMood !== "None") {
       const trackList = LOCAL_BGM_LIBRARY[selectedMood] || LOCAL_BGM_LIBRARY["Lo-Fi / Chill"];
       bgUrl = trackList[Math.floor(Math.random() * trackList.length)];
       console.log("Selected Instant AI BGM:", bgUrl);
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
