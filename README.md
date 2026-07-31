# Susu Lite

This repository contains the Susu Lite project. I added a polished Django base template and static assets to make the site look and behave like a real platform.

What I added

- templates/base.html — Django base template with header, messages, and footer.
- static/css/style.css — Site styles (responsive, accessible).
- static/js/script.js — Small JS for mobile nav and dismissible messages.
- index.html — Static landing page (useful for GitHub Pages preview).
- profile.html — Static demo profile page for preview.

Quick run (Django)

1. Ensure your Django project includes the templates folder in TEMPLATES['DIRS'] or that app templates are found.
2. Place `static/` in your static files directories or run `collectstatic` for production.
3. Update URL names in `templates/base.html` if your project uses different names for login/profile/logout.

Quick run (GitHub Pages/static preview)

1. GitHub Pages can serve the static `index.html` at the repo root. The static files are located under `/static/`.
2. Check Settings → Pages and set the branch to `main` and folder to `/ (root)` to serve `index.html`.

Customize

If you want brand colors, fonts, or a sample home/profile powered by Django views, I can add example view and URL files and open a PR or push them to the repo.
