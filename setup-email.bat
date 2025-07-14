@echo off
REM GYMNAZE Email Setup Script for Windows
REM Run this after you have your SendGrid API key

echo 🏆 GYMNAZE Email Setup
echo =====================

if "%1"=="" (
    echo ❌ Please provide your SendGrid API key
    echo Usage: setup-email.bat YOUR_SENDGRID_API_KEY
    echo.
    echo Get your API key from: https://app.sendgrid.com/settings/api_keys
    exit /b 1
)

set SENDGRID_API_KEY=%1

echo 📧 Setting up SendGrid API key...
firebase functions:config:set sendgrid.api_key="%SENDGRID_API_KEY%"

if %errorlevel% neq 0 (
    echo ❌ Failed to set SendGrid API key
    exit /b 1
)

echo ✅ SendGrid API key configured successfully
echo.

echo 🚀 Deploying Firebase Functions...
firebase deploy --only functions

if %errorlevel% neq 0 (
    echo ❌ Failed to deploy functions
    exit /b 1
)

echo ✅ Functions deployed successfully
echo.

echo 🔒 Deploying Firestore Rules...
firebase deploy --only firestore:rules

if %errorlevel% neq 0 (
    echo ❌ Failed to deploy Firestore rules
    exit /b 1
)

echo ✅ Firestore rules deployed successfully
echo.

echo 🎉 Email setup complete!
echo.
echo Next steps:
echo 1. Verify sender email (noreply@gymnaze.com) in SendGrid
echo 2. Test the system by filling out a form
echo 3. Check Firebase Functions logs: firebase functions:log
echo.
echo Email flow:
echo - Inquiry form → User confirmation + CEO notification
echo - Newsletter form → User confirmation + CEO notification