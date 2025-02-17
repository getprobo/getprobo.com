'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // If path ends with slash, redirect to non-slash version
    if (pathname.endsWith('/')) {
      router.replace(pathname.slice(0, -1));
    }
  }, [pathname, router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-geist-alt mb-4">Page Not Found</h1>
        <p className="text-gray-400">The page you{"'"}re looking for doesn{"'"}t exist.</p>
      </div>
    </div>
  );
} 