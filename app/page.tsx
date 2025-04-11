"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RepositoryButton } from "@/components/RepositoryButton";
import { Clock, SmilePlus, Award, DollarSign } from "lucide-react";

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
        <div className="bg-[url(/bg-big.webp)] bg-cover bg-center bg-no-repeat overflow-hidden rounded-b-[2rem] min-h-[700px] md:min-h-[750px] ">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-transparent" />

          <div className="absolute sm:bottom-[-46px] bottom-[-30.5px] left-1/2 transform -translate-x-1/2 z-10">
            <motion.div variants={fadeIn}>
              <div className="bg-[url(/merkat.png)] bg-cover bg-center bg-no-repeat w-[200px] h-[190px] sm:w-[304px] sm:h-[288px]" />
            </motion.div>
          </div>

          <motion.div>
            <div className="relative h-full flex flex-col">
              <div className="mx-auto px-4 flex-grow flex flex-col justify-start items-center pt-[50px]">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h1
                    variants={fadeIn}
                    className="font-medium text-4xl md:text-5xl lg:text-[72px] text-center text-white mb-6 font-geist-alt"
                  >
                    <p className="text-[#868783]">No paywall. No lock-in.</p>
                    <p>Get SOC-2 in a week.</p>
                  </motion.h1>

                  <motion.p
                    variants={fadeIn}
                    className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4 mb-20 md:mb-24"
                  >
                    Don{"'"}t spend weeks negotiating a contract and wasting
                    time. Probo is open-source and built for startups — so you
                    can start for free, now.
                  </motion.p>

                  <motion.div
                    variants={fadeIn}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center px-4"
                  >
                    <RepositoryButton
                      org="getprobo"
                      repo="probo"
                      defaultStars={292}
                    />
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://hexacc.typeform.com/to/HEabWsbN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#CEF521] text-black px-8 py-3 rounded-full font-medium hover:bg-[#B9DB21] transition-colors w-full md:w-auto text-center"
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

      <section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-lime text-sm font-medium mb-4">BENEFITS</h2>
          <div className="text-4xl md:text-5xl font-geist-alt space-y-2">
            <p>Everything you need.</p>
            <p>Nothing you don{"'"}t.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-12 lg:px-0">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <div className="bg-[#1A1A1A] w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                <Clock className="text-lime w-6 h-6" />
              </div>
              <h3 className="text-xl font-geist-alt">
                Get SOC2 in just 20 hours
              </h3>
              <p className="text-gray-400">
                Cut the noise and focus only on what matters. Probo streamlines
                compliance so you can move fast.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="bg-[#1A1A1A] w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                <SmilePlus className="text-lime w-6 h-6" />
              </div>
              <h3 className="text-xl font-geist-alt">
                Be guided at every step
              </h3>
              <p className="text-gray-400">
                Remove the guesswork with expert support. Our auditors help you
                navigate compliance so you never feel lost.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-lime/10 to-transparent rounded-2xl" />
            <Image
              src="/dashboard.png"
              alt="Probo dashboard"
              width={800}
              height={500}
              className="rounded-lg border-white/10 relative z-10"
              priority
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <div className="bg-[#1A1A1A] w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                <Award className="text-lime w-6 h-6" />
              </div>
              <h3 className="text-xl font-geist-alt">
                Take your data with you, anytime
              </h3>
              <p className="text-gray-400">
                Own your compliance, not the other way around. Leave whenever
                you want—no vendor lock-in, no restrictions.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="bg-[#1A1A1A] w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                <DollarSign className="text-lime w-6 h-6" />
              </div>
              <h3 className="text-xl font-geist-alt">
                Pay only for what you need
              </h3>
              <p className="text-gray-400">
                Use Probo for free. Choose an audit, hosting, or support only if
                you need it—no hidden fees, no forced costs.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[5rem]">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://hexacc.typeform.com/to/HEabWsbN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CEF521] text-black px-8 py-3 rounded-full font-medium hover:bg-[#B9DB21] transition-colors w-full md:w-auto text-center"
          >
            Join the waitlist
          </motion.a>
        </div>
      </section>

      <div className="w-full h-[0.5px] bg-[#52525B]" />

      <section className="relative py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Card.png"
            alt="Background pattern"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-lime text-sm font-medium mb-4">
              SUPPORTED FRAMEWORKS
            </h2>
            <h3 className="text-4xl md:text-5xl font-geist-alt">
              Certifications your clients trust
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#18181b] border border-[#52525B]/50 rounded-lg p-8 space-y-4">
              <h4 className="text-2xl font-geist-alt">SOC 2</h4>
              <p className="text-gray-400">
                Prove to clients you meet the highest standards of data security
                and privacy.
              </p>
              <a
                href="https://hexacc.typeform.com/to/HEabWsbN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime flex items-center hover:opacity-80"
              >
                Book a demo →
              </a>
            </div>

            <div className="border border-[#52525B]/50 rounded-lg p-8 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-2xl font-geist-alt">ISO 27001</h4>
                <span className="text-sm bg-[#18181B] px-4 py-1 rounded-full">
                  soon
                </span>
              </div>
              <p className="text-gray-400">
                Meet the global standard for information security management.
              </p>
              <a
                href="#"
                className="text-zinc-600 flex items-center pointer-events-none"
              >
                Book a demo →
              </a>
            </div>

            <div className="border border-[#52525B]/50 rounded-lg p-8 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-2xl font-geist-alt">GDPR</h4>
                <span className="text-sm bg-[#18181B] px-4 py-1 rounded-full">
                  soon
                </span>
              </div>
              <p className="text-gray-400">
                Align with EU regulations to protect personal data and privacy.
              </p>
              <a
                href="#"
                className="text-zinc-600 flex items-center pointer-events-none"
              >
                Book a demo →
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-[5rem]">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://hexacc.typeform.com/to/HEabWsbN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CEF521] text-black px-8 py-3 rounded-full font-medium hover:bg-[#B9DB21] transition-colors w-full md:w-auto text-center"
            >
              Don{"'"}t see yours? Let us know
            </motion.a>
          </div>
        </div>
      </section>

      <div className="w-full h-[0.5px] bg-[#52525B] mb-14" />

      <section>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />
          <div className="bg-[url(/bg-small.webp)] bg-cover bg-center bg-no-repeat overflow-hidden rounded-b-[2rem]">
            <div className="relative min-h-[400px] flex flex-col items-center sm:items-start text-center sm:text-left justify-center p-24">
              <h1 className="text-5xl font-geist-alt max-w-3xl mb-12">
                Compliance, made simple.
              </h1>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://hexacc.typeform.com/to/HEabWsbN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-lime text-black font-medium rounded-full hover:opacity-90 transition-opacity w-fit"
              >
                Join the waitlist
              </motion.a>
            </div>

            <div className="absolute bottom-0 right-0 bg-[url(/paw.png)] bg-cover bg-center bg-no-repeat w-[200px] hidden sm:block min-h-[200px] lg:w-[350px] lg:min-h-[350px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
