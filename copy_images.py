import shutil
import os

files = [
    (r"C:\Users\maiao\.gemini\antigravity\brain\3919f8b0-6939-4552-9c07-3501183266c3\2026_lockin_1778447204542.png", r"d:\site-apps\portfolio\public\images\projects\2026-lockin.png"),
    (r"C:\Users\maiao\.gemini\antigravity\brain\3919f8b0-6939-4552-9c07-3501183266c3\code_preview_1778447244690.png", r"d:\site-apps\portfolio\public\images\projects\code-preview.png"),
    (r"C:\Users\maiao\.gemini\antigravity\brain\3919f8b0-6939-4552-9c07-3501183266c3\scream_runner_1778447336279.png", r"d:\site-apps\portfolio\public\images\projects\scream-runner.png"),
    (r"C:\Users\maiao\.gemini\antigravity\brain\3919f8b0-6939-4552-9c07-3501183266c3\money_tracker_1778447394790.png", r"d:\site-apps\portfolio\public\images\projects\money-tracker.png"),
    (r"C:\Users\maiao\.gemini\antigravity\brain\3919f8b0-6939-4552-9c07-3501183266c3\calculator_aluat_1778447733423.png", r"d:\site-apps\portfolio\public\images\projects\calculator-aluat.png")
]

for src, dst in files:
    try:
        shutil.copy2(src, dst)
        print(f"Copied {src} to {dst}")
    except Exception as e:
        print(f"Failed to copy {src}: {e}")
