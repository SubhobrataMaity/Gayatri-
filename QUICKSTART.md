# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, Framer Motion, etc.)

## Step 2: Start Development Server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You should see your portfolio website running! 🎉

## Step 3: Customize Your Portfolio

### Update Your Name
1. Open `src/app/page.tsx`
2. Find line ~115: Change `Aarav Sharma` to your name
3. Save the file - changes appear instantly!

### Add Your Projects
1. Open `src/app/projects/page.tsx`
2. Find the `projects` array (line ~14)
3. Edit the existing projects or add new ones:

```typescript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Short description',
  role: 'Your Role',
  tools: ['Figma', 'Adobe XD'],
  image: 'https://images.unsplash.com/photo-xxxxx',
  category: 'Web', // or 'Mobile', 'Branding'
  year: '2024',
}
```

### Update Contact Info
1. Open `src/app/about/page.tsx`
2. Update your bio (lines ~95-105)
3. Change email addresses throughout the file
4. Update social media links in `src/components/Footer.tsx`

### Change Theme Colors (Optional)
1. Open `tailwind.config.ts`
2. Modify colors in the `colors` section
3. Save and see changes instantly!

## Step 4: Add Your Resume

1. Place your resume PDF in the `/public` folder
2. Name it `resume.pdf`
3. The download button will work automatically!

## Step 5: Test Everything

- ✅ Click the theme toggle (sun/moon icon) to test light/dark mode
- ✅ Navigate between pages (Home, Projects, About)
- ✅ Test on mobile by resizing your browser window
- ✅ Check all links and buttons work

## Step 6: Deploy Your Portfolio

### Deploy to Vercel (Free & Easy)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "My portfolio"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" - Done! 🎉

Your portfolio will be live at: `your-project.vercel.app`

## 🆘 Need Help?

- **Lint Errors?** They're normal before running `npm install`
- **Images not loading?** Check the image URLs are valid
- **Styling issues?** Make sure you ran `npm install` and `npm run dev`

For detailed help, see [Documentation.md](./Documentation.md)

## 📝 Quick Checklist

Before going live:
- [ ] Changed name everywhere
- [ ] Updated email and social links
- [ ] Added your projects
- [ ] Updated bio
- [ ] Added resume PDF
- [ ] Tested on mobile
- [ ] Tested both themes

---

**That's it! You're ready to showcase your work to the world! 🌟**
