<h1 align="center">Probo Website</h1>
<p align="center">
This repository contains the marketing website for Probo - the open-source
compliance management platform.
</p>

<p align="center">
  <img src=".github/probo.png" alt="Probo Website" style="max-height: 250px;">
</p>

## About Probo

Probo is an open-source platform that helps startups get SOC-2 certified in just
one week. No paywalls, no vendor lock-in - just simple, fast compliance.

- Get SOC-2 certified in just 20 hours
- Expert guidance at every step
- Pay only for what you need - no hidden fees
- Open source and built for startups
- Supports multiple frameworks (SOC-2, ISO 27001, GDPR)

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [MDX](https://mdxjs.com/) for blog posts
- [PostHog](https://posthog.com/) for analytics

## Development

1. Clone the repository:

```bash
git clone https://github.com/getprobo/getprobo.com.git
cd getprobo.com
```

2. Install dependencies:

```bash
npm ci
```

3. Create a `.env.local` file:

```bash
NEXT_PUBLIC_POSTHOG_KEY=your_key
NEXT_PUBLIC_POSTHOG_HOST=your_host
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

While this is just our website repository, we welcome contributions! Please feel
free to submit issues and pull requests.

## Stay Updated

- Join the waitlist: [getprobo.com](https://www.getprobo.com)
- Follow us: [@getprobo](https://twitter.com/getprobo)
- Join our Discord: [Probo Community](https://discord.gg/8qfdJYfvpY)
- Main project: [github.com/getprobo/probo](https://github.com/getprobo/probo)
- Contact: [hello@getprobo.com](mailto:hello@getprobo.com)

## License

MIT License - see [LICENSE](LICENSE) for details.
