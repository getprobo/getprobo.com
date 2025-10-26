import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import {frameworks} from "./data/frameworks.ts";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/blog" }),
});

const stories = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/stories" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    impacts: z.array(z.object({
      title: z.string(),
      label: z.string(),
    })).min(1),
    image: z.string(),
    framework: z.enum(frameworks.map(f => f.label) as any),
    logo: z.string(),
    company: z.object({
      name: z.string(),
      industry: z.string(),
      type: z.string(),
      about: z.string(),
    }),
  })
});
export const collections = { blog, stories };
