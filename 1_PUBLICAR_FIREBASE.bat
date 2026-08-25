@echo off
setlocal
title Pica Pau Motos - Publicar regras do Firebase
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Instale o Node.js pelo site https://nodejs.org/ e tente novamente.
  pause
  exit /b 1
)

where firebase >nul 2>&1
if errorlevel 1 call npm install -g firebase-tools
if errorlevel 1 goto :falha

call firebase login
if errorlevel 1 goto :falha
call firebase use oficinapicapaumotos34
if errorlevel 1 goto :falha
call firebase deploy --only "firestore:rules"
if errorlevel 1 goto :falha

echo.
echo Regras do Firestore publicadas com sucesso.
pause
exit /b 0

:falha
echo.
echo Nao foi possivel publicar o Firebase. Consulte o arquivo LEIA-ME.md.
pause
exit /b 1
