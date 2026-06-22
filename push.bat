@echo off
REM ===== SEVR: Publicera andringar (dubbelklicka mig efter att du sparat i editorn) =====
title SEVR - Publicera till webben
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0push.ps1"
echo.
echo Du kan stanga det har fonstret.
pause
