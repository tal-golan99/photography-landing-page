# Tal Golan Photography

A minimalist, elegant photography landing page built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Image Setup

Place your photography images in the `public/images/` folder with the following filenames:

| Filename | Usage |
|----------|-------|
| `DSC09488.jpg` | Hero background (main landing image) |
| `DSC05605.jpg` | Portfolio grid image 1 |
| `DSC03217.jpg` | Portfolio grid image 2 |
| `DSC09479.jpg` | Portfolio grid image 3 |

**Recommended image specifications:**
- Format: JPEG (optimized)
- Hero image: High resolution (2000px+ width recommended)
- Portfolio images: 1200px+ width recommended
- Quality: 80-90% compression for web

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── AnimatedSection.tsx  # Reusable Framer Motion animations
│   ├── Hero.tsx             # Full-screen hero section
│   ├── PortfolioGrid.tsx    # Photo grid showcase
│   ├── About.tsx            # About section
│   ├── CallToAction.tsx     # CTA with Instagram link
│   └── index.ts             # Component exports
public/
└── images/              # Your photography images go here
```

## Design Philosophy

- **Mobile-First**: Designed primarily for mobile with desktop enhancements
- **Minimalist**: Clean layouts that let the photography shine
- **Performance**: Optimized images with Next.js Image component
- **Smooth Animations**: Subtle Framer Motion animations on scroll

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:
- `ivory` - Main background
- `cream` - Secondary background
- `charcoal` - Primary text
- `graphite` - Secondary text
- `stone` - Accent/muted elements

### Typography
Fonts are loaded from Google Fonts in `globals.css`:
- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Raleway (clean sans-serif)

---

© Tal Golan Photography

