# 🔧 Troubleshooting Guide

Common issues and their solutions.

---

## ✅ Fixed Issues

### ~~Error: useTheme must be used within a ThemeProvider~~

**Status**: ✅ FIXED

**What was the problem?**
The ThemeProvider was returning early (before wrapping children) when not mounted, causing the useTheme hook to be called outside the provider context.

**Solution Applied:**
Updated `src/contexts/ThemeContext.tsx` to always wrap children in the ThemeContext.Provider, and conditionally hide content during initial mount.

---

## Common Issues & Solutions

### 1. Module Not Found Errors

**Error**: `Cannot find module 'react'` or similar

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### 2. Port Already in Use

**Error**: `Port 3000 is already in use`

**Solution**:
```bash
# Kill the process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use a different port
npm run dev -- -p 3001
```

### 3. Build Errors

**Error**: Build fails with TypeScript errors

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### 4. Images Not Loading

**Error**: Images show broken icon

**Solution**:
- Check image URLs are valid
- For external images, add domain to `next.config.js`:
```javascript
images: {
  domains: ['images.unsplash.com', 'your-domain.com'],
},
```

### 5. Styles Not Applied

**Error**: Website looks unstyled

**Solution**:
1. Ensure `globals.css` is imported in `layout.tsx`
2. Check Tailwind is configured correctly
3. Restart dev server: `npm run dev`

### 6. Theme Not Persisting

**Error**: Theme resets on page refresh

**Solution**:
- Check browser allows localStorage
- Clear browser cache and try again
- Check browser console for errors

### 7. Hydration Errors

**Error**: `Text content does not match server-rendered HTML`

**Solution**:
- This is usually caused by the theme system
- Already handled in ThemeContext with mounted state
- If persists, clear `.next` folder and rebuild

### 8. Framer Motion Errors

**Error**: Animation-related errors

**Solution**:
```bash
# Reinstall framer-motion
npm uninstall framer-motion
npm install framer-motion@^11.0.0
```

---

## Development Issues

### Hot Reload Not Working

**Solution**:
1. Save the file again
2. Restart dev server
3. Check for syntax errors in console

### Slow Performance

**Solution**:
1. Clear `.next` folder
2. Restart dev server
3. Check for infinite loops in useEffect

### TypeScript Errors

**Solution**:
1. Run `npm install` to ensure all types are installed
2. Check `tsconfig.json` is correct
3. Restart VS Code/IDE

---

## Deployment Issues

### Build Fails on Vercel

**Solution**:
1. Ensure `npm run build` works locally
2. Check environment variables are set
3. Review build logs for specific errors

### 404 on Deployed Site

**Solution**:
- Ensure all routes are in the `app` directory
- Check `next.config.js` for correct configuration
- Verify deployment platform settings

### Styles Missing on Production

**Solution**:
1. Ensure Tailwind is in `dependencies`, not `devDependencies`
2. Check `postcss.config.js` exists
3. Rebuild and redeploy

---

## Browser-Specific Issues

### Safari Issues

**Solution**:
- Check `-webkit-` prefixes in CSS
- Test on actual Safari, not just Chrome DevTools
- Ensure backdrop-filter is supported

### iOS Safari Issues

**Solution**:
- Test on actual iOS device
- Check viewport meta tag in `layout.tsx`
- Ensure touch events work correctly

---

## Getting Help

If you encounter an issue not listed here:

1. **Check Browser Console**: Press F12 and look for errors
2. **Check Terminal**: Look for error messages in the dev server
3. **Clear Everything**:
   ```bash
   rm -rf node_modules .next
   npm install
   npm run dev
   ```
4. **Check Documentation**: See `Documentation.md` for detailed guides
5. **Search Error Message**: Google the exact error message

---

## Useful Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run dev

# Check for outdated packages
npm outdated

# Update packages
npm update
```

---

## Debug Mode

To enable more detailed error messages:

1. Check `.env.local` (create if doesn't exist):
```
NODE_ENV=development
```

2. Check browser console (F12)
3. Check terminal output

---

## Still Having Issues?

1. ✅ Followed all steps above?
2. ✅ Checked browser console?
3. ✅ Checked terminal output?
4. ✅ Tried clearing cache?
5. ✅ Restarted dev server?

If yes to all, the issue might be environment-specific. Check:
- Node.js version (should be 18+)
- npm version
- Operating system
- Browser version

---

**Last Updated**: October 31, 2024
