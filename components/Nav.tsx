"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between px-2 py-5 md:px-6 md:py-6 lg:px-12">
        <Link href="/">
          <Image
            src="/probo-logo-with-name.svg"
            alt="logo"
            className="h-8.5 w-31"
            width={124}
            height={34}
          />
        </Link>

        <nav className="text-dark-900 hidden text-base leading-tight font-medium lg:flex lg:gap-12 lg:justify-self-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="https://github.com/getprobo/probo">GitHub</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://hexacc.typeform.com/getstarted"
            className="text-dark-900 bg-dark-300 hidden w-fit rounded-full px-6 py-5 text-base leading-[100%] font-semibold md:flex md:items-center md:gap-2.5"
          >
            Get started <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
          <button
            className="bg-dark-900 w-fit rounded-full p-4 text-yellow-400 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex h-screen items-start justify-center p-6 lg:hidden">
          <nav className="flex w-full flex-col gap-6 text-center text-base font-medium">
            <Link href="/">Home</Link>
            <div className="bg-dark-300 h-px w-full" />
            <Link href="/about">About</Link>
            <div className="bg-dark-300 h-px w-full" />
            <Link href="/blog">Blog</Link>
            <div className="bg-dark-300 h-px w-full" />
            <Link href="https://github.com/getprobo/probo">GitHub</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
