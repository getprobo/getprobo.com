import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { filterLang } from "../lib/i18n.ts";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog", filterLang("en"))).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "Probo Blog",
    description:
      "Insights on compliance, security, and building trust for startups.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
  });
}
