# Access Review docs — screenshots

The access-review provider pages reference one screenshot each from this folder (served at
`/docs/access-review/...`). Naming convention:

- `<provider>-create-api-key.webp` — the provider's key-creation dialog, used by that provider's
  `<provider>.mdx` Step 1. (Current: `anthropic-`, `openai-`, `resend-`.)

Requirements:

- Crop to just the dialog box so no account email, credit balance, real key value, or
  org-identifying data is shown.
- Store as **optimized lossless WebP**: `cwebp -lossless <crop>.png -o <name>.webp`
  (lossless keeps the UI text crisp while cutting ~65% of the size).
