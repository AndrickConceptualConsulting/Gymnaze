# 🚀 GYMNAZE Vercel Deployment Guide

## Client Setup Instructions

### **Step 1: Access Your Client's Vercel Account**
1. Go to [vercel.com](https://vercel.com)
2. Have your client sign in to their Vercel account
3. Click "**Add New...**" → "**Project**"

### **Step 2: Import from GitHub**
1. Click "**Import Git Repository**"
2. If GitHub isn't connected:
   - Click "**Connect GitHub Account**"
   - Authorize Vercel to access repositories
3. Find and select: `AndrickConceptualConsulting/Gymnaze`
4. Click "**Import**"

### **Step 3: Configure Project Settings**
**Project Name**: `gymnaze-website` (or whatever your client prefers)

**Framework Preset**: Vite (should auto-detect)

**Build Settings**: 
- Build Command: `npm run build` ✅
- Output Directory: `dist` ✅
- Install Command: `npm install` ✅

### **Step 4: Environment Variables** 🔧
Add these environment variables in Vercel dashboard:

**Firebase Configuration:**
```
VITE_FIREBASE_API_KEY=AIzaSyBcv2DG4JryXizEJ5jG-BifbiI1HW5owj4
VITE_FIREBASE_AUTH_DOMAIN=gymnaze-aa0d6.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=gymnaze-aa0d6
VITE_FIREBASE_STORAGE_BUCKET=gymnaze-aa0d6.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=750114312912
VITE_FIREBASE_APP_ID=1:750114312912:web:d5625c9c483905bcaf04d5
VITE_FIREBASE_MEASUREMENT_ID=G-C3WD7T6TW9
```

**Site Configuration:**
```
VITE_SITE_URL=https://www.gymnaze.com
VITE_CONTACT_EMAIL=cjohnson@gymnaze.com
VITE_CEO_EMAIL=cjohnson@gymnaze.com
```

**EmailJS Configuration:**
```
VITE_EMAILJS_SERVICE_ID=service_89z8ahp
VITE_EMAILJS_PUBLIC_KEY=isF7c1S-XS079ofWV
VITE_EMAILJS_USER_INQUIRY_TEMPLATE_ID=template_8but207
VITE_EMAILJS_ADMIN_INQUIRY_TEMPLATE_ID=template_sxqp23h
VITE_EMAILJS_NEWSLETTER_USER_TEMPLATE_ID=template_newsletter_user
VITE_EMAILJS_NEWSLETTER_ADMIN_TEMPLATE_ID=template_newsletter_admin
```

**Production Settings:**
```
VITE_ENABLE_CSP=false
VITE_SUPPRESS_EXTERNAL_ERRORS=true
```

### **Step 5: Deploy** 🎯
1. Click "**Deploy**"
2. Wait for build to complete (usually 2-3 minutes)
3. Your site will be live at `https://[project-name].vercel.app`

### **Step 6: Custom Domain Setup** 🌐
**Important**: The site is intended to be at `www.gymnaze.com`

1. Go to Project Settings → Domains in Vercel
2. Add custom domain: `www.gymnaze.com`
3. Also add: `gymnaze.com` (will redirect to www version)
4. Follow DNS configuration instructions:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → Vercel's IP (provided in dashboard)
5. **Verify** `VITE_SITE_URL=https://www.gymnaze.com` is set correctly

---

## 🔧 **Post-Deployment Checklist**

### Test These Features:
- [ ] **Homepage loads correctly**
- [ ] **All navigation links work**
- [ ] **Privacy policy page accessible** (`/privacy`)
- [ ] **Early access form submission** (beta signup)
- [ ] **Newsletter signup**
- [ ] **Contact form functionality**
- [ ] **Firebase connection** (check console for errors)
- [ ] **EmailJS functionality** (test form submissions)

### Performance Checks:
- [ ] **Google Analytics tracking** (ID: G-C3WD7T6TW9)
- [ ] **Page load speed** (should be <3 seconds)
- [ ] **Mobile responsiveness**
- [ ] **All images loading properly**

---

## 🚨 **Important Notes**

### **Environment Variables Security:**
- All `VITE_` prefixed variables are **publicly accessible** in the browser
- This is normal for client-side apps
- Sensitive API keys are already configured appropriately

### **Auto-Deployment:**
- Vercel will automatically redeploy when you push to the `main` branch
- Perfect for continuous development

### **Monitoring:**
- Check Vercel dashboard for deployment status
- Monitor Firebase usage for beta signups
- Review EmailJS quota for form submissions

---

## 📞 **Support**

If any issues arise during deployment:
1. Check Vercel build logs in dashboard
2. Verify all environment variables are set
3. Ensure GitHub repository permissions are correct
4. Contact development team if needed

**GitHub Repository**: https://github.com/AndrickConceptualConsulting/Gymnaze
**Current Status**: ✅ Ready for deployment
**Build Status**: ✅ Passes production build
**Privacy Policy**: ✅ Beta-compliant and complete