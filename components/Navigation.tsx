"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto max-w-[1250px] px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-[#D1FF4C]">
          <Link href="/">
            <Image
              src="/logo-text.svg"
              alt="Probo"
              width={100}
              height={40}
              className="w-[100px] h-[40px]"
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-white hover:text-[#D1FF4C]">
            About
          </Link>
          <Link href="/blog" className="text-white hover:text-[#D1FF4C]">
            Blog
          </Link>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://hexacc.typeform.com/to/HEabWsbN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CEF521] text-black px-6 py-2 rounded-full font-medium hover:bg-[#B9DB21] transition-colors flex items-center gap-2"
          >
            Join the waitlist
          </motion.a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-[500px]"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-white hover:text-[#D1FF4C]">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#D1FF4C]">
            About
          </Link>
          <Link href="/blog" className="text-white hover:text-[#D1FF4C]">
            Blog
          </Link>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/8qfdJYfvpY"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2] text-white px-6 py-2 rounded-full font-medium hover:bg-[#4752C4] transition-colors flex items-center gap-2 justify-center"
          >
            <MessageSquare className="w-4 h-4" />
            Join our community
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
