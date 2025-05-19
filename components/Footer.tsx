import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-900 grid gap-20 rounded-tl-3xl rounded-tr-3xl px-5 py-20 md:px-12">
      <div className="grid gap-20 md:grid-cols-2 md:gap-0">
        <div className="text-3xl leading-15 font-normal text-yellow-400 not-italic md:text-5xl">
          <span className="block whitespace-nowrap">Forget compliance,</span>
          <span className="whitespace-nowrap">focus on your business</span>
        </div>

        <Link
          className="text-dark-900 mx-auto flex min-w-[255px] items-center justify-center gap-3 rounded-full bg-yellow-400 px-6 py-5 text-base leading-[100%] font-semibold md:mx-0 md:w-fit md:min-w-[115px] md:self-end md:justify-self-end"
          href="https://hexacc.typeform.com/getstarted"
        >
          Start today <ArrowRight height={16} width={16} />
        </Link>
      </div>

      <div className="bg-dark-600 h-px w-full" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-0">
        <Image src="/probo-text.svg" alt="logo" width={191} height={80} />
        <div className="text-dark-400 grid gap-6 text-base leading-[100%] font-normal whitespace-nowrap md:mr-30 md:grid-flow-col md:grid-cols-2 md:grid-rows-4 md:justify-self-end">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="https://github.com/getprobo/probo">GitHub</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/subprocessors">Subprocessors</Link>
        </div>
      </div>
    </footer>
  );
}
