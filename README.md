# Carter Digitals — Digital Proof Engine

A premium, conversion-focused marketing site for Carter Digitals, built with Next.js App Router and TypeScript.

## What is included

- Cinematic hero with interactive business-goal selector
- Animated SVG/grid background system
- Premium service cards and project showcase
- Digital Readiness Scanner lead qualification flow
- Interactive Carter Launch Sequence process section
- Launch-path selector and high-intent project intake CTA
- Fully responsive, mobile-first styling
- Zero image dependencies: the visual system uses CSS, gradients and inline SVG

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Suggested environment variables for the next step

Create `.env.local` when wiring the live onboarding form:

```bash
NEXT_PUBLIC_CALENDLY_URL=
RESEND_API_KEY=
LEADS_NOTIFICATION_EMAIL=
```

## Recommended deployment

Deploy on Vercel. Connect this repository, add the production environment variables when the onboarding endpoint is wired, then deploy.
