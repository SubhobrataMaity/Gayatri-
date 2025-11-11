# ✅ Customization Checklist

Use this checklist to personalize your portfolio website.

---

## 🎯 Essential Customizations

### 1. Personal Information

- [ ] **Update Name**
  - File: `src/app/page.tsx` (line ~115)
  - File: `src/app/about/page.tsx` (line ~93)
  - File: `src/components/Footer.tsx` (line ~30)
  - Change: "Aarav Sharma" → Your Name

- [ ] **Update Title/Tagline**
  - File: `src/app/page.tsx` (line ~125)
  - Change: "UI/UX Designer & Problem Solver" → Your Title

- [ ] **Update Bio**
  - File: `src/app/about/page.tsx` (lines ~95-105)
  - Write your own story and background

- [ ] **Update SEO Metadata**
  - File: `src/app/layout.tsx` (lines ~11-18)
  - Update title, description, keywords

---

### 2. Contact Information

- [ ] **Email Address**
  - File: `src/components/Footer.tsx` (line ~16)
  - File: `src/app/about/page.tsx` (lines ~327, 355)
  - Change: "aarav.sharma@example.com" → Your Email

- [ ] **Social Media Links**
  - File: `src/components/Footer.tsx` (lines ~13-16)
  - Update LinkedIn, Dribbble, GitHub URLs
  - File: `src/app/about/page.tsx` (lines ~348-351)

---

### 3. Projects

- [ ] **Update Featured Projects (Home Page)**
  - File: `src/app/page.tsx` (lines ~11-35)
  - Replace with 3 of your best projects
  - Update: title, description, role, tools, image, category

- [ ] **Update All Projects (Projects Page)**
  - File: `src/app/projects/page.tsx` (lines ~14-83)
  - Add/edit all your projects
  - Include: title, description, role, tools, image, category, year

- [ ] **Upload Project Images**
  - Option 1: Use Unsplash URLs
  - Option 2: Add to `/public/images/` folder
  - Recommended size: 800x600px minimum

---

### 4. Skills & Experience

- [ ] **Update Skills**
  - File: `src/app/about/page.tsx` (lines ~17-26)
  - Add your tools and proficiency levels (0-100)

- [ ] **Update Work Experience**
  - File: `src/app/about/page.tsx` (lines ~28-48)
  - Add your job history with title, company, period, description

---

### 5. Resume

- [ ] **Add Your Resume PDF**
  - Place your resume in `/public/` folder
  - Name it: `resume.pdf`
  - Or update the link in `src/app/about/page.tsx` (line ~109)

---

## 🎨 Optional Customizations

### Theme Colors

- [ ] **Light Mode Colors**
  - File: `tailwind.config.ts` (lines ~13-19)
  - Customize: background, accent, text colors

- [ ] **Dark Mode Colors**
  - File: `tailwind.config.ts` (lines ~20-27)
  - Customize: background, accent, text colors

### Typography

- [ ] **Change Fonts**
  - File: `src/app/globals.css` (line ~1)
  - Import your preferred Google Fonts
  - Update font-family in lines ~18-24

### Animations

- [ ] **Adjust Animation Speed**
  - File: `tailwind.config.ts` (lines ~49-54)
  - Modify duration values (e.g., 0.6s → 0.4s for faster)

### Logo

- [ ] **Add Custom Logo**
  - File: `src/components/Navbar.tsx` (lines ~46-52)
  - Replace "AS" text with your logo image or initials

---

## 🧪 Testing Checklist

### Functionality

- [ ] Theme toggle works (light ↔ dark)
- [ ] All navigation links work
- [ ] Project filters work correctly
- [ ] Contact form validates input
- [ ] Resume download works
- [ ] Social media links open correctly

### Responsive Design

- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768-1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Test on iOS Safari
- [ ] Test on Android Chrome

### Browser Compatibility

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (macOS)
- [ ] Safari (iOS)

### Visual Check

- [ ] All images load correctly
- [ ] Text is readable in both themes
- [ ] No layout shifts on page load
- [ ] Animations are smooth
- [ ] Hover effects work

---

## 🚀 Pre-Deployment Checklist

### Content

- [ ] All placeholder text replaced
- [ ] All dummy images replaced
- [ ] All links tested and working
- [ ] Resume PDF uploaded
- [ ] Contact information verified

### SEO & Performance

- [ ] Page titles updated
- [ ] Meta descriptions added
- [ ] Images optimized (compressed)
- [ ] Alt text added to images
- [ ] Favicon added (optional)

### Code Quality

- [ ] No console errors
- [ ] No broken links
- [ ] Build completes successfully (`npm run build`)
- [ ] Lighthouse score checked

---

## 📝 Deployment Checklist

### Before Deploying

- [ ] Push code to GitHub
- [ ] Create production build (`npm run build`)
- [ ] Test production build locally (`npm start`)
- [ ] Environment variables set (if any)

### After Deploying

- [ ] Test live site on mobile
- [ ] Test live site on desktop
- [ ] Verify all links work
- [ ] Check page load speed
- [ ] Test contact form (if connected to backend)
- [ ] Share with friends for feedback

---

## 🎯 Priority Order

**Do First** (Essential):
1. Update name and title
2. Change email addresses
3. Update social media links
4. Add your projects
5. Update bio

**Do Second** (Important):
1. Add resume PDF
2. Update skills and experience
3. Replace project images
4. Test on mobile

**Do Later** (Optional):
1. Customize colors
2. Change fonts
3. Adjust animations
4. Add custom logo

---

## 💡 Pro Tips

1. **Start Small**: Update one section at a time
2. **Save Often**: Changes are auto-saved in dev mode
3. **Test Frequently**: Check your changes in the browser
4. **Use Real Content**: Replace all dummy data before deploying
5. **Get Feedback**: Share with friends before going live

---

## ✅ Final Check

Before considering your portfolio complete:

- [ ] I've updated all personal information
- [ ] I've added my real projects
- [ ] I've tested on mobile and desktop
- [ ] I've tested both light and dark modes
- [ ] I've verified all links work
- [ ] I've added my resume
- [ ] I'm happy with how it looks!

---

**Ready to deploy? See `Documentation.md` for deployment instructions!**

Good luck with your portfolio! 🎉
