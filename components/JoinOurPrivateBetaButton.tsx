"use client";

import { motion } from "framer-motion";

export function JoinOurPrivateBetaButton() {
  return (
    <div className="flex justify-center items-center">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://hexacc.typeform.com/to/HEabWsbN"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#D1FF4C] text-black px-8 py-3 rounded-full font-medium hover:bg-[#bfff1a] transition-colors w-full md:w-auto text-center"
      >
        Join our private beta
      </motion.a>
    </div>
  );
}
