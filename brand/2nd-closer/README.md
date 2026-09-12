# 2nd Closer — logo set

Built from the reference icon: a rounded tile, a large "2" with a small "nd" beside it. Website: **2ndcloser.ai**. Every SVG is self-contained (glyphs are paths, no fonts or external references), so they render identically everywhere. Face: Instrument Sans (the site's body face), converted to outlines.

| File | Use |
|---|---|
| `mark-night.svg` / `app-icon-night.png` | The reference. Ink tile `#141518`, paper glyphs `#FAFAF7`. App icon, social avatar, dark UI. |
| `mark-day.svg` / `app-icon-day.png` | The inverse for light UI: paper tile `#FAFAF7` with a 12% ink edge so it holds on white, ink glyphs `#0A0A0A`. |
| `favicon.svg` | The "2" alone on the ink tile. "nd" does not survive 16px; the numeral does. |
| `lockup-night.svg` / `lockup-day.svg` | The "2nd Closer" version: the tile says "2nd", the word "Closer" completes it. Cap height of "Closer" equals the height of the "2"; baselines align. Headers, decks, partner pages. |
| `wordmark-night.svg` / `wordmark-day.svg` | Typographic only ("2nd Closer" with the small "nd"), one colour. Site nav at 28px, footers, email signatures. |
| `preview.html` / `preview.png` | Every asset on paper and on ink at 256, 64, 32 and 16px. |

## Rules
- Day and night are one drawing. Only the tile and glyph colours swap; never change the geometry.
- Night tile on ink pages, day tile on paper pages. Do not put the night tile on ink at small sizes (it disappears); use the wordmark instead.
- "2nd" and "Closer" are never recoloured independently. One colour per wordmark. The accent blue (`#2B4BE8`) is for interface, not for the mark.
- Clear space: the height of the "2" on all sides. Minimum sizes: mark 24px, lockup 32px tall, wordmark 20px tall.
- Geometry: tile radius 22% of the side; "2" at 55% of the tile height, centred; "nd" ascender at 50% of the "2", raised so its top sits at the top of the "2"; gap between the two of 5.5% of the tile.

## Rebuilding
`scratchpad/logo/build.mjs` (fontkit + the Instrument Sans variable TTF from the google/fonts repo) writes the SVGs; `render.mjs` renders the PNGs and the preview with the pre-installed Chromium. Not part of the site build.
