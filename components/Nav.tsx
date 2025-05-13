import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Nav() {
  return (
    <div className="w-full px-12 py-6 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 items-center">
      <Link href="/">
        <Image
          src="/probo-logo-with-name.svg"
          className="justify-self-start sm:justify-self-center sm:mb-4"
          alt="logo"
          width={124}
          height={34}
        />
      </Link>
      <nav className="flex gap-16 text-dark-900 text-base not-italic font-medium justify-self-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <Link
        className="bg-dark-300 px-6 py-3 rounded-full flex gap-3 items-center text-dark-900 not-italic font-medium text-base w-fit justify-self-end visible md:invisible"
        href="https://hexacc.typeform.com/getstarted"
      >
        Get Started <ArrowRight />
      </Link>
    </div>
  );
}
