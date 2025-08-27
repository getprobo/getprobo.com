import type React from "react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import type { Metadata } from "next";
import type { BlogPost } from "@/lib/blog";
import { BlogPostStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";
import siteConfig from "@/app/metadata.config";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
    },
  };
}

export default async function BlogPost(props: Props) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostStructuredData
        title={post.title}
        description={post.excerpt}
        author={post.author.name}
        datePublished={post.date}
        image={`${siteConfig.url}${post.coverImage}`}
        url={`${siteConfig.url}/blog/${post.slug}`}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title },
        ]}
      />
      
      <section>
        <header className="flex flex-col items-center gap-5 px-5 py-10">
        <div className="mx-auto flex max-w-lg flex-col gap-4 md:max-w-3xl md:gap-10 lg:max-w-5xl">
          <h1 className="text-dark-900 text-center text-3xl leading-[120%] font-normal md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="text-dark-600 text-center text-sm leading-[150%] font-normal md:text-lg">
            {post.excerpt}
          </p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={28}
            height={28}
            className="h-6 w-6 rounded-full md:h-8 md:w-8"
          />
          <p className="text-xs leading-[150%] font-medium md:text-base">
            {post.author.name}
          </p>
          <p className="text-xl leading-[150%] font-bold">•</p>
          <p className="text-xs leading-[150%] font-normal md:text-base">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </header>

      <article className="bg-dark-50 prose mx-auto rounded-3xl px-5 py-10 text-base leading-[140%] font-normal md:px-12 md:py-20 md:text-xl lg:max-w-5xl lg:p-20">
        <MDXRemote source={post.content} />
      </article>
    </section>
    </>
  );
}
