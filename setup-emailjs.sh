#!/bin/bash

# GYMNAZE EmailJS Quick Setup Script

echo "🏆 GYMNAZE EmailJS Setup"
echo "========================="

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    echo "✅ .env file created"
else
    echo "✅ .env file already exists"
fi

echo ""
echo "📧 EmailJS Setup Required:"
echo "1. Go to https://www.emailjs.com"
echo "2. Create account and connect Gmail"
echo "3. Create 4 email templates (see setup-emailjs.md)"
echo "4. Update your .env file with EmailJS credentials:"
echo ""
echo "   VITE_EMAILJS_SERVICE_ID=your-service-id"
echo "   VITE_EMAILJS_PUBLIC_KEY=your-public-key"
echo "   VITE_EMAILJS_USER_INQUIRY_TEMPLATE_ID=your-template-id"
echo "   VITE_EMAILJS_ADMIN_INQUIRY_TEMPLATE_ID=your-template-id"
echo "   VITE_EMAILJS_NEWSLETTER_USER_TEMPLATE_ID=your-template-id"
echo "   VITE_EMAILJS_NEWSLETTER_ADMIN_TEMPLATE_ID=your-template-id"
echo ""
echo "📖 Complete setup guide: setup-emailjs.md"
echo ""
echo "🚀 After setup, run: npm run dev"
echo "🧪 Test both forms to verify email sending"