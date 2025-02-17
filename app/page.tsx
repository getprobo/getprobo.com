"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ContributeButton } from "@/components/ContributeButton";
import { cn } from "@/lib/utils";

const clients = [
  {
    name: "Kor",
    logo: "/clients/kor.png",
    url: "https://www.kor.care",
  },
  {
    name: "Marble",
    logo: "/clients/marble.png",
    url: "https://www.checkmarble.com",
  },
  {
    name: "Photoroom",
    logo: "/clients/photoroom.png",
    url: "https://www.photoroom.com",
  },
  {
    name: "Axolo",
    logo: "/clients/axolo.png",
    url: "https://www.axolo.co",
  },
  {
    name: "Shipfox",
    logo: "/clients/shipfox.png",
    url: "https://www.shipfox.io",
  },
  {
    name: "Deja Blue",
    logo: "/clients/dejablue.png",
    url: "https://www.dejablue.energy",
  },
];

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="relative"
      >
        <div className="relative">
          <div className="absolute sm:bottom-[-46px] bottom-[-30px] left-1/2 transform -translate-x-1/2 z-10">
            <motion.div variants={fadeIn}>
              <Image
                src="/merkat.png"
                alt="Probo mascot"
                width={304}
                height={288}
                className="w-[200px] sm:w-[304px]"
                priority
              />
            </motion.div>
          </div>

          <motion.div className="relative overflow-hidden rounded-b-[2rem] min-h-[650px]">
            <Image
              src="/bg.png"
              alt="Background gradient"
              width={2000}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />

            <div className="relative h-full flex flex-col">
              <div className="mx-auto px-4 flex-grow flex flex-col justify-start items-center pt-[50px]">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h1
                    variants={fadeIn}
                    className={cn(
                      "font-medium text-4xl sm:text-5xl md:text-[72px] leading-tight sm:leading-[79.2px] text-center text-white mb-6",
                      "font-geist-alt tracking-[0%] leading-trim-cap",
                    )}
                  >
                    Compliance,
                    <br />
                    minus the clutter.
                  </motion.h1>

                  <motion.p
                    variants={fadeIn}
                    className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 px-4"
                  >
                    Probo is the open-source platform that helps startups
                    navigate compliance with confidence.
                  </motion.p>

                  <motion.div
                    variants={fadeIn}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center px-4"
                  >
                    <ContributeButton
                      org="getprobo"
                      repo="probo"
                      defaultStars={2}
                    />
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
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <section className="bg-black px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D1FF4C]">
              Trusted by innovative companies
            </h2>
            <p className="mt-2 text-lg text-gray-400">
              Join companies using Probo to streamline their compliance
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center col-span-1 px-8"
              >
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-200"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={40}
                    className="max-h-12 w-auto opacity-50 hover:opacity-100 transition-opacity invert brightness-0"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
