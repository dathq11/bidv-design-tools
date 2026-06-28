# BIDV Back Office — Design System

A simple, refined, brand-true design system for **BIDV's internal back-office software** — the operational tools used by tellers, approvers, and operations staff at the Bank for Investment and Development of Vietnam (Ngân hàng TMCP Đầu tư và Phát triển Việt Nam).

The goal, in the client's words: *"Style đơn giản, tinh gọn nhưng vẫn thể hiện được brand thương hiệu"* — simple and lean, yet still unmistakably BIDV.

> **Namespace for cards / consumers:** components are exposed on `window.BIDVBackOfficeDesignSystem_478bc4`.
> Link the system with a single file: `styles.css` (it `@import`s every token + font file).

---

## 1. Context & Product

BIDV Back Office is not a customer-facing app — it is the **administrative cockpit** behind the bank: dense, data-heavy screens for managing **transactions, accounts, customers, cards, approvals and reports**. The dominant surfaces are:

- **List/queue views** — large sortable, filterable, selectable data tables (the workhorse).
- **Detail & approval flows** — record drill-downs with maker/checker approve-reject actions.
- **Dashboards** — at-a-glance operational KPIs and pending-work queues.
- **Forms** — account opening, transaction creation, configuration.

The product is **Vietnamese-first**. All copy, sample data, names and currency (₫ / VND) are Vietnamese. The interface optimizes for **information density, scanability, and trust** over marketing flourish.

### Sources

This system was reconstructed from the materials provided by the client:

- **`uploads/design.md`** — the canonical token + component reference, itself compiled from the **BDS Design Kit** Figma library.
  - Figma file: `J7fD7vqa6Cc2dxwuhd1rKd`
  - Library: *BDS - Design Kit* · Library key `lk-173d9ec6…ff2662`
  - The doc enumerates color/spacing/radius/shadow/type tokens, a component map (with Figma `componentKey`s), and an icon map.
- **`uploads/[Logo] BIDV full.svg`** — the official full wordmark (copied to `assets/bidv-logo-full.svg`; a flower-mark-only crop is derived at `assets/bidv-mark.svg`).

> We did **not** have direct Figma edit access or a source codebase — components here are faithful reconstructions of the documented specs, not extracted production code. If you can share the BDS Design Kit Figma or the React source (`BIDVButton.tsx`, `BIDVTextField.tsx`, etc. referenced in `design.md`), we can tighten the components to match exactly.

---

## 2. Content Fundamentals — how BIDV Back Office writes

**Language.** Vietnamese, with full diacritics. Domain terms stay in Vietnamese: *Giao dịch* (transaction), *Chuyển khoản* (transfer), *Phê duyệt* (approve), *Chờ duyệt* (pending approval), *Tài khoản* (account), *Chi nhánh* (branch). A few industry terms remain in English/proper nouns where that's standard: *Napas*, *ATM*, *OTP*, *Internal*.

**Voice & person.** Neutral, professional, operational — the system addresses the staff user directly and politely with **"bạn"** ("Sử dụng tài khoản nội bộ BIDV của bạn"). It states facts and outcomes plainly; it does not cheer-lead or use exclamation marks.

**Casing.** Sentence case for everything human-facing — titles, buttons, labels (*"Tạo lệnh mới"*, *"Quản lý giao dịch"*). The **only** uppercasing is table column headers and small overline labels (`Label/12`), which are visually upper-cased via CSS, not typed in caps. Status badge text is sentence case (*"Thành công"*, *"Chờ duyệt"*).

**Tone by context.**
- *Actions:* imperative and short — *"Phê duyệt"*, *"Từ chối"*, *"Xuất Excel"*, *"Tạo lệnh"*.
- *Confirmations (destructive):* state the consequence — *"Hành động này không thể hoàn tác."*
- *Status / feedback:* outcome first — *"Đã phê duyệt"*, *"Giao dịch thất bại"*, *"Số dư tài khoản không đủ."*
- *Empty / helper:* calm and factual — *"Không có dữ liệu"*, *"Đơn vị: VND"*.

**Numbers & money.** Vietnamese formatting: thousands separated with **`.`**, decimals with **`,`** (e.g. `15.000.000 ₫`, `+12,4%`, `48,2 tỷ ₫`). Currency symbol `₫` trails the amount. Account numbers are masked (`2110 **** 8842`) and set in the mono face.

**Emoji.** Never. This is a regulated banking tool — iconography carries all the visual shorthand; emoji would read as unprofessional.

**Examples to copy the register from:**
- Page title + subtitle: *"Quản lý giao dịch" / "Theo dõi, tra soát và phê duyệt lệnh giao dịch"*
- Primary CTA: *"Tạo lệnh mới"* · Secondary: *"Xuất Excel"*
- Toast success: *"Đã phê duyệt — Lệnh GD0012 đã được phê duyệt thành công."*
- Bulk bar: *"Đã chọn 3 giao dịch"* → *"Phê duyệt hàng loạt"*

---

## 3. Visual Foundations

### Color
- **Primary is teal.** `--primary-600 #006b68` is *the* BIDV brand color (it's the wordmark color) and the default for CTAs, active nav, links, focus, and selected rows. The fuller CTA fill in the source is `--primary-500 #0d8480`; we use **600** as the resting button color with 700/800 for hover/press, which reads as more grounded and accessible on white.
- **Secondary is the flower gold,** `--secondary-300 #ffb71b`. Used sparingly — it is a **brand accent**, not a UI action color. Appears in the logo mark and occasional brand moments (e.g. the radial glow on the login panel). Never use gold for primary buttons.
- **Neutrals do the heavy lifting.** Two neutral ramps exist: a **pure gray** (`--gray-*`) for UI chrome/text/borders, and a **teal-tinted neutral** (`--neutral-*`) available for brand-tinted surfaces. Body text is `#333` (`--text-default`), secondary `#666`, placeholder `#999`.
- **Semantic colors** map to status: **positive** green `#0d8445`, **negative** red `#b21d22`, **notice** orange `#c27b17`, **informative** blue `#0d4d84`. Each has a `*-50` subtle fill (badge/toast background) and a `*-500` intermediate (text/icon/border). Build status UI from these, not from raw hues.
- Prefer **semantic aliases** (`--surface-*`, `--text-*`, `--border-*`, `--fg-*`) over primitives in components.

### Typography
- **Roboto** throughout (400 / 500 / 600). No display serif, no second family. A mono fallback (`--font-mono`, Roboto Mono) is used for IDs, account numbers, and token values.
- Scale is functional and compact: page titles `Headline/24–28 SemiBold`, section/card headers `Title/16 Medium` or `Headline/20 Medium`, table cells `Body/14`, column headers & badges `Label/12 Medium`, helper text `Body/12`. See `tokens/typography.css` for the full named scale and the `.t-*` utility classes.
- Weight, not size, signals hierarchy in dense views: 500/600 for emphasis, 400 for content.

### Spacing, radius, layout
- **8px-based spacing** (`6 · 8 · 16 · 32 · 40 · 80`). Cards pad 16; page gutters 24.
- **Radius:** `8px` for controls (buttons, inputs, chips' container) — `--radius-control`; `12px` for cards/panels — `--radius-card`; `full` for pills, badges, avatars. Corners are gently rounded, never sharp, never balloon-round.
- **Layout:** fixed 248px sidebar (64px collapsed to an icon rail showing the flower mark), 56px top bar, content max-width ~1280px centered on a `#f5f5f5` canvas. Cards/tables sit on white.

### Elevation & borders
- **Borders carry structure; shadow carries elevation.** Resting tables and inline cards use a hairline `1px` border (`--border-subtle`, `#e5e5e5`) on white — flat, not floating. Reserve shadow for things that genuinely lift: dropdowns/menus (`--shadow-md`), dialogs (`--shadow-2xl`), toasts (`--shadow-lg`), dashboard stat cards (`--shadow-sm`).
- Shadows are **soft and neutral** — a tight ambient blur plus a directional drop, all low-opacity black. No colored or hard shadows.

### Backgrounds & imagery
- **No decorative imagery, gradients, textures, or illustrations** in the working UI — it's a flat, calm, neutral canvas. The single permitted brand flourish is a faint **gold radial glow** on the teal login/brand panel. No stock photography, no hand-drawn art.

### Motion
- Restrained and quick. `120ms` for hovers/taps (`--dur-fast`), `180ms` for toggles/expand (`--dur-base`), standard easing `cubic-bezier(0.2,0,0,1)`. Switches/expanders use the slightly springier `--ease-emphasized`. **No bounce, no infinite loops, no attention-seeking animation.**

### Interaction states
- **Hover:** subtle tinted fill — `--gray-50` for neutral controls, `--primary-50` for brand/selected contexts; filled buttons darken one step (600→700).
- **Press/active:** darken another step (700→800); no scale-shrink.
- **Focus:** `--border-active` teal border + a soft 3px teal focus ring (`--focus-ring`).
- **Selected (rows, tabs, nav, options):** teal-tinted background `--primary-50`, teal text, and a teal indicator (3px left bar on nav, 2px underline on tabs, checkmark on options).
- **Disabled:** `--surface-disabled` fill + `--text-disabled` (30% black); `not-allowed` cursor.
- **Transparency/blur:** used only for the modal scrim (`--surface-overlay`, 30% black) with a faint backdrop blur. Otherwise the UI is fully opaque.

---

## 4. Iconography

- **Microsoft Fluent UI System Icons** are the icon language (the `design.md` icon map — *Chevron Down, Dismiss, Delete, Checkmark, Edit, Save, Arrow Download, Info, Warning, Calendar, History, Person, Options*, … — is Fluent's naming, 24px line set). Stroke-style (`*-24-regular`) is the default; filled variants (`*-24-filled`) only for selected/emphasis states (e.g. a status checkmark).
- **Delivery.** We render Fluent via the **Iconify web component** (`<iconify-icon icon="fluent:…">`), which hosts the genuine Fluent set — so this is the real icon family, not a lookalike. The `Icon` component wraps it with a curated short-name map (see `components/core/Icon.jsx` / `Icon.d.ts`).
  - Pages must load the Iconify script once: `<script src="https://cdn.jsdelivr.net/npm/iconify-icon@2/dist/iconify-icon.min.js"></script>`.
  - ⚠️ **Caveat / substitution flag:** icons stream from the Iconify CDN at runtime rather than being self-hosted. For offline/production use, install `@iconify-json/fluent` (or `@fluentui/react-icons`) and bundle locally. The visual result is identical.
- **Sizing.** 16px in dense table rows / small buttons, 18–20px default, 20px in nav. Icons inherit `currentColor`; tint via `--fg-*` roles.
- **No emoji, no Unicode-glyph icons, no hand-drawn SVG.** Use the Fluent set for everything.
- **Logo assets** (`assets/`): `bidv-logo-full.svg` (teal wordmark + gold flower) and `bidv-mark.svg` (flower only, for the collapsed rail / favicon). On dark/teal surfaces, render the wordmark in white via `filter: brightness(0) invert(1)`.

---

## 5. Fonts — caveat

Roboto is currently loaded from **Google Fonts** (`tokens/fonts.css`) because we could not fetch the binary font files in this environment. For production/offline, replace that `@import` with self-hosted `@font-face` rules pointing at local `.woff2` files under `assets/fonts/` (the rules are scaffolded as comments in `tokens/typography.css`). **Please confirm whether you want self-hosted Roboto binaries added.**

---

## 6. Index / Manifest

**Root**
- `styles.css` — the single entry point (consumers link this). `@import`s everything below.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so this folder works as a downloadable Claude skill.

**`tokens/`** (all reachable from `styles.css`)
- `fonts.css` — Roboto + Roboto Mono webfont import.
- `colors.css` — primitive ramps + semantic aliases.
- `typography.css` — type scale, weights, `.t-*` utility classes.
- `spacing.css` — spacing, radius, shadow, layout, motion tokens.
- `base.css` — resets & element defaults.

**`guidelines/`** — foundation specimen cards (Design System tab): primary/secondary/neutral/semantic colors, color roles, display/body type, spacing, radius, shadow, and the brand logo.

**`components/`** — reusable React primitives, on `window.BIDVBackOfficeDesignSystem_478bc4`:
- `core/` — `Icon`, `Button`, `IconButton`, `Badge`, `Tag`, `Avatar`, `Card` (+ `CardHeader`)
- `forms/` — `TextField`, `Select`, `Checkbox`, `Radio` (+ `RadioGroup`), `Switch`
- `navigation/` — `Tabs`, `PageHeader` (+ `Breadcrumb`), `Pagination`, `Sidebar`, `TopNav`
- `feedback/` — `Dialog`, `Toast` (+ `ToastStack`), `Tooltip`
- `data/` — `DataTable`
- Each directory ships a `*.card.html` showcase; each component has a `.d.ts` (props) and `.prompt.md` (usage).

**`ui_kits/back-office/`** — interactive recreation of the back-office workspace: login → dashboard (KPIs, volume chart, approval queue, recent transactions) → transaction management (tabs, filters, selectable sortable table, bulk actions) → transaction detail dialog with approve/reject → success/error toasts. Files: `index.html`, `data.js`, `Login.jsx`, `Dashboard.jsx`, `Transactions.jsx`, `App.jsx`.

**`templates/`** — copy-to-start scaffolds for consuming projects (see the Templates group in the picker).

**`assets/`** — `bidv-logo-full.svg`, `bidv-mark.svg`.
