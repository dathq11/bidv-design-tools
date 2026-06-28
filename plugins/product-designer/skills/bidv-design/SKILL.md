---
name: bidv-design
description: Use this skill to generate well-branded interfaces and assets for BIDV (BIDV Back Office — internal banking operations software), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick start

- **Link one stylesheet:** `styles.css` (it `@import`s all tokens + the Roboto webfont). Every color/space/radius/shadow/type value is a CSS custom property — never hardcode hex, px sizes, or font weights.
- **Icons:** Microsoft Fluent UI System Icons. Load `<script src="https://cdn.jsdelivr.net/npm/iconify-icon@2/dist/iconify-icon.min.js"></script>` and use `<iconify-icon icon="fluent:edit-24-regular">` (or the `Icon` component).
- **Components** live on `window.BIDVBackOfficeDesignSystem_478bc4` after loading `_ds_bundle.js`. See `readme.md` §6 for the full list and each `components/**/*.prompt.md` for usage.
- **Brand:** teal `--primary-600 #006b68` for actions/active states; gold `--secondary-300 #ffb71b` is a sparing brand accent only. Vietnamese copy, sentence case, no emoji. See `readme.md` §2–3.

## Files
- `readme.md` — full design guide (context, content rules, visual foundations, iconography, manifest).
- `tokens/` — color, type, spacing/radius/shadow, font CSS.
- `components/` — React primitives (+ `.prompt.md` usage notes).
- `ui_kits/back-office/` — interactive product recreation to learn the patterns from.
- `templates/` — copy-to-start scaffolds.
- `assets/` — BIDV logo + flower mark.
