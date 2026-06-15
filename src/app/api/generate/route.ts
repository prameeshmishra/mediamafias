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

    // Generate Background Music via Hugging Face API (MusicGen)
    let bgUrl = null;
    if ((musicPrompt || (genre && bgMusic)) && process.env.HUGGINGFACE_API_KEY) {
      const hfPrompt = musicPrompt ? musicPrompt : `${genre}, ${energy || 'Medium energy'}, ${tempo || '120 BPM'}, ${bgMusic} instrumental`;
      console.log("Generating AI Music via HF API:", hfPrompt);
      
      let attempts = 0;
      let success = false;
      
      while (attempts < 3 && !success) {
        try {
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
            success = true;
          } else {
            const errorText = await hfResponse.text();
            console.error(`HF API Error (Attempt ${attempts + 1}):`, errorText);
            
            // Handle "Model is loading" cold start
            if (hfResponse.status === 503 && errorText.includes('currently loading')) {
              console.log("Model is loading, waiting 15 seconds before retry...");
              await new Promise(resolve => setTimeout(resolve, 15000));
              attempts++;
            } else {
              break; // Break on other errors (like invalid token)
            }
          }
        } catch(e) {
          console.error(`HF API Exception (Attempt ${attempts + 1}):`, e);
          break;
        }
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
