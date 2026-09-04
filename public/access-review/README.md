# Access Review illustrations

Exported from [Access Review Product Page · V0](https://www.figma.com/design/yJV3UadcmmJhlquvMSLcAA/_08.26-Product-Page?node-id=984-299) on 2026-09-04.

Editable sources are organized in [Access Review / Assets / Export-ready](https://www.figma.com/design/yJV3UadcmmJhlquvMSLcAA/_08.26-Product-Page?node-id=1132-6836): `01 Hero`, `02 Review workflow`, `03 Product capabilities`. Sources have SVG and PNG @2x export presets. Workflow and capability compositions additionally have a PNG @3x preset.

## Files used by the page

The Hero uses SVG with outlined text. The four workflow visuals layer transparent `-ui.svg` exports from the editable sources over the original Lottie backgrounds. Their text and logos are entirely vector, with no embedded raster images or font dependencies. The six capability illustrations use full Figma compositions as lossless WebP in 1x, 2x, and 3x sizes, generated from Figma's native PNG @3x exports. This preserves the exact fluorescent color and blur: Figma's SVG export visibly attenuates the orb and is **not** used for these six cards. Their SVGs and the previous full workflow compositions are retained as reference exports only.

The page selects the appropriate WebP resolution with width-based `srcset` and `sizes`; display widths are capped at 508px, maintaining at least 2x coverage at every breakpoint. The original embedded raster fills in the reference SVGs are the small Acme mark in the Hero and the deliberately blurred Cloudflare backdrop in Sources. There are no remote image or font dependencies.

| File                                | Composition node | Editable source | Canvas size |
| ----------------------------------- | ---------------- | --------------- | ----------- |
| `hero-access-review.svg`            | `1132:4391`      | `1132:5758`     | 1080 × 720  |
| `workflow-connect-systems-ui.svg`   | `1014:3286`      | `1132:6129`     | 704 × 456   |
| `workflow-account-context-ui.svg`   | `1014:3297`      | `1132:6221`     | 720 × 654   |
| `workflow-review-decisions-ui.svg`  | `1014:3303`      | `1132:6353`     | 350 × 535   |
| `workflow-audit-evidence-ui.svg`    | `1014:10145`     | `1132:6424`     | 436 × 458   |
| `capability-campaigns.webp`         | `984:626`        | `1132:6486`     | 344 × 344   |
| `capability-sources.webp`           | `1014:11924`     | `1132:6572`     | 344 × 344   |
| `capability-access-entries.webp`    | `984:653`        | `1132:6591`     | 344 × 344   |
| `capability-flags.webp`             | `984:762`        | `1132:6614`     | 344 × 344   |
| `capability-decisions.webp`         | `984:773`        | `1132:6705`     | 344 × 344   |
| `capability-statistics-export.webp` | `984:802`        | `1132:6732`     | 344 × 344   |

The Hero export is 1146 × 786 including 33px of shadow on every side. Its page wrapper compensates for this inset, keeping the browser itself at 1080 × 720 at the desktop reference size.

## Composition fidelity

The six capability illustrations include the original foreground orbs, clipping, gradients, rounded corners, and UI positions. Do not add a second CSS halo or recenter individual elements. Card order is Campaigns, Sources, Access entries, Flags, Decisions, Statistics & export.

Positions below are in each 344 × 344 Figma card. The orb uses a reflected transform, not an ordinary CSS left coordinate: `matrix(-1, 0, 0, 1, x, y)`. Its original layer blur is 108.3257px. Those values are baked into the native Figma render.

| Card                | UI position (x, y) | UI size             | Orb translation (x, y) | Orb diameter |
| ------------------- | ------------------ | ------------------- | ---------------------- | ------------ |
| Campaigns           | 48, 48             | 593 × 350           | 344, -341              | 1027         |
| Sources             | 56.0232, 24        | 232.8537 × 270.5391 | 507, -326              | 670          |
| Access entries      | -14, 56            | 512 × 231           | 670, -163              | 670          |
| Flags               | 24, 24             | 296 × 336           | 507, -297              | 670          |
| Decisions           | 48, 63             | 319 × 218           | 344, -163              | 670          |
| Statistics & export | 24, 24             | 296 × 274           | 507, -326              | 670          |

## Workflow layers

The four original files in `public/lottie/access-review/1.json` through `4.json` run below the UI using the existing `LottiePlayer`, its 1.12 background scale, lazy activation, offscreen pause, and reduced-motion handling. The 508 × 664 wrapper clips both layers and scales their placement proportionally on mobile. The UI stays still and sharp above the animation at z-index 10; do not use the old flattened workflow WebPs here.

| UI               | Figma position (x, y) | SVG position (x, y) | SVG size  |
| ---------------- | --------------------- | ------------------- | --------- |
| Connect systems  | -97.5, 104.5          | -97.5, 104.5        | 704 × 456 |
| Account context  | 64, 64                | 64, 64              | 720 × 654 |
| Review decisions | 102, 65               | 73, 65              | 439 × 607 |
| Audit evidence   | 36, 103               | 36, 103             | 436 × 458 |

The Decisions export includes a 29px left shadow inset and 72px below the source frame. Its placement compensates for that inset. The white surfaces inside the UI cards are intentional; only the surrounding illustration canvas is transparent. Existing page reveal animations remain unchanged.

## Refresh an export

Edit the source and its corresponding composition in Figma. For workflow UI, export the **editable source node** as SVG with outlined text, preserving transparent space and shadows, and keep the `-ui.svg` suffix. Do not bake in the background. For capability cards, export the **composition node** using PNG @3x; for the Hero, use its SVG composition. Keep the full canvas dimensions, shadows, and clipping. Convert PNGs with Sharp's `webp({ lossless: true, effort: 6 })`, generating the base file, `-2x.webp`, and `-3x.webp`. Do not apply a lossy optimizer to these illustrations. The decoded 3x WebP must match the native Figma PNG pixel-for-pixel when composited on the page's white background.

The asset optimizer preserves lossless WebP encoding in this directory. Only its 3x files have a 640 KiB budget; other images retain the site's usual 500 KiB public-asset budget. This accommodates the detailed Decisions composition without degrading its UI text or gradients.

Run `npm run build`, then check the page at desktop and mobile widths. No publication is implied by these local assets.
