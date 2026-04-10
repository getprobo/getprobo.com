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
    invertLogo: z.boolean().optional().default(true),
    company: z.object({
      name: z.string(),
      industry: z.string(),
      type: z.string(),
      about: z.string(),
    }),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/changelog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/jobs" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    type: z.string(),
  }),
});

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

export const collections = { blog, stories, docs, changelog, jobs };
