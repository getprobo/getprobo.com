import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { ClientBlog } from "./ClientBlog";
import siteConfig from "../metadata.config";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest insights and updates about compliance, security, and open source from the Probo team.",
  openGraph: {
    title: "Probo Blog",
    description: "Latest insights and updates about compliance, security, and open source from the Probo team.",
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
    description: "Latest insights and updates about compliance, security, and open source",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-light font-geist-alt mb-8">Blog</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {posts.slice(0, 2).map((post, index) => (
              <ClientBlog key={post.slug} post={post} index={index} />
            ))}
          </div>

          {posts.slice(2).length > 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-zinc-400">Latest Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.slice(2).map((post, index) => (
                  <ClientBlog key={post.slug} post={post} index={index + 2} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
