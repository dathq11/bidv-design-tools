# BDS Design System — Design Tokens & Component Reference

> Tổng hợp từ **BDS Design Kit** (Figma file `J7fD7vqa6Cc2dxwuhd1rKd`) để import vào Claude Design / hệ thống thiết kế khác.
> **Library**: BDS - Design Kit
> **Library Key**: `lk-173d9ec6161f5ec51a8dc57ad0659502aca1f2dfa871720378e4b8f9d822cb4387a05e273123d4cde16193131a0503bcaf0317cf0095fe3e7e40648400ff2662`
> **Font**: Roboto (Google Fonts)

---

## 1. Color Tokens

### 1.1 Primitive Colors

#### Primary (Teal)
| Token | Hex |
|---|---|
| Colors/Primary/50 | `#d7f3f2` |
| Colors/Primary/100 | `#b2e7e5` |
| Colors/Primary/200 | `#75cecb` |
| Colors/Primary/400 | `#249d99` |
| Colors/Primary/500 | `#0d8480` |
| Colors/Primary/600 | `#006b68` |
| Colors/Primary/700 | `#00514e` |
| Colors/Primary/800 | `#003634` |
| Colors/Primary/900 | `#001b1a` |
| Colors/Primary/950 | `#000e0e` |

#### Secondary (Amber)
| Token | Hex |
|---|---|
| Colors/Secondary/50 | `#fff6d5` |
| Colors/Secondary/100 | `#ffeda9` |
| Colors/Secondary/200 | `#ffd05e` |
| Colors/Secondary/300 | `#ffb71b` |
| Colors/Secondary/400 | `#db9705` |
| Colors/Secondary/500 | `#b67d00` |
| Colors/Secondary/600 | `#926400` |
| Colors/Secondary/700 | `#6d4b00` |
| Colors/Secondary/800 | `#493200` |
| Colors/Secondary/900 | `#2d1f00` |
| Colors/Secondary/950 | `#241a00` |

#### Red
| Token | Hex |
|---|---|
| Colors/Red/50 | `#fae0e1` |
| Colors/Red/100 | `#f6c2c4` |
| Colors/Red/200 | `#ec8d90` |
| Colors/Red/300 | `#de5e63` |
| Colors/Red/400 | `#cb393e` |
| Colors/Red/500 | `#b21d22` |
| Colors/Red/600 | `#920a0f` |
| Colors/Red/700 | `#6b0004` |
| Colors/Red/800 | `#460002` |
| Colors/Red/900 | `#1f0001` |
| Colors/Red/950 | `#100001` |

#### Orange
| Token | Hex |
|---|---|
| Colors/Orange/50 | `#ffeacc` |
| Colors/Orange/100 | `#ffddad` |
| Colors/Orange/200 | `#fcce8b` |
| Colors/Orange/300 | `#f3b258` |
| Colors/Orange/400 | `#e99b2f` |
| Colors/Orange/500 | `#c27b17` |
| Colors/Orange/600 | `#9b5e09` |
| Colors/Orange/700 | `#754502` |
| Colors/Orange/800 | `#4e2e00` |
| Colors/Orange/900 | `#271700` |
| Colors/Orange/950 | `#140c00` |

#### Green
| Token | Hex |
|---|---|
| Colors/Green/50 | `#d7f3e4` |
| Colors/Green/100 | `#b2e7cb` |
| Colors/Green/200 | `#75ce9f` |
| Colors/Green/300 | `#46b57a` |
| Colors/Green/400 | `#249d5c` |
| Colors/Green/500 | `#0d8445` |
| Colors/Green/600 | `#006b32` |
| Colors/Green/700 | `#005126` |
| Colors/Green/800 | `#003619` |
| Colors/Green/900 | `#001b0d` |
| Colors/Green/950 | `#000e07` |

#### Blue
| Token | Hex |
|---|---|
| Colors/Blue/50 | `#d7e6f3` |
| Colors/Blue/100 | `#b2cee7` |
| Colors/Blue/200 | `#75a5ce` |
| Colors/Blue/300 | `#4681b5` |
| Colors/Blue/400 | `#24649d` |
| Colors/Blue/500 | `#0d4d84` |
| Colors/Blue/600 | `#00396b` |
| Colors/Blue/700 | `#002b51` |
| Colors/Blue/800 | `#001d36` |
| Colors/Blue/900 | `#000e1b` |
| Colors/Blue/950 | `#00070e` |

#### Gray
| Token | Hex |
|---|---|
| Colors/Gray/50 | `#f5f5f5` |
| Colors/Gray/100 | `#e5e5e5` |
| Colors/Gray/200 | `#cccccc` |
| Colors/Gray/300 | `#b3b3b3` |
| Colors/Gray/400 | `#999999` |
| Colors/Gray/500 | `#808080` |
| Colors/Gray/600 | `#666666` |
| Colors/Gray/700 | `#4f4f4f` |
| Colors/Gray/800 | `#333333` |
| Colors/Gray/900 | `#262626` |
| Colors/Gray/950 | `#141414` |

#### Neutrals (Teal-tinted Gray)
| Token | Hex |
|---|---|
| Colors/Neutrals/50 | `#ebf5f4` |
| Colors/Neutrals/100 | `#d7e5e5` |
| Colors/Neutrals/200 | `#bccccb` |
| Colors/Neutrals/300 | `#9eb3b2` |
| Colors/Neutrals/400 | `#849998` |
| Colors/Neutrals/500 | `#6c807d` |
| Colors/Neutrals/600 | `#546664` |
| Colors/Neutrals/700 | `#3c4a4a` |
| Colors/Neutrals/800 | `#24302e` |
| Colors/Neutrals/900 | `#0b1816` |
| Colors/Neutrals/950 | `#030c0b` |

#### Base & Transparent
| Token | Value |
|---|---|
| Colors/0 (white) | `#ffffff` |
| Colors/1000 (black) | `#000000` |
| Transparent/black 5–90% | `rgba(0,0,0,0.05)` → `rgba(0,0,0,0.90)` (bước 10%) |
| Transparent/white 5–90% | `rgba(255,255,255,0.05)` → `rgba(255,255,255,0.90)` (bước 10%) |

### 1.2 Semantic Colors (Light Mode)

**Background — Neutral**
| Token | Hex/Value |
|---|---|
| background/neutral/high | `#ffffff` |
| background/neutral/default | `#f5f5f5` |
| background/neutral/low | `#e5e5e5` |
| background/neutral/lowest | `#cccccc` |
| background/neutral/intermediate | `#808080` |
| background/neutral/inverse-high | `#333333` |
| background/neutral/inverse-highest | `#4f4f4f` |
| background/neutral/on-default | `rgba(0,0,0,0.05)` |
| background/neutral/on-default-low | `rgba(0,0,0,0.10)` |
| background/neutral/on-default-lowest | `rgba(0,0,0,0.20)` |
| background/neutral/overlay | `rgba(0,0,0,0.30)` |
| background/neutral/disabled | `rgba(0,0,0,0.10)` |

**Background — Brand**
| Token | Hex |
|---|---|
| background/brand/primary/subtle | `#d7f3f2` |
| background/brand/primary/highest | `#b2e7e5` |
| background/brand/primary/high | `#75cecb` |
| background/brand/primary/intermediate | `#0d8480` (CTA chính) |
| background/brand/primary/inverse | `#249d99` |
| background/brand/primary/low | `#006b68` |
| background/brand/secondary/subtle | `#fff6d5` |
| background/brand/secondary/highest | `#ffeda9` |
| background/brand/secondary/default | `#ffb71b` |

**Background — Semantic**
| Token | Hex |
|---|---|
| background/semantic/negative/subtle | `#fae0e1` |
| background/semantic/negative/intermediate | `#b21d22` |
| background/semantic/notice/subtle | `#ffeacc` |
| background/semantic/notice/intermediate | `#c27b17` |
| background/semantic/positive/subtle | `#d7f3e4` |
| background/semantic/positive/intermediate | `#0d8445` |
| background/semantic/informative/subtle | `#d7e6f3` |

**Text**
| Token | Hex |
|---|---|
| text/neutral/default | `#333333` |
| text/neutral/low | `#666666` |
| text/neutral/lowest | `#999999` (placeholder) |
| text/neutral/inverse | `#ffffff` |
| text/neutral/disable | `rgba(0,0,0,0.30)` |
| text/brand/primary/default | `#006b68` |
| text/brand/primary/inverse | `#249d99` |
| text/semantic/negative/intermediate | `#b21d22` |
| text/semantic/notice/intermediate | `#c27b17` |
| text/semantic/positive/intermediate | `#0d8445` |
| text/semantic/informative/intermediate | `#0d4d84` |

**Foreground**
| Token | Hex |
|---|---|
| foreground/neutral/default | `#333333` |
| foreground/neutral/inverse | `#ffffff` |
| foreground/brand/primary/default | `#006b68` |
| foreground/semantic/negative/intermediate | `#b21d22` |
| foreground/semantic/positive/intermediate | `#0d8445` |
| foreground/semantic/notice/intermediate | `#c27b17` |
| foreground/semantic/informative/intermediate | `#0d4d84` |

**Border**
| Token | Hex/Value |
|---|---|
| border/default | `rgba(0,0,0,0.20)` |
| border/active | `#006b68` |
| border/error | `#b21d22` |
| border/warning | `#c27b17` |
| border/success | `#0d8445` |
| border/informative | `#0d4d84` |
| border/disabled | `rgba(0,0,0,0.10)` |
| border/neutral/low | `#f5f5f5` |
| border/neutral/lowest | `#e5e5e5` |

---

## 2. Spacing & Radius

| Spacing token | px |
|---|---|
| Spacing/0 | 0 |
| Spacing/6 | 6 |
| Spacing/8 | 8 |
| Spacing/16 | 16 |
| Spacing/32 | 32 |
| Spacing/40 | 40 |
| Spacing/80 | 80 |

| Corner Radius token | px |
|---|---|
| Corner Radius/0 | 0 |
| Corner Radius/4 | 4 |
| Corner Radius/8 | 8 |
| Corner Radius/12 | 12 |
| Corner Radius/16 | 16 |
| Corner Radius/24 | 24 |
| Corner Radius/Fully (pill/circle) | 100 |

---

## 3. Shadows (Drop Shadow)

| Token | CSS |
|---|---|
| Drop Shadow/xsmall | `0 0 4px rgba(0,0,0,0.04), 0 2px 8px -1px rgba(0,0,0,0.10)` |
| Drop Shadow/small | `0 0 4px rgba(0,0,0,0.04), 0 4px 12px -2px rgba(0,0,0,0.10)` |
| Drop Shadow/medium | `0 0 8px rgba(0,0,0,0.04), 0 8px 16px -2px rgba(0,0,0,0.10)` |
| Drop Shadow/large | `0 0 12px rgba(0,0,0,0.04), 0 16px 24px -4px rgba(0,0,0,0.12)` |
| Drop Shadow/xlarge | `0 0 16px rgba(0,0,0,0.04), 0 24px 48px -8px rgba(0,0,0,0.16)` |
| Drop Shadow/2xlarge | `0 0 24px rgba(0,0,0,0.04), 0 32px 64px -8px rgba(0,0,0,0.20)` |

---

## 4. Typography — Font: Roboto

Quy ước đặt tên: `{Category}/{size}-{weightCode}-{Category}` — R = 400 Regular, M = 500 Medium, SB = 600 SemiBold.

### Display (hero, splash)
| Token | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display/36-R-Display | 36 | 400 | 44 | 0 |
| Display/36-SB-Display | 36 | 600 | 44 | 0 |
| Display/45-R-Display | 45 | 400 | 52 | 0 |
| Display/57-R-Display | 57 | 400 | 64 | -0.25 |

### Headline (page/section title)
| Token | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Headline/20-R-Headline | 20 | 400 | 26 | 0.15 |
| Headline/20-M-Headline | 20 | 500 | 26 | 0.15 |
| Headline/22-R-Headline | 22 | 400 | 28 | 0 |
| Headline/24-R-Headline | 24 | 400 | 32 | 0 |
| Headline/24-SB-Headline | 24 | 600 | 32 | 0 |
| Headline/28-R-Headline | 28 | 400 | 36 | 0 |
| Headline/28-SB-Headline | 28 | 600 | 36 | 0 |
| Headline/32-R-Headline | 32 | 400 | 40 | 0 |

### Title (label section, tab, button text lớn)
| Token | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Title/14-M-Title | 14 | 500 | 20 | 0.1 |
| Title/16-M-Title | 16 | 500 | 24 | 0.15 |

### Body (nội dung văn bản)
| Token | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Body/10-R-Body | 10 | 400 | 12 | 0 |
| Body/11-R-Body | 11 | 400 | 14 | 0 |
| Body/12-R-Body | 12 | 400 | 16 | 0 |
| Body/14-R-Body | 14 | 400 | 20 | 0.25 |
| Body/16-R-Body | 16 | 400 | 24 | 0.5 |

### Label (badge, tag, input label)
| Token | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Label/10-M-Label | 10 | 500 | 12 | 0 |
| Label/11-M-Label | 11 | 500 | 14 | 0 |
| Label/12-M-Label | 12 | 500 | 16 | 0 |
| Label/14-M-Label | 14 | 500 | 20 | 0.1 |

### Mapping theo ngữ cảnh sử dụng
| Ngữ cảnh | Token nên dùng |
|---|---|
| Page title | `Headline/24-SB-Headline` hoặc `Headline/28-SB-Headline` |
| Section/Card header | `Headline/20-M-Headline` hoặc `Title/16-M-Title` |
| Table column header | `Label/12-M-Label` hoặc `Title/14-M-Title` |
| Table cell content | `Body/14-R-Body` |
| Form label | `Label/14-M-Label` |
| Form input value | `Body/14-R-Body` hoặc `Body/16-R-Body` |
| Helper / hint text | `Body/12-R-Body` |
| Badge / Tag / Status | `Label/12-M-Label` hoặc `Label/11-M-Label` |
| Button text | `Title/14-M-Title` hoặc `Label/14-M-Label` |
| Navigation item | `Title/14-M-Title` |
| Caption / footnote | `Body/10-R-Body` hoặc `Label/10-M-Label` |

### Google Fonts import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 5. Component Map — BDS Design Kit

> Dùng `componentKey` để import component từ Figma library (`importComponentSetByKeyAsync` / `importComponentByKeyAsync`).

### UI Controls
| Component | Type | componentKey |
|---|---|---|
| Button | component_set | `bcc0150b8288bd9aa91391b8ac6ad1eb7dc0bce0` |
| Icon Button | component_set | `b043f553dfac20cda81c6fe3ebbd616d8c0e6a08` |
| Radio button | component_set | `44539eec03b59b2706e7ba1269462ab3e024aa95` |
| Radio button group | component_set | `180bc373436cbc185f584edf5184c8edce7c70eb` |
| Label | component_set | `ee3c4ae0279830d88d59fbdf88c850cb8c27b532` |

### Form & Input
| Component | Type | componentKey |
|---|---|---|
| Date Picker Field | component_set | `c11e75a059c6ea3b13995e830fa6d345b0fd813f` |
| Dropdown List | component_set | `510fffe20b9b65f5360778e900a217d92aee308d` |
| View Field | component_set | `288021d9665c42fc8d930368afc56de029c833e9` |
| Search Action | component_set | `e69c26ae98d5c08d6933c4c35c478d955a71e158` |
| File explorer | component | `6001cc66253c12c8e753a13e398dffc18aaf7dc2` |

### Table & Data Display
| Component | Type | componentKey |
|---|---|---|
| Table column | component_set | `8c340cdba9db96f8d0c35ffb9779283215c14d76` |
| List Control | component_set | `3f5afb2e87adf552ce415208f62953c4cd7bd96f` |
| Resize button | component_set | `146cd3554c2252d7c12f10613a1c536918793fa3` |

### Navigation
| Component | Type | componentKey |
|---|---|---|
| Navigation button | component_set | `d5e75b539fb9c64405ad06c8c437e283b8eec3db` |
| Pagination Button | component_set | `0d6fc2457fa7be7e3932910bd9cc6a2f92051915` |
| Header Title | component | `975d143538fd9ea4544ce404539c49a7f758e602` |

### Overlay & Feedback
| Component | Type | componentKey |
|---|---|---|
| Dialog | component_set | `8ef9174652abaefab18961a6e7fbcbde99928b50` |

### Data & Media
| Component | Type | componentKey |
|---|---|---|
| Avatar | component_set | `6da8fb1e2a68b9264368b36a14ce8ee29e6cf11d` |
| Book contacts | component | `81c8eee2f4eb5581b036bb047ad5810337a5a036` |
| Icon Image | component | `180de4703b0b8de4b86a2df5281c1fe745c9dc3b` |
| Icon status | component_set | `bc6ad7b9e3f92efc27fb6129bcc59074452b96bc` |

### React Component Source References
| Component | File trong skill | Props/Variants chính |
|---|---|---|
| Button | `BIDVButton.tsx` | variants: filled/outline/transparent; colors: primary/gray/negative; sizes: L/M/S |
| Icon Button | `BIDVButtonIcon.tsx` | icon-only, hỗ trợ badge/notification |
| Badge | `BIDVBadge.tsx` | Badge, NotificationBadge, PresenceBadge — status, dot/number counter |
| Text Field | `BIDVTextField.tsx` | form input: label, error, supporting text |
| View Field | `BIDVViewField.tsx` | read-only display: basic/withIcon/singleUser/multipleUser/status |
| Tab Bar | `BIDVTabBar.tsx` | scrollable tabs, icon, count badge, active indicator |
| Page Header | `BIDVPageHeader.tsx` | breadcrumb, title, action buttons |
| Top Navigation | `BIDVTopNavigation.tsx` | top nav bar cấp app |
| Sidebar | `BIDVSidebar.tsx` | navigation sidebar/drawer |
| Form Controls | `BDSFormControls.tsx` | checkbox, radio, switch, select |

---

## 6. Icon Map — BDS Design Kit

Tất cả icon là `component_set`, import bằng `importComponentSetByKeyAsync`.

| Icon Name | componentKey | Metaphor / Use case |
|---|---|---|
| Chevron Down | `ca218ec7148a94bbf2aae5d85727eb42c4448539` | dropdown, expand/collapse |
| Dismiss | `9a5245a086d34638cf7a3165225f29e07ac9fce3` | close, cancel, remove |
| Dismiss Circle | `ded19d930ad61744b4369575b839cd14d2c8c241` | close trong circle |
| Delete | `b44cc9856befbfe51b0f21b068ce610feb31683e` | trash, destructive action |
| Checkmark | `646864a2ff03a23d945e3d22026b18e0f050431b` | approval, selected state |
| Edit | `208837d1605d49ff0940b7ac71560aa13b7e9085` | pencil, update |
| Save | `6a159eb1625ddb54281fe3b9f726f7a14ac5732c` | floppy disk, save |
| Arrow Download | `ca1a9325b92608002a5143cf4ec3744b651de1d9` | download |
| Info | `8df47f31b0cf3b573c29888a9ec035243d7d2e62` | information, details |
| Warning | `890baa93eaf439a3c49a22844f519633da4470fa` | alert, exclamation |
| Calendar | `e75826590fb4db93fa11aea63a2b247b931ac664` | time, date, planning |
| History | `d3a02b8cbed37765c82348d76ce976a3562387c2` | back, undo, clock |
| Person | `406a7ae62ea16fde3bd396045dac96a9a57ee319` | user, contact |
| IconPeople Arrow Left | `6b72a4c07d16da7069ed62ce67af099cd347dc5c` | group, team, organization |
| Options | `2359e67c845625389385fc89b07e286cd53b6550` | settings, slider |

---

## 7. Quy tắc bắt buộc khi áp dụng Design System

1. **LUÔN** dùng component từ BDS Design Kit thay vì vẽ tay.
2. **LUÔN** import icon bằng `componentKey` từ Icon Map.
3. **KHÔNG** hardcode hex color — dùng variable/token, fallback bằng giá trị hex ở mục 1 nếu cần.
4. **KHÔNG** hardcode font-size/weight/line-height — dùng token typography ở mục 4.
5. **KHÔNG** hardcode spacing/padding/gap — dùng Spacing token ở mục 2.
6. Ưu tiên **semantic tokens** (background/, text/, border/, foreground/) hơn primitive tokens (Colors/Primary/500...) khi build component.
7. Với component chưa có trong map, search thêm trong design system trước khi tự tạo mới.

### Quick reference theo use-case
| Use case | Token |
|---|---|
| Background trang/surface | `background/neutral/default` (#f5f5f5), `background/neutral/high` (#ffffff) |
| Background CTA chính | `background/brand/primary/intermediate` (#0d8480) hoặc `/low` (#006b68) |
| Background overlay/modal | `background/neutral/overlay` |
| Text mặc định | `text/neutral/default` (#333333) |
| Text phụ | `text/neutral/low` (#666666) |
| Text link/brand | `text/brand/primary/default` (#006b68) |
| Border mặc định | `border/default` (rgba(0,0,0,0.20)) |
| Border focus/active | `border/active` (#006b68) |
| Trạng thái lỗi | `background/semantic/negative/*` + `text/semantic/negative/*` + `border/error` |
| Trạng thái cảnh báo | `background/semantic/notice/*` + `text/semantic/notice/*` + `border/warning` |
| Trạng thái thành công | `background/semantic/positive/*` + `text/semantic/positive/*` + `border/success` |
| Trạng thái thông tin | `background/semantic/informative/*` + `text/semantic/informative/*` + `border/informative` |

---

*File này được tổng hợp tự động từ skill `bds-design-kit` (SKILL.md, bds-tokens.md, bds-typography.md) — dùng làm nguồn import design system cho Claude Design hoặc các công cụ khác.*
