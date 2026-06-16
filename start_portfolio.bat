@echo off
title Ahammadali Shaik Portfolio - Launcher
setlocal enabledelayedexpansion

echo ===================================================
echo    Ahammadali Shaik Portfolio - Launcher
echo ===================================================
echo.
echo   This is a single Next.js app. The "backend"
echo   (SSR, route handlers, /sitemap.xml, /robots.txt)
echo   and the "frontend" run inside ONE Next.js server.
echo.

set ROOT=%~dp0
set PORT=3030

:: ---- Check npm is available; if missing from PATH, try common Node.js dirs ----
:: (handles the case where Node.js was just installed and PATH isn't refreshed yet)
where npm >nul 2>nul
if not errorlevel 1 goto NPM_OK
if exist "%ProgramFiles%\nodejs\npm.cmd" set "PATH=%ProgramFiles%\nodejs;%PATH%"
if exist "%LOCALAPPDATA%\Programs\nodejs\npm.cmd" set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
where npm >nul 2>nul
if not errorlevel 1 goto NPM_OK
echo [ERROR] npm not found. Install Node.js 18.18+ from https://nodejs.org
echo         If you just installed Node.js, close this window and open a NEW one,
echo         or restart Windows, then run this file again.
pause
exit /b 1
:NPM_OK

:: ---- Install dependencies if node_modules is missing ----
if not exist "%ROOT%node_modules" (
    echo [INFO] First run detected - installing npm packages...
    echo        This can take a couple of minutes.
    cd /d "%ROOT%"
    call npm install
    if errorlevel 1 (
        echo [ERROR] npm install failed. See messages above.
        pause
        exit /b 1
    )
)

:: ---- Start the Next.js dev server (frontend + backend together) ----
echo [INFO] Starting the portfolio on port %PORT%...
start "Portfolio Server" /d "%ROOT%" cmd /k "npm run dev -- -p %PORT%"

:: ---- Wait for the server to respond, then open the browser ----
echo [INFO] Waiting for the server to start...
set /a TRIES=0
:WAIT_LOOP
timeout /t 2 /nobreak >nul
curl -s -o nul -w "%%{http_code}" http://localhost:%PORT% | findstr "200" >nul
if not errorlevel 1 goto SERVER_READY
set /a TRIES+=1
if !TRIES! lss 15 goto WAIT_LOOP
echo [WARN] Server not responding yet, opening browser anyway...

:SERVER_READY
start "" "http://localhost:%PORT%"

:: ---- Summary ----
echo.
echo ===================================================
echo    PORTFOLIO IS RUNNING
echo ===================================================
echo    Website  : http://localhost:%PORT%
echo    Sitemap  : http://localhost:%PORT%/sitemap.xml
echo    Robots   : http://localhost:%PORT%/robots.txt
echo ===================================================
echo.
echo  Keep the "Portfolio Server" window open while you
echo  browse. Close that window to stop the site.
echo.
echo  Press any key to close THIS launcher window.
pause >nul
endlocal
