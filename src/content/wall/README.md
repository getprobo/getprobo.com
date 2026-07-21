# Wall of Trust content

Each `.mdx` file here is one testimonial card on `/wall-of-trust`.
Everything lives in the frontmatter; the MDX body is ignored (use it for notes).

## Add a post

1. Drop the logo (and optional avatar / thumbnail) into `src/assets/wall/`.
2. Create `company-name.mdx` here.

```mdx
---
company: Acme Cloud          # name shown on the card
author: Jane Doe             # optional — renders the small overlapping avatar
followers: 8420              # optional — "8,420 followers"
logo: acme-logo.svg          # file in src/assets/wall/
avatar: jane-doe.jpg         # optional — file in src/assets/wall/
framework: SOC 2             # optional — must match a label in src/content/frameworks.ts
post: |                      # the post text; line breaks are preserved
  🔐 Acme Cloud is now SOC 2 Type II certified!

  A few words about what it means for our customers…
translatedPost: |            # optional — English translation, shown by default
  ...                        # (the original is revealed via the FR/EN pill)
originalLang: FR             # optional — label on the language pill
thumbnail: acme-post.jpg     # optional — the shared image/link preview
likes: 128                   # optional
comments: 14                 # optional
postUrl: https://www.linkedin.com/posts/...   # optional — "View post" link
order: 1                     # optional — lower shows first
featured: true               # optional — featured posts sort to the top
draft: false                 # true = preview in `astro dev` only, hidden in prod
---
```

## Notes

- `framework` accepts any label from `src/content/frameworks.ts`
  (e.g. `SOC 2`, `ISO 27001`, `GDPR`, `HIPAA`, `ISO 42001`).
- Sorting: `featured` first, then `order` ascending, then `followers` descending.
- The `sample-*.mdx` files are placeholders (`draft: true`) — **delete them
  before launch.** They only render in `astro dev`.
- Images are processed by Astro's asset pipeline, so keep them in
  `src/assets/wall/` (not `public/`).
