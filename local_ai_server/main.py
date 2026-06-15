from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import base64
import os
import uuid
from typing import Optional

from music_generator import generate_music
from audio_mixer import process_and_mix_audio

app = FastAPI(title="Media Mafias Local AI Engine")

# Allow Next.js frontend to communicate with this local server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GenerateRequest(BaseModel):
    script: str
    format: str
    speed: Optional[str] = "Medium (1.0x)"
    tone: Optional[str] = "Conversational"
    emotion: Optional[str] = "Neutral"
    bgMusic: Optional[str] = "Lo-Fi / Chill"
    genre: Optional[str] = "Trap / Hip Hop"
    energy: Optional[str] = "High Energy"
    tempo: Optional[str] = "120 BPM"

@app.post("/api/generate_and_mix")
async def generate_and_mix(req: GenerateRequest):
    try:
        # Create temp dir for processing
        os.makedirs("temp_audio", exist_ok=True)
        session_id = str(uuid.uuid4())
        
        # 1. Generate Background Music using Audiocraft (GPU)
        music_prompt = f"{req.genre}, {req.energy}, {req.tempo}, {req.bgMusic}"
        # We limit duration to 30s to keep it fast for testing
        music_path = generate_music(prompt=music_prompt, duration=30, output_filename=f"temp_audio/bg_{session_id}.wav")

        # 2. Mix & Master Audio (TTS + Music)
        final_audio_path = process_and_mix_audio(
            script=req.script,
            music_path=music_path,
            output_filename=f"temp_audio/final_{session_id}.mp3"
        )

        # 3. Read final file and convert to base64 to send back to Next.js
        with open(final_audio_path, "rb") as f:
            audio_bytes = f.read()
            
        audio_base64 = base64.b64encode(audio_bytes).decode('utf-8')
        
        # Cleanup
        try:
            os.remove(music_path)
            os.remove(final_audio_path)
        except:
            pass

        return {
            "success": True,
            "message": "Generated and mastered locally on GPU",
            "audioUrl": f"data:audio/mp3;base64,{audio_base64}"
        }

    except Exception as e:
        print("Error during generation:", e)
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
