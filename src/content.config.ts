import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { frameworks } from "./content/frameworks.ts";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const pageSize = 10;

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
});

const stories = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/stories" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    impacts: z
      .array(
        z.object({
          title: z.string(),
          label: z.string(),
        }),
      )
      .min(1),
    image: z.string(),
    previewImage: z.string().optional(),
    ogImage: z.string().optional(),
    framework: z.enum(frameworks.map((f) => f.label) as any),
    logo: z.string(),
    /** Hero logo height in px (story page + cards); default 23 */
    logoHeight: z.number().optional(),
    /** Logo asset for light UI (e.g. story cards); falls back to `logo` */
    logoLightBg: z.string().optional(),
    invertLogo: z.boolean().optional().default(true),
    company: z.object({
      name: z.string(),
      url: z.string().url().optional(),
      industry: z.string(),
      type: z.string(),
      about: z.string(),
    }),
  }),
});

const hub = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/hub" }),
  schema: z.object({
    title: z.string(),
    /** Word/phrase within `title` to highlight in the article <h1> */
    highlight: z.string().optional(),
    /** Small pill shown under the <h1> (e.g. "The Complete SOC 2 Guide for 2026") */
    eyebrow: z.string().optional(),
    description: z.string(),
    /** Card label on the hub index (e.g. "Guide", "Comparison", "Checklist") */
    tag: z.string().default("Guide"),
    /** Which hub index section the card appears in */
    section: z.enum(["articles", "tool-recommendation"]).default("articles"),
    /** Tailwind gradient classes for the card accent */
    accentColor: z.string().default("from-emerald-400 to-teal-500"),
    /** FrameworkBadge names rendered next to the <h1> */
    badges: z.array(z.string()).default([]),
    date: z.date(),
    dateModified: z.date().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/changelog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    imagesLayout: z.enum(["stacked", "logos"]).default("stacked"),
    tags: z.array(z.string()).default([]),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/jobs" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    type: z.string(),
    draft: z.boolean().default(false),
  }),
});

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

export const collections = { blog, stories, docs, changelog, jobs, hub };
