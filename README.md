# probo.com

Marketing website and documentation for Probo.

## About Probo

Probo is an open-source compliance management platform that helps organizations achieve SOC 2 compliance quickly and efficiently. Built for startups, Probo provides automated evidence collection, risk assessment, and audit preparation tools.

## Setup

Use Node.js 24:

```bash
npm ci
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Documentation

Documentation content lives in `src/content/docs/docs/` and covers onboarding, self-hosting, configuration, product features, CLI usage, and integrations.

Before opening a pull request:

```bash
npm run format
npm run check:docs
npm run build
```

## Deployment

Pushes to the `v2` branch are built by GitHub Actions and deployed to Cloudflare Pages.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the development and documentation workflow.

## Resources

- Main repository: [github.com/getprobo/probo](https://github.com/getprobo/probo)

## License

MIT License - see [LICENSE](LICENSE) for details.
