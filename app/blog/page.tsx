import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {posts.slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <div className="aspect-[16/9] relative">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 group-hover:text-zinc-200">{post.title}</h2>
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-sm text-zinc-400">{post.author.name}</span>
                  <span className="text-zinc-600">•</span>
                  <div className="flex items-center text-sm text-zinc-400">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-zinc-400">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority={index < 3}
                    className="object-cover border border-white/10 rounded-lg"
                  />
                </div>
                <div className="py-4">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
