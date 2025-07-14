#!/bin/bash

# GYMNAZE Email Setup Script
# Run this after you have your SendGrid API key

echo "🏆 GYMNAZE Email Setup"
echo "====================="

# Check if user provided SendGrid API key
if [ -z "$1" ]; then
    echo "❌ Please provide your SendGrid API key"
    echo "Usage: ./setup-email.sh YOUR_SENDGRID_API_KEY"
    echo ""
    echo "Get your API key from: https://app.sendgrid.com/settings/api_keys"
    exit 1
fi

SENDGRID_API_KEY="$1"

echo "📧 Setting up SendGrid API key..."
firebase functions:config:set sendgrid.api_key="$SENDGRID_API_KEY"

if [ $? -eq 0 ]; then
    echo "✅ SendGrid API key configured successfully"
else
    echo "❌ Failed to set SendGrid API key"
    exit 1
fi

echo ""
echo "🚀 Deploying Firebase Functions..."
firebase deploy --only functions

if [ $? -eq 0 ]; then
    echo "✅ Functions deployed successfully"
else
    echo "❌ Failed to deploy functions"
    exit 1
fi

echo ""
echo "🔒 Deploying Firestore Rules..."
firebase deploy --only firestore:rules

if [ $? -eq 0 ]; then
    echo "✅ Firestore rules deployed successfully"
else
    echo "❌ Failed to deploy Firestore rules"
    exit 1
fi

echo ""
echo "🎉 Email setup complete!"
echo ""
echo "Next steps:"
echo "1. Verify sender email (noreply@gymnaze.com) in SendGrid"
echo "2. Test the system by filling out a form"
echo "3. Check Firebase Functions logs: firebase functions:log"
echo ""
echo "Email flow:"
echo "- Inquiry form → User confirmation + CEO notification"
echo "- Newsletter form → User confirmation + CEO notification"