# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Primary Development Workflow:**
- `npm run dev` - Start Next.js development server on port 3000
- `npm run build` - Production build with static export
- `npm run start` - Start production server (if not using static export)
- `npm run lint` - Next.js ESLint with React rules
- `npm run export` - Alias for build (creates static export)

**Project Setup:**
- `npm i` - Install dependencies
- Requires Node.js and npm

## Architecture Overview

### Core Technologies
- **Next.js 15.4.6** with App Router and static export mode
- **React 19.1.1** with TypeScript 5.5.3
- **React Router DOM** for client-side routing (preserved from migration)
- **TanStack Query** for data fetching and caching
- **shadcn/ui** component library with Tailwind CSS

### Project Structure
```
app/                     # Next.js App Router
├── layout.tsx          # Root layout with metadata and SEO
└── [[...slug]]/        # Catch-all route for SPA behavior
    ├── client.tsx      # Client-only wrapper component
    └── page.tsx        # Main page component
    
src/                     # React application (preserved from Vite)
├── components/         # React components
│   ├── ui/            # shadcn/ui component library (40+ components)
│   ├── CountdownTimer.tsx
│   ├── Footer.tsx
│   ├── MetaPixel.tsx  # Facebook/Meta tracking integration
│   └── Navbar.tsx
├── hooks/             # Custom React hooks (use-mobile, use-toast)
├── lib/               # Utility functions
├── pages/             # Route components (11 pages)
└── App.tsx            # Main app with React Router setup
```

### Business Context
This is a hair salon website (Hair By Melissa) with:
- Service pages (treatments, gallery, about)
- Booking and contact functionality  
- Special promotional pages (KeratinSale)
- Legal pages (privacy, terms)
- Meta Pixel tracking for analytics

### Routing Architecture
All routes defined in `App.tsx` using React Router:
- `/` - Homepage (Index)
- `/services`, `/about`, `/gallery` - Business information
- `/booking`, `/contact`, `/faq` - Customer interaction
- `/keratin` - Special promotional page
- `/thankyou` - Post-conversion page
- `/privacy-policy`, `/terms` - Legal pages

### Component Architecture
- **UI Components**: Complete shadcn/ui library with Radix UI primitives
- **Business Components**: Navbar, Footer, CountdownTimer, MetaPixel
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state, React state for local state
- **Styling**: Tailwind CSS with custom salon-themed colors, Inter + Playfair Display fonts

### Key Configuration
- **Path Aliases**: `@/*` maps to `./src/*` for clean imports
- **Development Tools**: Lovable Tagger for component development (dev mode only)
- **TypeScript**: Lenient configuration with `strict: false`
- **ESLint**: Modern flat config with React optimization
- **Build Target**: ES2020 with DOM support

### Migration Notes
- **Originally Vite**: This project was migrated from Vite to Next.js while preserving all functionality
- **SPA Mode**: Uses Next.js static export mode to maintain client-side behavior
- **Hybrid Routing**: Combines Next.js App Router (for SEO/structure) with React Router (for actual navigation)
- **Zero Breaking Changes**: All existing components, styling, and functionality preserved

### Missing Testing Setup
⚠️ **No testing framework currently configured** - consider adding Vitest and React Testing Library for component testing.

### Meta Pixel Integration
Facebook/Meta tracking is integrated via the MetaPixel component for conversion tracking and analytics.

### Next.js Configuration
- **Static Export**: Configured for static hosting (Lovable.dev compatible)
- **SPA Behavior**: Maintains client-side navigation and rendering
- **Enhanced SEO**: Improved metadata API with Open Graph and Twitter cards
- **Image Optimization**: Disabled for static export compatibility