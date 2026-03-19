// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import faroUploader from "@grafana/faro-rollup-plugin";
import svelte from "@astrojs/svelte";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import { removeHtmlExtension } from "./vite-plugin-remove-html";
import { langs } from "./src/config";
import { removeTranslatedDoc } from "./tools/removeTranslatedDoc";
import { generateMarkdown } from "./tools/generateMarkdown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.getprobo.com",
  prefetch: false,
  trailingSlash: "never",
  i18n: {
    locales: [...langs, "en"],
    defaultLocale: "en",
  },
  redirects: {
    "/blog/page/1": {
      status: 301,
      destination: "/blog",
    },
    "/fr/blog/page/1": {
      status: 301,
      destination: "/fr/blog",
    },
  },
  build: {
    format: "file",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes("node_modules/svelte") ||
              id.includes("lib/runes") ||
              id.includes("node_modules/runed")
            ) {
              return "svelte";
            }

            if (id.includes("@splide")) {
              return "splide";
            }

            return null;
          },
        },
      },
    },
    plugins: [
      tailwindcss(),
      faroUploader({
        appName: "site",
        endpoint:
          "https://faro-collector-prod-us-west-0.grafana.net/collect/bc771c773d3690b642ccf001af91958a",
        apiKey: "",
        appId: "",
        stackId: "",
        gzipContents: true,
      }),
    ],
  },

  integrations: [
    removeHtmlExtension(),
    starlight({
      components: {
        ContentPanel: "./src/components/docs/ContentPanel.astro",
        Header: "./src/components/docs/Header.astro",
        Head: "./src/components/docs/Head.astro",
        PageFrame: "./src/components/docs/PageFrame.astro",
        Search: "./src/components/docs/Search.astro",
        MobileMenuFooter: "./src/components/docs/MobileMenuFooter.astro",
        ThemeProvider: "./src/components/docs/ThemeProvider.astro",
        LanguageSelect: "./src/components/docs/LanguageSelect.astro",
        MobileMenuToggle: "./src/components/docs/MobileMenuToggle.astro",
        TwoColumnContent: "./src/components/docs/TwoColumnContent.astro",
        PageSidebar: "./src/components/docs/PageSidebar.astro",
      },
      disable404Route: true,
      title: "Probo Documentation",
      logo: {
        replacesTitle: true,
        src: "./src/assets/probo-logo.svg",
        alt: "Probo Logo",
      },
      defaultLocale: "root",
      customCss: ["./src/styles/starlight.css"],
      lastUpdated: true,
      editLink: {
        baseUrl:
          "https://github.com/getprobo/getprobo.com/edit/main/src/content/docs/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/getprobo/probo",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.com/invite/8qfdJYfvpY",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Overview", slug: "docs" },
            { label: "Quickstart", slug: "docs/getting-started/quickstart" },
            {
              label: "Core Concepts",
              slug: "docs/getting-started/core-concepts",
            },
          ],
        },
        {
          label: "Self-Hosting",
          items: [
            {
              label: "Docker Compose",
              slug: "docs/self-hosting/docker-compose",
            },
            { label: "Kubernetes", slug: "docs/self-hosting/kubernetes" },
          ],
        },
        {
          label: "Configuration",
          items: [
            { label: "Overview", slug: "docs/configuration/overview" },
            { label: "Config File", slug: "docs/configuration/config-file" },
            {
              label: "Environment Variables",
              slug: "docs/configuration/environment-variables",
            },
          ],
        },
        {
          label: "SSO",
          items: [
            { label: "Overview", slug: "docs/product/sso/overview" },
            {
              label: "Google Workspace",
              slug: "docs/product/sso/google-workspace",
            },
            { label: "Okta", slug: "docs/product/sso/okta" },
          ],
        },
        {
          label: "SCIM",
          items: [
            { label: "Overview", slug: "docs/product/scim/overview" },
            {
              label: "Google Workspace",
              slug: "docs/product/scim/google-workspace",
            },
          ],
        },
        {
          label: "CLI",
          badge: "New",
          items: [
            { label: "Overview", slug: "docs/cli/overview" },
            {
              label: "Authentication",
              slug: "docs/cli/authentication",
            },
            {
              label: "Configuration",
              slug: "docs/cli/configuration",
            },
            {
              label: "Commands",
              collapsed: true,
              items: [
                {
                  label: "Organizations",
                  slug: "docs/cli/commands/organizations",
                },
                {
                  label: "Users",
                  slug: "docs/cli/commands/users",
                },
                {
                  label: "Frameworks",
                  slug: "docs/cli/commands/frameworks",
                },
                {
                  label: "Controls",
                  slug: "docs/cli/commands/controls",
                },
                {
                  label: "Risks",
                  slug: "docs/cli/commands/risks",
                },
                {
                  label: "Findings",
                  slug: "docs/cli/commands/findings",
                },
                {
                  label: "Statements of Applicability",
                  slug: "docs/cli/commands/soa",
                },
                {
                  label: "Webhooks",
                  slug: "docs/cli/commands/webhooks",
                },
              ],
            },
          ],
        },
        {
          label: "MCP",
          items: [
            { label: "Overview", slug: "docs/api/mcp/overview" },
            {
              label: "Authentication",
              slug: "docs/api/mcp/authentication",
            },
            { label: "Pagination", slug: "docs/api/mcp/pagination" },
            {
              label: "Available Tools",
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  slug: "docs/api/mcp/tools",
                },
                {
                  label: "Organizations",
                  slug: "docs/api/mcp/tools/organizations",
                },
                {
                  label: "Users",
                  slug: "docs/api/mcp/tools/users",
                },
                {
                  label: "Vendors",
                  slug: "docs/api/mcp/tools/vendors",
                },
                {
                  label: "Risks",
                  slug: "docs/api/mcp/tools/risks",
                },
                {
                  label: "Measures",
                  slug: "docs/api/mcp/tools/measures",
                },
                {
                  label: "Frameworks",
                  slug: "docs/api/mcp/tools/frameworks",
                },
                {
                  label: "Controls",
                  slug: "docs/api/mcp/tools/controls",
                },
                {
                  label: "Assets",
                  slug: "docs/api/mcp/tools/assets",
                },
                {
                  label: "Audits",
                  slug: "docs/api/mcp/tools/audits",
                },
                {
                  label: "Tasks",
                  slug: "docs/api/mcp/tools/tasks",
                },
                {
                  label: "Documents",
                  slug: "docs/api/mcp/tools/documents",
                },
                {
                  label: "Meetings",
                  slug: "docs/api/mcp/tools/meetings",
                },
                {
                  label: "Snapshots",
                  slug: "docs/api/mcp/tools/snapshots",
                },
                {
                  label: "States of Applicability",
                  slug: "docs/api/mcp/tools/states-of-applicability",
                },
                {
                  label: "Findings",
                  slug: "docs/api/mcp/tools/findings",
                },
                {
                  label: "Obligations",
                  slug: "docs/api/mcp/tools/obligations",
                },
                {
                  label: "Data Classification",
                  slug: "docs/api/mcp/tools/data-classification",
                },
                {
                  label: "Processing Activities",
                  slug: "docs/api/mcp/tools/processing-activities",
                },
                {
                  label: "DPIAs",
                  slug: "docs/api/mcp/tools/dpias",
                },
                {
                  label: "TIAs",
                  slug: "docs/api/mcp/tools/tias",
                },
              ],
            },
            {
              label: "Integrations",
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  slug: "docs/api/mcp/integrations",
                },
                {
                  label: "Claude Desktop",
                  slug: "docs/api/mcp/claude-desktop",
                },
                {
                  label: "Claude Code",
                  slug: "docs/api/mcp/claude-code",
                },
                {
                  label: "Claude.ai",
                  slug: "docs/api/mcp/claude-ai",
                },
                { label: "Cursor", slug: "docs/api/mcp/cursor" },
                { label: "Windsurf", slug: "docs/api/mcp/windsurf" },
                { label: "Zed", slug: "docs/api/mcp/zed" },
                {
                  label: "Opencode AI",
                  slug: "docs/api/mcp/opencode",
                },
                { label: "VS Code", slug: "docs/api/mcp/vscode" },
                { label: "OpenAI", slug: "docs/api/mcp/openai" },
              ],
            },
          ],
        },
        {
          label: "n8n",
          items: [
            { label: "Overview", slug: "docs/api/n8n/overview" },
            {
              label: "Authentication",
              slug: "docs/api/n8n/authentication",
            },
            { label: "Resources", slug: "docs/api/n8n/resources" },
            { label: "GraphQL", slug: "docs/api/n8n/graphql" },
          ],
        },
        {
          label: "Webhooks",
          items: [
            { label: "Overview", slug: "docs/api/webhooks/overview" },
            {
              label: "Event Types",
              slug: "docs/api/webhooks/event-types",
            },
            {
              label: "Signature Verification",
              slug: "docs/api/webhooks/signature-verification",
            },
          ],
        },
      ],
    }),
    removeTranslatedDoc(),
    generateMarkdown(),
    mdx(),
    svelte(),
    sitemap({
      filter(page) {
        if (page.endsWith('/yc') || page.endsWith('/yc/')) {
          return false;
        }
        if (page.includes('/fr/docs')) {
          return false;
        }
        if (page.includes('/fr/blog')) {
          return false;
        }
        if (page.includes('/404')) {
          return false;
        }
        if (page.includes('/whats-next')) {
          return false;
        }
        if (page.includes('/feedback')) {
          return false;
        }
        if (page.includes('/blog/page/1')) {
          return false;
        }
        return true;
      },
      serialize(item) {
        item.lastmod = new Date().toISOString();

        if (item.url === "https://www.getprobo.com") {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "weekly"
          );
          item.priority = 1.0;
        } else if (item.url === "https://www.getprobo.com/docs") {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "weekly"
          );
          item.priority = 0.9;
        } else if (item.url.includes("/blog/")) {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "weekly"
          );
          item.priority = 0.8;
        } else if (item.url.includes("/hub")) {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "weekly"
          );
          item.priority = 0.8;
        } else if (
          item.url.includes("/docs/configuration") ||
          item.url.includes("/docs/self-hosting")
        ) {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "monthly"
          );
          item.priority = 0.8;
        } else if (item.url.includes("/docs")) {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "monthly"
          );
          item.priority = 0.7;
        } else if (item.url.includes("/stories")) {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "monthly"
          );
          item.priority = 0.7;
        } else if (item.url.includes("/about")) {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "monthly"
          );
          item.priority = 0.6;
        } else if (
          item.url.includes("/privacy") ||
          item.url.includes("/terms") ||
          item.url.includes("/cookie-policy") ||
          item.url.includes("/subprocessors")
        ) {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "yearly"
          );
          item.priority = 0.3;
        } else {
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ (
            "monthly"
          );
          item.priority = 0.5;
        }

        return item;
      },
    }),
  ],
});
