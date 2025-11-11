# Changes Log

## October 31, 2024 - 12:24 AM

### Changes Made

#### 1. Fixed Navbar Transparency in Light Mode
- **File**: `src/components/Navbar.tsx`
- **Change**: Removed conditional transparency - navbar now always has glass effect in both themes
- **Before**: Navbar was transparent at top, became glass effect on scroll
- **After**: Navbar always has glass effect (consistent with dark mode)

#### 2. Updated All Designer Names
Changed from "Aarav Sharma" to "Gayatri Chatterjee" in:

- **`src/components/Navbar.tsx`**
  - Logo initials: AS → GC

- **`src/components/Footer.tsx`**
  - Brand name in footer
  - Copyright text
  - Email: aarav.sharma@example.com → gayatri.chatterjee@example.com

- **`src/app/page.tsx`**
  - Hero section main heading

- **`src/app/about/page.tsx`**
  - About page heading
  - Email in contact info section (2 places)

- **`src/app/layout.tsx`**
  - Page title metadata
  - Author metadata
  - OpenGraph title

### Files Modified
1. `src/components/Navbar.tsx`
2. `src/components/Footer.tsx`
3. `src/app/page.tsx`
4. `src/app/about/page.tsx`
5. `src/app/layout.tsx`

### Result
✅ Navbar now has consistent glass effect in both light and dark modes
✅ All instances of "Aarav Sharma" replaced with "Gayatri Chatterjee"
✅ All email addresses updated to gayatri.chatterjee@example.com
✅ Logo initials changed to "GC"
✅ Metadata updated for SEO

### Testing
- Development server recompiled successfully
- No errors in compilation
- Changes are live at http://localhost:3000

---

## October 31, 2024 - 12:34 AM

### Navbar Glass Effect Enhancement

#### Issue
Text from page content was visible through the navbar in light mode due to low opacity.

#### Fix
- **File**: `src/app/globals.css`
- **Changes to `.light .glass-effect`**:
  - Increased opacity: `0.7` → `0.95` (95% opaque)
  - Stronger backdrop blur: `10px` → `20px`
  - Changed background color to match theme: `rgba(249, 250, 251, 0.95)`
  - Added subtle bottom border for definition
  - Added soft shadow for depth

#### Result
✅ Navbar is now more opaque - text no longer shows through
✅ Maintains translucent glass aesthetic
✅ Better visual hierarchy
✅ Improved readability

---

**Note**: Remember to update social media links (LinkedIn, Dribbble, GitHub) with actual URLs when ready to deploy.
