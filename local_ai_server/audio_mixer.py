import os
from gtts import gTTS
from pydub import AudioSegment
import uuid
import re

def clean_script(script: str) -> str:
    """Removes directional tags like [Outro] or (Pause) from the script."""
    text = re.sub(r'\[.*?\]', '', script)
    text = re.sub(r'\(.*?\)', '', text)
    text = re.sub(r'SYSTEM COMMAND:.*?(?:\n|$)', '', text)
    text = re.sub(r'\[ CONTENT FORMAT \][\s\S]*?\n\n', '', text)
    return text.strip()

def process_and_mix_audio(script: str, music_path: str, output_filename: str) -> str:
    """
    1. Generates TTS using gTTS (Hindi).
    2. Loads the generated background music.
    3. Ducks the background music volume.
    4. Overlays TTS on top of background music.
    5. Exports as mastered mp3.
    """
    cleaned_text = clean_script(script)
    if not cleaned_text:
        cleaned_text = "Please provide text"

    # Generate TTS
    tts_filename = f"temp_audio/tts_{uuid.uuid4()}.mp3"
    tts = gTTS(text=cleaned_text, lang='hi', slow=False)
    tts.save(tts_filename)

    # Load audio segments
    voice = AudioSegment.from_mp3(tts_filename)
    bg_music = AudioSegment.from_file(music_path)

    # Make background music as long as the voice track (looping if needed)
    if len(bg_music) < len(voice):
        # Loop music to fit voice
        loops_needed = (len(voice) // len(bg_music)) + 1
        bg_music = bg_music * loops_needed
    
    # Trim background music to match voice length + 3 seconds of tail
    bg_music = bg_music[:len(voice) + 3000]

    # Ducking: Reduce background music volume by 12 dB
    bg_music = bg_music - 12

    # Mix them together
    mixed = bg_music.overlay(voice, position=0)

    # Apply simple normalization (bringing peak to 0 dB)
    mixed = mixed.normalize()

    # Export final file
    mixed.export(output_filename, format="mp3", bitrate="192k")

    # Cleanup temp TTS
    os.remove(tts_filename)

    return output_filename
