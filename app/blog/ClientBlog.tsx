"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

export function ClientBlog({ post }: { post: BlogPost; index: number }) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.article
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      variants={fadeIn}
      className="group relative overflow-hidden rounded-lg block"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <motion.div
          className="py-4"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          <h2 className="text-lg font-geist-alt font-light mb-3">
            {post.title}
          </h2>
          <div className="flex items-center">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <span className="text-sm">{post.author.name}</span>
            <span className="px-2 text-xs">•</span>
            <div className="flex items-center text-sm">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
