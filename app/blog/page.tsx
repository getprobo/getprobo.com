import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <BlogContent posts={posts} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Blog | Probo",
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
