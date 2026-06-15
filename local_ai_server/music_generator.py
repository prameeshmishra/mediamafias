import torch
from audiocraft.models import MusicGen
from audiocraft.data.audio import audio_write
import os

# Initialize globally so it loads into VRAM only once
model = None

def load_model():
    global model
    if model is None:
        print("Loading MusicGen model to GPU (this takes a moment)...")
        # Use small model to fit inside 4GB VRAM
        model = MusicGen.get_pretrained('facebook/musicgen-small')
        print("Model loaded successfully!")

def generate_music(prompt: str, duration: int = 15, output_filename: str = "output.wav") -> str:
    """
    Generates music based on a text prompt using Audiocraft.
    Saves to output_filename and returns the path.
    """
    load_model()
    
    # Set duration
    model.set_generation_params(duration=duration)
    
    print(f"Generating music for prompt: '{prompt}'")
    wav = model.generate([prompt])
    
    # Audiocraft audio_write appends .wav automatically if not present, 
    # so we strip it to prevent double extensions
    base_name = output_filename.rsplit('.', 1)[0]
    
    audio_write(base_name, wav[0].cpu(), model.sample_rate, strategy="loudness", loudness_compressor=True)
    
    return f"{base_name}.wav"
