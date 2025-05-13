import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { ClientBlog } from "./ClientBlog";
import siteConfig from "../metadata.config";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest insights and updates about compliance, security, and open source from the Probo team.",
  openGraph: {
    title: "Probo Blog",
    description:
      "Latest insights and updates about compliance, security, and open source from the Probo team.",
    type: "website",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Probo Blog",
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Add structured data for blog list
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Probo Blog",
    description:
      "Latest insights and updates about compliance, security, and open source",
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    blogPosts: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
      image: post.coverImage,
      url: `${siteConfig.url}/blog/${post.slug}`,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Section>
        <h1 className="text-6xl font-light text-center mb-8">Blog</h1>
      </Section>

      <div className="grid grid-cols-2 gap-6 mb-12 bg-dark-900 rounded-2xl p-12 text-white">
        {posts.slice(0, 2).map((post, index) => (
          <ClientBlog key={post.slug} post={post} index={index} />
        ))}
      </div>

      {posts.slice(2).length > 0 && (
        <div className="bg-dark-50 rounded-2xl p-12">
          <h2 className="text-4xl font-light mb-8">Latest Posts</h2>
          <div className="grid grid-cols-3 gap-6 mb-12">
            {posts.slice(2).map((post, index) => (
              <ClientBlog key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
