# Alexandria 📖

> A community-powered lending library — borrow and lend books with neighbours within 10–20km.

## Quick Start (Local Dev)

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## Deploy to GitHub + Netlify

### 1. Push to GitHub

```bash
# In this project folder:
git init
git add .
git commit -m "Initial commit — Alexandria landing page"

# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/Alexandria.git
git branch -M main
git push -u origin main
```

### 2. Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Connect your GitHub account and choose the `Alexandria` repo
3. Netlify will auto-detect the build settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site** — you'll have a live URL in ~60 seconds.

### 3. Enable the Waitlist Form (Netlify Forms)

The form uses Netlify's built-in form handling (zero backend needed).

1. After first deploy, go to **Netlify Dashboard → Forms**
2. You'll see the `waitlist` form automatically detected
3. Go to **Form notifications** → add your email to receive submissions
4. All entries are stored in the Netlify dashboard under Forms

> ⚠️ Forms only work on the deployed Netlify URL, not in local dev.

### 4. Custom Domain (optional)

In Netlify → **Domain management** → add your custom domain and follow the DNS steps.

---

## Tech Stack

| Layer     | Choice              |
|-----------|---------------------|
| Framework | React 18            |
| Bundler   | Vite 5              |
| Styling   | Tailwind CSS 3      |
| Forms     | Netlify Forms       |
| Hosting   | Netlify             |
| Fonts     | Google Fonts (Playfair Display + DM Sans) |

## Project Structure

```
Alexandria/
├── index.html               # Entry point (Vite)
├── netlify.toml             # Netlify build + redirect config
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx              # Main page (all sections)
    ├── styles/
    │   └── index.css        # Tailwind + custom animations
    └── components/
        ├── Navbar.jsx
        ├── BookStack.jsx    # CSS book-spine illustration
        ├── WaitlistForm.jsx # Netlify form integration
        └── useScrollReveal.js
```

## Waitlist Form Fields

- **First Name** (required)
- **City**
- **Email** (required)
- **Interest** — Lend & Borrow / Mainly Lend / Mainly Borrow / Sell

---

*Built with ❤️ for book lovers.*

