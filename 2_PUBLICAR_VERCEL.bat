@echo off
setlocal
title Pica Pau Motos - Validar antes do GitHub
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Instale o Node.js pelo site https://nodejs.org/ e tente novamente.
  pause
  exit /b 1
)

echo Instalando dependencias...
call npm ci
if errorlevel 1 goto :falha

echo Validando o sistema...
call npm run build
if errorlevel 1 goto :falha

echo.
echo Site validado com sucesso.
echo Agora envie os arquivos ao GitHub e importe o repositorio na Vercel.
pause
exit /b 0

:falha
echo.
echo Nao foi possivel validar o site. Consulte o arquivo LEIA-ME.md.
pause
exit /b 1
