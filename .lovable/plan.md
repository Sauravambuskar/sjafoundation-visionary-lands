

## Plan: Complete SJA Foundation Website Updates

The codebase still has the old "Jyoti Shine" name, old phone number, missing Gallery section, missing Micro Finance business, and basic animations. Here's what needs to change:

---

### 1. Rename "Jyoti Shine" → "SJA Flour Cleaner" (all components)
- **Businesses.tsx**: Change title from "Jyoti Shine" to "SJA Flour Cleaner", update subtitle to "Floor & Surface Cleaning Solutions", update description
- **Footer.tsx**: Rename "Jyoti Shine Cleaners" to "SJA Flour Cleaner"
- **About.tsx**: Update the text referencing "Jyoti Shine" to "SJA Flour Cleaner"
- **Hero.tsx**: Update subtitle to mention all 5 businesses including micro finance

### 2. Add SJA Micro Finance as 5th business
- **Businesses.tsx**: Add new entry with `Banknote` icon, title "SJA Micro Finance", subtitle "Financial Services", description about micro loans and financial empowerment, features list, link to `#contact`
- Generate/use a placeholder image `hero-microfinance.jpg`
- Update heading from "Four Businesses" to "Five Businesses"
- **Footer.tsx**: Add Micro Finance to the businesses list
- **About.tsx**: Update stats from "2 Business Verticals" to "5 Business Verticals"

### 3. Update phone number to +91 96993 46910
- **Navbar.tsx**: line with `tel:+919999999999` → `tel:+919699346910`, display text → `+91 96993 46910`
- **Contact.tsx**: Same phone update
- **Footer.tsx**: Same phone update

### 4. Fix logo sizing
- **Navbar.tsx**: Change logo from `w-10 h-10` to `h-12 w-auto` for proper aspect ratio

### 5. Enhanced GSAP animations
- **Businesses.tsx**: Replace simple y+opacity animation with alternating x-axis slides (odd cards from left, even from right), add parallax effect on images via ScrollTrigger
- **Hero.tsx**: Add floating stats counter (5+ Business Verticals, 500+ Happy Clients, 10+ Years Experience) with `sine.inOut` yoyo animation
- **Gallery.tsx** (new): 3D rotate reveal animations on scroll

### 6. New Gallery section with lightbox
- Create **`src/components/Gallery.tsx`** with:
  - 6 images in a responsive grid (2 cols mobile, 3 cols desktop)
  - Images using Unsplash URLs for real human photos (real estate site visit, wedding celebration, security guard, cleaning staff, microfinance meeting, team photo)
  - Click-to-open lightbox overlay with close button and navigation
  - GSAP 3D `rotateY` reveal animation on scroll
  - Section heading: "Our Gallery" with gold gradient accent
- **Index.tsx**: Import and add Gallery between WhyUs and Contact

### 7. New sections to add
- **Testimonials.tsx**: Customer reviews section with 4-6 testimonial cards in a carousel/grid, star ratings, customer names, and which business they used. GSAP fade-in animations.
- **Stats/Counter section** in Hero: Floating animated counters

---

### Files to create
- `src/components/Gallery.tsx`
- `src/components/Testimonials.tsx`

### Files to modify
- `src/components/Businesses.tsx` — rename, add micro finance, enhance animations
- `src/components/Hero.tsx` — update text, add floating stats
- `src/components/Navbar.tsx` — phone number, logo sizing
- `src/components/Contact.tsx` — phone number
- `src/components/Footer.tsx` — phone number, rename, add micro finance
- `src/components/About.tsx` — rename Jyoti Shine, update stats count
- `src/pages/Index.tsx` — add Gallery and Testimonials

