# Deployment Guide

## Push to GitHub

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `the-travel-tribe` (or your preferred name)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 2: Push Your Code

Run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/the-travel-tribe.git
git branch -M main
git push -u origin main
```

Or if you prefer SSH:
```bash
git remote add origin git@github.com:YOUR_USERNAME/the-travel-tribe.git
git branch -M main
git push -u origin main
```

## Deploy to Vercel (Recommended - Easiest)

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be deployed!

## Deploy to Netlify

### Option 1: Deploy via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com) and sign up/login with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/the-travel-tribe/', // Replace with your repo name
  plugins: [react()],
  // ...
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: `gh-pages` branch
   - Save

## Environment Variables

If you need environment variables later:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment Variables

## Custom Domain

Both Vercel and Netlify support custom domains:
- **Vercel**: Project Settings → Domains
- **Netlify**: Site Settings → Domain Management

## Continuous Deployment

Once connected, every push to `main` branch will automatically deploy!

---

**Recommended**: Use Vercel for the easiest deployment experience.

