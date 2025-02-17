import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import siteConfig from './metadata.config';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts();
  
  const blogPosts = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const mainPages = [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  const legalPages = [
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/security`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/cookie-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/subprocessors`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  return [...mainPages, ...blogPosts, ...legalPages];
} 