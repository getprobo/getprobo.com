import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Nav() {
  return (
    <div className="w-full px-12 py-6 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/probo-logo-with-name.svg"
          alt="logo"
          width={124}
          height={34}
        />
      </Link>
      <nav className="flex gap-16 text-dark-900 text-base not-italic font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <Link
        className="bg-dark-300 px-6 py-3 rounded-full flex gap-3 items-center text-dark-900 not-italic font-medium text-base md:invisible visible"
        href="/"
      >
        Get Started <ArrowRight />
      </Link>
    </div>
  );
}
