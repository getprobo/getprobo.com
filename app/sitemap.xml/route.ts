import { getAllPosts } from "@/lib/blog"
import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = 'https://www.getprobo.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${baseUrl}/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      ${posts.map((post) => `
        <url>
          <loc>${baseUrl}/blog/${post.slug}</loc>
          <lastmod>${new Date(post.date).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
      <url>
        <loc>${baseUrl}/privacy</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>${baseUrl}/terms</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>${baseUrl}/security</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${baseUrl}/cookie-policy</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>${baseUrl}/subprocessors</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    },
  });
}
