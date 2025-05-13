import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-100 py-20 px-12 rounded-tl-3xl rounded-tr-3xl mt-4">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <p className="text-yellow text-5xl sm:text-4xl not-italic font-light">
          Forget compliance,
          <br />
          focus on your business
        </p>
        <div className="justify-self-end sm:mt-10 sm:justify-self-center">
          <Link
            className="bg-yellow w-fit px-4 py-2 rounded-full flex gap-2 items-center text-dark-900"
            href="https://hexacc.typeform.com/getstarted"
          >
            Start <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="border-t border-solid border-1 border-[rgba(250,250,250,0.20)] my-20" />

      <div
        className="flex sm:flex-col justify-between items-start sm:items-center text-base not-italic font-light sm:gap-8"
        style={{ color: "rgba(250, 250, 250, 0.70)" }}
      >
        <Image src="/probo-text.svg" alt="logo" width={191} height={80} className="sm:mb-8" />
        <div className="grid grid-cols-2 gap-x-16 sm:w-full sm:text-center">
          <div className="flex flex-col gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex flex-col gap-4 mr-20 sm:mr-0">
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/subprocessors">Subprocessors</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
