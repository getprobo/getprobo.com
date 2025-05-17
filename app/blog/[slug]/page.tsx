import type React from "react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import type { Metadata } from "next";
import type { BlogPost } from "@/lib/blog";

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
  };
}

async function generateStructuredData(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Probo",
      logo: {
        "@type": "ImageObject",
        url: "https://getprobo.com/logo.png",
      },
    },
  };
}

export default async function BlogPost(props: Props) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const structuredData = await generateStructuredData(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-dark-900 min-h-screen rounded-2xl text-white">
        <header className="container mx-auto px-4 pt-16">
          <div className="text-center">
            <time className="text-sm text-neutral-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <h1 className="font-geist-alt mt-8 text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-2 text-neutral-400">{post.excerpt}</p>
            <div className="mt-10 flex items-center justify-center gap-2">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={28}
                height={28}
                className="rounded-full"
              />
              <p className="font-light text-neutral-400">{post.author.name}</p>
            </div>
          </div>
        </header>

        <section className="relative my-16 flex h-[500px] items-center justify-center overflow-hidden">
          <div className="absolute h-[300px] w-[300px] rounded-full bg-white/5 blur-[100px]" />
          <div className="relative z-10 h-full w-full">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="h-full w-full rounded-lg border border-white/20 object-cover"
            />
          </div>
        </section>

        <div className="container mx-auto max-w-3xl space-y-24 px-4 pb-24">
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </div>
    </>
  );
}
