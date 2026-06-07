# XMB Interface - PSP-Style Navigation

A beautiful XMB (XrossMediaBar) interface inspired by PlayStation Portable, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎮 PSP-style navigation with smooth animations
- 🎬 Video preview enlarges in center after 3-second hover
- 📱 Responsive controls (keyboard, mouse, touch)
- 🎨 Beautiful gradient background with particle effects
- 🖼️ Thumbnail previews for project items with videos

## Getting Started

### Using npm

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Using pnpm (alternative)

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## Controls

- **Arrow Keys / WASD**: Navigate categories and items
- **Mouse Scroll**: Horizontal scroll for categories, vertical for items (inverted for natural feel)
- **Hover**: Hover over project items for 3 seconds to enlarge and play video in center
- **Scroll Away**: Video stops automatically when navigating to other items
- **Touch**: Swipe gestures supported on mobile

## Project Structure

```
src/
├── app/
│   └── App.tsx          # Main application component
├── styles/
│   └── index.css        # Global styles and Tailwind imports
└── main.tsx             # Application entry point
```

## Technology Stack

- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **Motion (Framer Motion)** - Smooth animations
- **Lucide React** - Icon library

## Development

The app will run on `http://localhost:5173` by default.

## License

MIT

## Vercel Deploy

This project is Vite-based and ready for deployment on Vercel.

- Build command: `npm run build`
- Output directory: `dist`

To deploy from the CLI:

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy (follow prompts)
vercel --prod
```

Or connect your Git repository in the Vercel dashboard; the default build command and output directory will be detected automatically. The `vercel.json` file in the repo configures a static build and SPA routing.
