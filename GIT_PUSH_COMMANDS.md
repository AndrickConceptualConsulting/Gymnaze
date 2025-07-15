# Git Commands to Push Google Search Console Updates

## Run these commands in your terminal:

```bash
# Navigate to your project directory
cd "C:\Users\Owner\OneDrive\Desktop\projects\gymnaze"

# Add all the new and modified files
git add .

# Commit the changes
git commit -m "feat: Implement Google Search Console integration

- Add Google verification file (google8fdd43b6bb5bc73f.html)
- Add backup verification meta tag to index.html
- Create automated sitemap generation with scripts/generate-sitemap.js
- Add robots.txt with proper search engine directives
- Implement Schema.org structured data for better SEO
- Update package.json with sitemap generation script
- Add comprehensive documentation

Files added/modified:
- public/google8fdd43b6bb5bc73f.html (verification)
- public/robots.txt (search engine directives)
- public/sitemap.xml (auto-generated sitemap)
- scripts/generate-sitemap.js (sitemap generator)
- index.html (meta tag + structured data)
- package.json (added sitemap script)
- docs/GOOGLE_SEARCH_CONSOLE_SETUP.md (documentation)

Ready for Google Search Console verification and sitemap submission!"

# Push to your repository
git push origin main
```

## Files Ready for Commit:

### New Files:
- ✅ `public/google8fdd43b6bb5bc73f.html` - Verification file
- ✅ `public/robots.txt` - Search engine directives  
- ✅ `public/sitemap.xml` - Auto-generated sitemap
- ✅ `scripts/generate-sitemap.js` - Sitemap generator
- ✅ `docs/GOOGLE_SEARCH_CONSOLE_SETUP.md` - Documentation

### Modified Files:
- ✅ `index.html` - Added verification meta tag and structured data
- ✅ `package.json` - Added sitemap generation script

## After Pushing:

1. **Verify in Google Search Console**:
   - Go to https://search.google.com/search-console
   - Add property: https://www.gymnaze.com
   - Verify using HTML file method

2. **Submit Sitemap**:
   - Submit: https://www.gymnaze.com/sitemap.xml

3. **Deploy to Production**:
   - Run `npm run deploy` to update your live site

All Google Search Console implementation is complete and ready! 🚀