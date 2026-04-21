import { defineCollection, z } from "astro:content";
import { frameworks } from "./content/frameworks.ts";

export const StorySchema = z.object({
  title: z.string(),
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
  framework: z.enum(frameworks.map((f) => f.label) as any),
  logo: z.string(),
  logoLightBg: z.string().optional(),
  invertLogo: z.boolean().optional(),
  company: z.object({
    name: z.string(),
    industry: z.string(),
    type: z.string(),
    about: z.string(),
  }),
});

export type StoryData = z.infer<typeof StorySchema>;
