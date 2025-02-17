"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog";

export function BlogContent({ posts }: { posts: BlogPost[] }) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-light font-geist-alt mb-8"
      >
        Blog
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {posts.slice(0, 2).map((post, index) => (
          <motion.div
            key={post.slug}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            variants={fadeIn}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-lg block"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority={index < 2}
                  className="object-cover border border-white/10 rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <motion.div 
                className="py-4"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-lg font-geist-alt font-light mb-3 text-white">
                  {post.title}
                </h3>
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
                  <div className="flex items-center text-sm text-zinc-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {posts.slice(2).length > 0 && (
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-semibold text-zinc-400"
          >
            Latest Posts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.slice(2).map((post, index) => (
              <motion.div
                key={post.slug}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                variants={fadeIn}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-lg block"
                >
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      priority={index < 3}
                      className="object-cover border border-white/10 rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <motion.div 
                    className="py-4"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-lg font-geist-alt font-light mb-3 text-white">
                      {post.title}
                    </h3>
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
                      <div className="flex items-center text-sm text-zinc-400">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 