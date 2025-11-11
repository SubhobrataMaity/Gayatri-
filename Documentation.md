# Portfolio Website Documentation

## 📋 Table of Contents
1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Customization Guide](#customization-guide)
5. [Adding New Content](#adding-new-content)
6. [Theme Customization](#theme-customization)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

This is a modern, responsive 3-page portfolio website built for UI/UX designers. It features:

- **Light & Dark Mode**: Smooth theme switching with persistent preferences
- **3 Pages**: Home, Projects, and About/Contact
- **Responsive Design**: Optimized for desktop, tablet, mobile, and all browsers
- **Smooth Animations**: Built with Framer Motion for professional transitions
- **Modern UI**: Neumorphic design (light) and modern dark mode with glow effects

### Tech Stack
- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Home page
│   │   ├── projects/
│   │   │   └── page.tsx        # Projects page
│   │   ├── about/
│   │   │   └── page.tsx        # About/Contact page
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Footer.tsx          # Footer component
│   │   └── ThemeToggle.tsx     # Theme switcher
│   └── contexts/
│       └── ThemeContext.tsx    # Theme state management
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── Documentation.md            # This file
```

---

## 🎨 Customization Guide

### 1. Update Personal Information

#### **Name and Title**
Edit the following files:

**Home Page** (`src/app/page.tsx`):
```typescript
// Line ~115
<span className="gradient-text">Aarav Sharma</span>

// Line ~125
UI/UX Designer & Problem Solver
```

**About Page** (`src/app/about/page.tsx`):
```typescript
// Line ~93
Hi, I'm Aarav Sharma
```

**Footer** (`src/components/Footer.tsx`):
```typescript
// Line ~30
<h3>Aarav Sharma</h3>
```

**Layout Metadata** (`src/app/layout.tsx`):
```typescript
// Line ~11-12
title: 'Your Name - UI/UX Designer',
description: 'Your custom description',
```

#### **Bio and Description**
**About Page** (`src/app/about/page.tsx`):
```typescript
// Lines ~95-105
// Update the bio paragraphs with your own story
```

#### **Contact Email**
Replace `aarav.sharma@example.com` in:
- `src/components/Footer.tsx` (line ~16)
- `src/app/about/page.tsx` (lines ~327, 355)

#### **Social Media Links**
**Footer** (`src/components/Footer.tsx`):
```typescript
// Lines ~13-16
const socialLinks = [
  { icon: Linkedin, href: 'YOUR_LINKEDIN_URL', label: 'LinkedIn' },
  { icon: Dribbble, href: 'YOUR_DRIBBBLE_URL', label: 'Dribbble' },
  { icon: Github, href: 'YOUR_GITHUB_URL', label: 'GitHub' },
  { icon: Mail, href: 'mailto:YOUR_EMAIL', label: 'Email' },
];
```

---

## 📝 Adding New Content

### Adding Projects

**Edit** `src/app/projects/page.tsx` (starting at line ~14):

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Short description (1-2 sentences)',
    longDescription: 'Detailed description with results',
    role: 'Your Role',
    tools: ['Tool1', 'Tool2', 'Tool3'],
    image: 'https://your-image-url.com/image.jpg',
    category: 'Web', // Options: 'Web', 'Mobile', 'Branding'
    year: '2024',
  },
  // Add more projects here...
];
```

**Image Sources:**
- Use Unsplash URLs (free): `https://images.unsplash.com/photo-xxxxx?w=800&h=600&fit=crop`
- Or upload to `/public/images/` and use: `/images/your-image.jpg`

### Adding Skills

**Edit** `src/app/about/page.tsx` (starting at line ~17):

```typescript
const skills = [
  { name: 'Skill Name', level: 95 }, // level: 0-100
  // Add more skills...
];
```

### Adding Work Experience

**Edit** `src/app/about/page.tsx` (starting at line ~27):

```typescript
const experience = [
  {
    title: 'Job Title',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Brief description of your role',
  },
  // Add more experience...
];
```

### Updating Featured Projects (Home Page)

**Edit** `src/app/page.tsx` (starting at line ~11):

```typescript
const featuredProjects = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Description',
    role: 'Your Role',
    tools: ['Tool1', 'Tool2'],
    image: 'image-url',
    category: 'Web',
  },
  // Add up to 3 featured projects
];
```

---

## 🎨 Theme Customization

### Changing Colors

**Edit** `tailwind.config.ts`:

```typescript
colors: {
  light: {
    bg: '#F9FAFB',           // Background color
    card: '#FFFFFF',          // Card background
    text: '#1F2937',          // Primary text
    textSecondary: '#6B7280', // Secondary text
    accent: '#0066FF',        // Accent color (buttons, links)
    accentHover: '#0052CC',   // Accent hover state
  },
  dark: {
    bg: '#0D1117',            // Background color
    card: '#1E1E1E',          // Card background
    text: '#F9FAFB',          // Primary text
    textSecondary: '#9CA3AF', // Secondary text
    accent: '#00FFFF',        // Accent color (cyan)
    accentHover: '#00CCCC',   // Accent hover state
    accentSecondary: '#9D4EDD', // Secondary accent (magenta/violet)
  }
}
```

### Changing Fonts

**Edit** `src/app/globals.css`:

```css
/* Line 1: Import your fonts */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

/* Lines 18-24: Update font families */
.light {
  font-family: 'YourFont', sans-serif;
}

.dark {
  font-family: 'YourFont', sans-serif;
}
```

**Also update** `tailwind.config.ts`:

```typescript
fontFamily: {
  poppins: ['YourFont', 'sans-serif'],
  // Add your custom fonts
},
```

### Adjusting Animations

**Edit** `tailwind.config.ts` (animation section):

```typescript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',  // Adjust duration
  'slide-up': 'slideUp 0.6s ease-out',
  // Modify or add animations
},
```

---

## 📄 Adding/Updating Resume

### Option 1: Add PDF to Public Folder

1. Place your resume PDF in `/public/` folder
2. Name it `resume.pdf`
3. The download button will automatically work

### Option 2: Use External Link

**Edit** `src/app/about/page.tsx` (line ~109):

```typescript
<motion.a
  href="https://your-cloud-storage.com/resume.pdf"
  download
  // ... rest of the code
>
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Deploy to Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Connect your GitHub repo
   - Configure build settings
   - Deploy

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

---

## 🔧 Troubleshooting

### Issue: Lint Errors After Installation

**Solution**: These are expected before running `npm install`. They will resolve once dependencies are installed.

### Issue: Images Not Loading

**Solution**: 
1. Check image URLs are valid
2. For Next.js Image component, add domains to `next.config.js`:

```javascript
images: {
  domains: ['images.unsplash.com', 'your-domain.com'],
},
```

### Issue: Theme Not Persisting

**Solution**: Check browser localStorage is enabled. The theme preference is saved in localStorage.

### Issue: Animations Not Working

**Solution**: 
1. Ensure Framer Motion is installed: `npm install framer-motion`
2. Check browser supports modern CSS/JS features

### Issue: Build Errors

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Issue: Styling Not Applied

**Solution**:
1. Ensure Tailwind is properly configured
2. Check `globals.css` is imported in `layout.tsx`
3. Restart dev server: `npm run dev`

---

## 📞 Support

For additional help:
1. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
2. Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
3. Framer Motion docs: [framer.com/motion](https://www.framer.com/motion/)

---

## 🎉 Tips for Best Results

1. **Use High-Quality Images**: Minimum 800x600px for project images
2. **Keep Text Concise**: Short, impactful descriptions work best
3. **Test on Multiple Devices**: Check responsiveness on phone, tablet, desktop
4. **Optimize Images**: Compress images before uploading (use TinyPNG or similar)
5. **Update Regularly**: Keep your portfolio fresh with latest projects
6. **SEO**: Update metadata in `layout.tsx` for better search visibility
7. **Accessibility**: Maintain good color contrast and add alt text to images

---

## 📝 Quick Checklist Before Going Live

- [ ] Updated name and title everywhere
- [ ] Changed email addresses
- [ ] Updated social media links
- [ ] Added your projects with real images
- [ ] Updated bio and experience
- [ ] Added your resume PDF
- [ ] Tested on mobile and desktop
- [ ] Tested both light and dark modes
- [ ] Checked all links work
- [ ] Updated SEO metadata
- [ ] Tested contact form (if using real backend)

---

**Built with ❤️ for UI/UX Designers**

Last Updated: October 2024
