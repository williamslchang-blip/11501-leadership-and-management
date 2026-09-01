@echo off
chcp 65001 >nul
title 碩士在職專班 - 領導與管理 Week 1 教學網站啟動器

echo ========================================================
echo   碩士在職專班｜領導與管理 (Week 1) 互動教學網站
echo ========================================================
echo.
echo [1] 直接以預設瀏覽器開啟 (推薦，快速無依賴)
echo [2] 啟動本機 Python HTTP 伺服器 (http://localhost:8080)
echo.
set /p choice="請選擇啟動方式 (預設 1): "

if "%choice%"=="2" (
    echo.
    echo 正在啟動 Python Web Server 於 http://localhost:8080 ...
    start http://localhost:8080/index.html
    python -m http.server 8080
) else (
    echo.
    echo 正在以瀏覽器開啟教學網站...
    start "" "%~dp0index.html"
)
