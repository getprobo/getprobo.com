"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // If path ends with slash, redirect to non-slash version
    if (pathname.endsWith("/")) {
      router.replace(pathname.slice(0, -1));
    }
  }, [pathname, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="font-geist-alt mb-4 text-4xl">Page Not Found</h1>
        <p className="text-gray-400">
          The page you{"'"}re looking for doesn{"'"}t exist.
        </p>
      </div>
    </div>
  );
}
