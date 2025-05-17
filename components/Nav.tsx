import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Nav() {
  return (
    <div className="py-5">
      <Link href="/">
        <Image
          src="/probo-logo-with-name.svg"
          className="justify-self-start sm:mb-4 sm:justify-self-center"
          alt="logo"
          width={88}
          height={24}
        />
      </Link>
      <nav className="text-dark-900 flex gap-16 justify-self-center text-base font-medium not-italic">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="https://github.com/getprobo/probo">GitHub</Link>
      </nav>
      <Link
        className="bg-dark-300 text-dark-900 flex w-fit items-center gap-3 justify-self-end rounded-full px-6 py-3 text-base font-medium not-italic"
        href="https://hexacc.typeform.com/getstarted"
      >
        Get Started <ArrowRight />
      </Link>
    </div>
  );
}
