# Sanctum

A modern, minimalist web fiction portal inspired by pure AOSP/Pixel aesthetics. 

## Features
- **Zero Build Steps:** Pure HTML/CSS/JS. Runs instantly on GitHub Pages.
- **Dynamic Markdown:** Write chapters in pure `.md`. The site parses and renders them dynamically in the browser.
- **Clean Aesthetic:** Powered by the `Outfit` font, featuring true black dark mode and vibrant emerald accents.
- **Mobile First:** Fast, responsive, and designed for optimal reading legibility.

## Usage
1. Add new chapters to the `/chapters/` folder as `.md` files (e.g., `ch-04.md`).
2. Add frontmatter to the top of your markdown files:
   ```yaml
   ---
   title: "Chapter Title"
   act: "Act Number"
   date: "Publish Date"
   ---
   ```
3. Update the links in `index.html` and `archive.html` to point to `./reader.html?ch=ch-04`.
4. Commit and push.

## License
MIT
