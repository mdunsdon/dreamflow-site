# DreamFlow Next.js Starter

A clean, minimal Next.js (App Router + TypeScript + Tailwind) starter for DreamFlow Financial Coaching.

## 1) Use locally
```bash
# 1. Unzip and cd in
npm install
npm run dev
```

Visit http://localhost:3000

## 2) Deploy (Vercel)
- Create a free account at https://vercel.com
- Create a new GitHub repo and push this code
- In Vercel: **New Project → Import** your GitHub repo
- Vercel will auto-build and give you a URL
- In your Project → **Settings → Domains**, add your domain and follow the on‑screen DNS steps at your registrar
- Choose a primary domain and add a redirect so `www` → apex (or vice‑versa)

## 3) Edit copy
All copy is in `app/*` files and basic components in `components/*`. Just edit the text and push to main—Vercel redeploys automatically.

## 4) Add Calendly / forms
- Replace the placeholder Contact form with your real tool (Calendly embed, Fillout, Tally, etc.).
- For Calendly, replace the placeholder section with their provided embed snippet.

## 5) Notes
- Tailwind is ready to go in `app/globals.css` and `tailwind.config.ts`.
- If you use images, add them to `/public` and reference with `/your-image.jpg`.
- For analytics, add Vercel Analytics or GA4.
