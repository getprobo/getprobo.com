"use client";

import { motion } from "framer-motion";
import { ContributeButton } from "./ContributeButton";

export function BlogCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1A1A1A] to-black p-8 md:p-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D1FF4C10_1px,transparent_1px),linear-gradient(to_bottom,#D1FF4C10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-geist-alt font-light text-center mb-4">
          Ready to streamline your compliance?
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto">
          Join our open-source community and start managing your compliance with
          confidence.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <ContributeButton org="getprobo" repo="probo" defaultStars={183} />
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://hexacc.typeform.com/to/HEabWsbN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D1FF4C] text-black px-8 py-3 rounded-full font-medium hover:bg-[#bfff1a] transition-colors w-full md:w-auto text-center"
          >
            Join the waitlist
          </motion.a>
        </div>
      </div>
    </div>
  );
}
