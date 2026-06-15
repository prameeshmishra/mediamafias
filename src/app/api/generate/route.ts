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

    // Generate Audio using node-edge-tts (Microsoft Neural TTS)
    const voiceId = ttsDirectives && ttsDirectives.toLowerCase().includes("male") ? 'hi-IN-MadhurNeural' : 'hi-IN-SwaraNeural';
    let pitch = 'default';
    let rate = 'default';

    if (ttsDirectives) {
      const dirs = ttsDirectives.toLowerCase();
      if (dirs.includes("excited")) pitch = '+10%';
      if (dirs.includes("serious") || dirs.includes("deep")) pitch = '-10%';
      
      if (dirs.includes("slow") || dirs.includes("storyteller")) rate = '-15%';
      if (dirs.includes("fast")) rate = '+15%';
    }

    const tts = new EdgeTTS({
      voice: voiceId,
      lang: 'hi-IN',
      outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
      pitch: pitch,
      rate: rate,
    });

    const tempFilePath = path.join(os.tmpdir(), `tts_${Date.now()}.mp3`);
    await tts.ttsPromise(textToSynthesize, tempFilePath);

    const buffer = fs.readFileSync(tempFilePath);
    const combinedBase64 = buffer.toString('base64');
    fs.unlinkSync(tempFilePath); // Cleanup
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
