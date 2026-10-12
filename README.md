# SnapFix landing page

The public page for SnapFix, an AI app I'm building. Take a photo of what broke at home, and SnapFix tells you what it is and which kind of local pro fixes it. The app is in active development and isn't released yet; the site says so.

**[View the live site](https://snapfix-dun.vercel.app)**

## What's on the page

- A cinematic, scroll-driven 3D scene built with Three.js: a dripping copper pipe that gets framed, scanned and diagnosed as you scroll, then a flickering bulb, a broken fence and a sprinkler for the "what it covers" section.
- Honest copy. No fake reviews, user counts or store badges.
- Privacy and terms pages, a 404 page, Open Graph image, favicons, robots.txt and sitemap.

## Stack

Plain HTML, CSS and JavaScript. No build step.

- `index.html` is the whole landing page (styles and script inline).
- `assets/vendor/three/` holds Three.js r160 (MIT) so the page doesn't depend on a CDN.
- `assets/fonts/` holds Bricolage Grotesque and Schibsted Grotesk (OFL), self-hosted so no requests go to Google Fonts.
- `vercel.json` sets clean URLs (`/privacy` instead of `/privacy.html`), security headers and long cache times for assets.

## Run it locally

Any static server works, for example:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. The 3D scene needs WebGL; the text still reads fine without it.

## Editing

- Copy lives in `index.html`. The site URL used for canonical links, the sitemap and the social preview is `https://snapfix-dun.vercel.app`; search for it and replace it if the domain changes.
- The social preview image is `assets/og.png` (1200×630).
- Colors and fonts are CSS variables at the top of the `<style>` block in `index.html`.

## License

The code is MIT, see `LICENSE`. The Three.js and font licenses are in their folders under `assets/`. The SnapFix name and the product copy are not covered by the MIT license.

---

Built by Oleksandr Rybitskyi.
GitHub: [@vitamindgoat](https://github.com/vitamindgoat) · Hugging Face: [@vitamindgoat](https://huggingface.co/vitamindgoat)
