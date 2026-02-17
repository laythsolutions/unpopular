# Unlettrd - Development Guide

## Development Setup

### Initial Setup

```bash
# Clone the repository
cd /path/to/unlettrd

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Project Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Crimson Text, Playfair Display, Inter)

### Directory Structure

```
unlettrd/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles + design system
│   ├── issues/            # Issues archive
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── read/              # Articles (dynamic routes)
│   ├── shop/              # Shop page
│   └── subscribe/         # Subscription page
├── components/            # Reusable React components
│   ├── article/           # Article components
│   ├── layout/            # Layout components
│   ├── navigation/        # Navigation components
│   └── subscription/      # Subscription components
├── lib/                   # Utility functions & data
│   ├── data.ts            # Sample data
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Design System

### Colors

```css
--color-cream: #f5f1e8;         /* Main background */
--color-cream-light: #fdfbf7;   /* Cards, sections */
--color-charcoal: #2d2d2d;      /* Primary text */
--color-gray-medium: #666666;   /* Secondary text */
--color-gray-light: #999999;    /* Captions, meta */
--color-border: #e0ddd6;        /* Dividers, borders */
--color-green: #1e3a2f;         /* Buttons, links, accents */
--color-green-dark: #152820;    /* Hover states */
```

### Typography

- **Primary**: Crimson Text (serif) - Body text, articles
- **Display**: Playfair Display (serif) - Headings, titles
- **UI**: Inter (sans-serif) - Navigation, buttons, labels

### Spacing

Based on 8px grid system:
- `--space-xs`: 0.5rem (8px)
- `--space-sm`: 1rem (16px)
- `--space-md`: 1.5rem (24px)
- `--space-lg`: 2rem (32px)
- `--space-xl`: 3rem (48px)
- `--space-2xl`: 4rem (64px)
- `--space-3xl`: 6rem (96px)

## Content Guidelines

### Article Structure

Each article should contain:

1. **Article** (800-1,500 words)
   - Philosophical analysis
   - Historical context
   - Clear argument
   - Accessible prose

2. **Poem** (12-30 lines)
   - Emotional resonance
   - Memorable lines
   - Standalone but enhanced by article

### Categories

- **The Moment**: Current events (1-4 weeks old)
- **The Mirror**: Historical events with modern relevance
- **The Current**: Cultural trends and ongoing phenomena
- **The Stand**: Editorial positions and longer-form pieces

## Component Usage

### Layout Components

```tsx
import Masthead from '@/components/layout/Masthead'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/layout/Footer'
```

### Article Components

```tsx
import ArticleGrid from '@/components/article/ArticleGrid'
import FeaturedArticle from '@/components/article/FeaturedArticle'
```

### Subscription Components

```tsx
import SubscribeCTA from '@/components/subscription/SubscribeCTA'
```

## Utility Functions

Located in `lib/utils.ts`:

```typescript
import { formatDate, calculateReadTime, slugify } from '@/lib/utils'

// Format dates
formatDate('2026-02-15') // "February 15, 2026"

// Calculate read time
calculateReadTime(1200) // "6 min read"

// Create URL-safe slugs
slugify('What Silicon Valley Bank Teaches Us') // "what-silicon-valley-bank-teaches-us"
```

## Adding New Content

### New Article

1. Create a new route in `app/read/[slug]/page.tsx`
2. Add article metadata to `lib/data.ts`
3. Include both article text and poem

### New Issue

1. Add to `issues` array in `lib/data.ts`
2. Update issue preview images
3. Create shop products for print and digital versions

### New Product

1. Add to appropriate category in `lib/data.ts` products object
2. Add product images to `public/images/`
3. Update shop page category filter if needed

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

```bash
# Build
npm run build

# The .next folder contains the production build
```

## Performance Considerations

- Images use Next.js Image component with optimization
- Fonts are preloaded for faster rendering
- CSS is purged of unused styles in production
- Static pages are pre-rendered where possible

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Contributing

1. Follow the existing code style
2. Use TypeScript for all new files
3. Add comments for complex logic
4. Test on multiple screen sizes
5. Ensure accessibility standards are met

## Future Enhancements

- CMS integration for content management
- Payment processing (Stripe)
- Email newsletter integration
- User authentication
- Comment system
- Search functionality
- Reading progress indicator
