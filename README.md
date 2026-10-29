# The First Elden Lord: Serialized Chronicles

An atmospheric web fiction portal chronicling the saga of **Lord Godfrey**, the **Beast Regent Serosh**, and the **Long March of the Tarnished**.

## Features
- **Zero Build Tooling:** Pure HTML5, CSS3, and modern vanilla JavaScript. Runs out of the box on GitHub Pages.
- **Atmospheric Aesthetic:** Erdtree Gold & Obsidian theme with warm parchment light mode, custom scene break flourishes (`✦ ❖ ✦`), and drop-cap typography.
- **High Legibility:** Serif story typography (`Cinzel` display and `Merriweather` prose) capped at 710px reading width with generous line spacing.
- **Dynamic Markdown Reader:** Dynamic chapter rendering using `marked.js` with progress indicator and next/previous pagination.
- **Clean Relative Routing:** Fully compatible with GitHub Pages repo sub-paths (`./assets/...`, `./chapters/...`).

## Project Layout
```text
Site/
├── index.html               # Main portal, hero showcase & latest updates
├── archive.html             # Chronological index of Acts & Chapters
├── reader.html              # Dynamic markdown reading interface
├── chapters/                # Markdown chapter files
│   ├── ch-01.md             # Chapter 1: The Chieftain & The Lion Regent
│   ├── ch-02.md             # Chapter 2: The Duel of the Storm Lord
│   ├── ch-03.md             # Chapter 3: The War of the Giants
│   ├── ch-04.md             # Chapter 4: The Dimming of Grace
│   └── ch-05.md             # Chapter 5: The Long March of the Tarnished
└── assets/
    ├── css/
    │   └── style.css        # Universal stylesheet (themes, resets, typography)
    ├── js/
    │   └── main.js          # Theme toggle & reading progress bar
    └── images/              # Story illustrations & cover art
```

## How to Add New Chapters
1. Create a new `.md` file inside `Site/chapters/` (e.g. `ch-06.md`).
2. Add an H1 title at the top:
   ```markdown
   # Chapter 6: The Ashen Capital
   ```
3. Add the link in `index.html` and `archive.html`:
   ```html
   <a href="./reader.html?ch=ch-06">Chapter 6</a>
   ```

## License
MIT
