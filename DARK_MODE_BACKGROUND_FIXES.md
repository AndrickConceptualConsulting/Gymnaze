# Dark Mode Background Fixes - Summary

## Issue
Several sections in dark mode were showing light gray backgrounds instead of the consistent dark blue background, creating visual inconsistencies in:

- **Homepage sections:** The Complete Athlete Profile Coaches Crave, Get Noticed Get Recruited Get Results, and See How You Stack Up
- **Athletes page:** Multiple sections throughout the page
- **About page:** We Built GYMNAZE to Measure What Everyone Else Ignores, What Makes GYMNAZE Different

## Root Cause
The issue was caused by hardcoded light gray background colors (`rgba(248, 249, 250, 0.6)`) that did not adapt to dark mode.

## Changes Made

### 1. Fixed UI Constants (`src/constants/ui.js`)
**Before:**
```javascript
lightGrey: 'rgba(248, 249, 250, 0.6)',
```

**After:**
```javascript
lightGrey: 'background.paper', // Uses theme-aware background
```

### 2. Fixed About Page (`src/pages/About.jsx`)
**Before:**
```javascript
<Box sx={{ backgroundColor: 'rgba(248, 249, 250, 0.6)' }}>
```

**After:**
```javascript
<Box sx={{ backgroundColor: 'background.paper' }}>
```
- Fixed 2 occurrences in the About page

### 3. Fixed Home Page Components

**ExplainerVideoSection (`src/components/home/ExplainerVideoSection.jsx`):**
**Before:**
```javascript
backgroundColor: 'rgba(248, 249, 250, 0.6)',
```

**After:**
```javascript
backgroundColor: 'background.paper',
```

### 4. Fixed Athletes Page Components

**AthleteToggleSection (`src/components/athletes/AthleteToggleSection.jsx`):**
**Before:**
```javascript
<Box sx={{ backgroundColor: 'rgba(248, 249, 250, 0.6)' }}>
```

**After:**
```javascript
<Box sx={{ backgroundColor: 'background.paper' }}>
```

**AthleteContent (`src/components/athletes/AthleteContent.jsx`):**
**Before:**
```javascript
<Box sx={{ backgroundColor: 'rgba(248, 249, 250, 0.6)' }}>
```

**After:**
```javascript
<Box sx={{ backgroundColor: 'background.paper' }}>
```

## Theme Colors Used

The dark mode now consistently uses the theme-defined colors:

- **`background.default`**: `#0A0F1B` (main dark blue background)
- **`background.paper`**: `#1A1F2E` (slightly lighter dark blue for sections)

## Sections Affected

### Homepage:
- ✅ **The Complete Athlete Profile Coaches Crave** - Now uses dark blue background
- ✅ **Get Noticed, Get Recruited, Get Results** - Now uses dark blue background  
- ✅ **See How You Stack Up** - Now uses dark blue background

### Athletes Page:
- ✅ **Entire page sections** - Now consistently use dark blue backgrounds

### About Page:
- ✅ **We Built GYMNAZE to Measure What Everyone Else Ignores** - Now uses dark blue background
- ✅ **What Makes GYMNAZE Different** - Now uses dark blue background

## Result

All sections now use consistent, theme-aware backgrounds that properly adapt between light and dark modes:

- **Light Mode**: Uses light backgrounds as intended
- **Dark Mode**: Uses consistent dark blue backgrounds (`#1A1F2E`) instead of problematic light gray

The website now maintains a cohesive visual experience in dark mode with the beautiful dark blue color scheme throughout all sections.

## Technical Implementation

By changing from hardcoded colors to theme-aware properties (`background.paper`), the sections now automatically adapt to the current theme mode, ensuring consistent visual design across the entire application.

This fix ensures that the dark mode experience is now visually cohesive and professional, maintaining the same high-quality design standards as the light mode.