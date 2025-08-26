import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/app/metadata.config";

export const metadata: Metadata = {
  title: "Blog - Compliance Insights & Best Practices",
  description:
    "Expert insights on SOC 2, GDPR, HIPAA, and ISO compliance. Learn best practices for security compliance, audit preparation, and open-source compliance tools.",
  keywords: [
    "compliance blog",
    "SOC 2 guide",
    "GDPR compliance tips",
    "security best practices",
    "compliance automation",
    "startup compliance",
    "open source security",
  ],
  openGraph: {
    title: "Probo Blog - Compliance Insights & Best Practices",
    description:
      "Expert insights on SOC 2, GDPR, HIPAA, and ISO compliance. Learn best practices for security compliance, audit preparation, and open-source compliance tools.",
    type: "website",
    url: `${siteConfig.url}/blog`,
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Probo Blog - Compliance Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Probo Blog - Compliance Insights & Best Practices",
    description:
      "Expert insights on SOC 2, GDPR, HIPAA, and ISO compliance. Learn best practices for security compliance and audit preparation.",
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="flex flex-col gap-4 py-10">
        <h1 className="text-dark-900 text-center text-3xl leading-[120%] font-normal">
          Blog
        </h1>
        <h2 className="text-dark-600 text-center text-sm leading-[150%] font-normal">
          Need a specific article ? Tell us
        </h2>
      </section>

      <section className="bg-dark-50 flex flex-col items-center gap-10 rounded-3xl py-10 md:gap-16 lg:flex-row lg:flex-wrap lg:justify-center">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex w-80 flex-col gap-5 md:w-156"
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              width={100}
              height={100}
              priority
              className="h-auto w-full rounded-xl"
            />
            <div className="text-dark-900 flex flex-col gap-3">
              <h2 className="text-lg leading-[140%] font-medium md:text-xl">
                {post.title}
              </h2>
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full md:h-8 md:w-8"
                />
                <p className="text-xs leading-[150%] font-medium md:text-base">
                  {post.author.name}
                </p>
                <p className="text-xl leading-[150%] font-bold">•</p>
                <p className="text-xs leading-[150%] md:text-base">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
        <div className="w-80 flex-col gap-5 sm:hidden md:w-156 lg:flex"></div>
        <div className="w-80 flex-col gap-5 sm:hidden md:w-156 lg:flex"></div>
      </section>
    </div>
  );
}
