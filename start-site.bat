@echo off
setlocal

cd /d "%~dp0"

echo ==========================================
echo   Iniciando o Magazine Gerrayd
echo ==========================================
echo.

where pnpm >nul 2>nul
if errorlevel 1 (
  echo [ERRO] O pnpm nao foi encontrado no PATH.
  echo Instale o pnpm e tente novamente.
  pause
  exit /b 1
)

if not exist ".env" (
  if exist ".env.example" (
    echo [INFO] Arquivo .env nao encontrado. Copiando de .env.example...
    copy /y ".env.example" ".env" >nul
  )
)

if not exist "node_modules" (
  echo [INFO] Instalando dependencias...
  call pnpm install
  if errorlevel 1 (
    echo [ERRO] Falha ao instalar dependencias.
    pause
    exit /b 1
  )
)

echo [INFO] Gerando Prisma Client...
call pnpm db:generate
if errorlevel 1 (
  echo [ERRO] Falha ao gerar o Prisma Client.
  pause
  exit /b 1
)

echo.
echo [INFO] Iniciando o servidor em http://localhost:3000
echo.
call pnpm dev

endlocal
