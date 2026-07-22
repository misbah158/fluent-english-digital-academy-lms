# Fluent English Digital Academy

A premium, responsive marketing website for an online English academy offering spoken English, IELTS preparation, Cambridge English, kids English, advanced communication training, and a future AI English Lab.

## Tech Stack

- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React icons
- ESLint with Next.js core web vitals rules

## Project Structure

```text
src/
  app/                 # App Router pages, metadata, and global styles
  components/          # Reusable UI and layout components
  data/                # Typed content models for navigation, courses, posts, and features
  lib/                 # Shared utility helpers
public/                # Static assets
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Quality Checks

```bash
npm run lint
npm run build
```

## Production Deployment

The site is ready for Vercel and GitHub-based deployment.

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js framework settings.
4. Build command: `npm run build`.
5. Output is handled automatically by Vercel for Next.js.

## Routes

- `/` — conversion-focused homepage
- `/courses` — course catalog and learning outcomes
- `/ai-english-lab` — future AI practice product landing page
- `/free-learning-hub` — free resource center
- `/blog` — CMS-ready blog layout
- `/about` — academy story, mission, and teacher profile
- `/contact` — inquiry form and WhatsApp CTA
- `/login` — future student portal login design
