# Media Mafias Local AI Server

This is the local AI engine that powers the Media Mafias Studio Workspace. It runs locally on your machine to utilize your laptop's GPU (RTX 3050) for zero-cost AI music generation and audio mastering.

## Prerequisites
1. Python 3.10+ installed.
2. [FFmpeg](https://ffmpeg.org/download.html) installed and added to your system's PATH.

## Setup Instructions

1. Open a terminal/command prompt in this folder (`local_ai_server`).
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
   *Note: If you want to use your GPU, ensure you install the CUDA version of PyTorch by following instructions at [pytorch.org](https://pytorch.org/).*

4. Run the server:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

5. The server will start on `http://localhost:8000`. Keep this window open while you use the Media Mafias Studio on the web. The web app is configured to route production requests to this local server automatically.
