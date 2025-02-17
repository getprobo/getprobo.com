import Image from "next/image";
import { Clock, Shield, User2, SmileIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { ContributeButton } from "./components/ContributeButton";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Clock,
    title: "Save time with a solution tailored to you",
    description:
      "Cut through the noise. Probo identifies and helps you act only on the security measures your business actually needs, saving you time and resources.",
  },
  {
    icon: Shield,
    title: "Own and protect your sensitive data",
    description:
      "Your data belongs to you. Probo ensures you maintain full ownership and control, with easy export options and no hidden restrictions.",
  },
  {
    icon: User2,
    title: "Understand every step with full transparency",
    description:
      "Probo's open-source setup gives you complete visibility into the tools and processes, so you can stay informed at every step.",
  },
  {
    icon: SmileIcon,
    title: "Navigate with expert guidance",
    description:
      "Human support alongside smart tools means you'll have a trusted partner guiding you every step of the way, taking the confusion out of compliance.",
  },
];

const clients = [
  {
    name: "Kor",
    logo: "/clients/kor.svg",
  },
  {
    name: "Marble",
    logo: "/clients/marble.svg",
  },
  {
    name: "Axolo",
    logo: "/clients/axolo.png",
  },
  {
    name: "Shipfox",
    logo: "/clients/shipfox.png",
  },
  {
    name: "Deja Blue",
    logo: "/clients/dejablue.png",
  },
];

export default function HomePage() {
  return (
    <div>
      <div className="relative">
        <div className="absolute sm:bottom-[-46px] bottom-[-30px] left-1/2 transform -translate-x-1/2 z-10">
          <Image
            src="/merkat.png"
            alt="Probo mascot"
            width={304}
            height={288}
            className="w-[200px] sm:w-[304px]"
            priority
          />
        </div>

        <div className="relative overflow-hidden rounded-b-[2rem] min-h-[650px]">
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
                <h1
                  className={cn(
                    "font-medium text-4xl sm:text-5xl md:text-[72px] leading-tight sm:leading-[79.2px] text-center text-white mb-6",
                    "font-geist-alt tracking-[0%] leading-trim-cap",
                  )}
                >
                  Compliance,
                  <br />
                  minus the clutter.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 px-4">
                  Probo is an open-source platform that helps startups navigate
                  compliance with confidence.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-4">
                  <ContributeButton />
                  <a
                    href="https://hexacc.typeform.com/to/HEabWsbN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#D1FF4C] text-black px-8 py-3 rounded-full font-medium hover:bg-[#bfff1a] transition-colors w-full md:w-auto text-center"
                  >
                    Join the waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-black px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D1FF4C]">
              Trusted by innovative companies
            </h2>
            <p className="mt-2 text-lg text-gray-400">
              Join hundreds of companies using Probo to streamline their
              compliance
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center col-span-1 px-8"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={40}
                  className="max-h-12 w-auto opacity-50 hover:opacity-100 transition-opacity invert brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-8 text-white md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D1FF4C]">
              About Probo
            </h2>
            <h3 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Medium length section heading
            </h3>
          </div>

          <div className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="mx-auto text-center max-w-[420px]">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[#D1FF4C]/10 text-[#D1FF4C]">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 text-lg font-semibold text-center">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-400 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="rounded-full bg-[#D1FF4C] text-base font-semibold text-black hover:bg-[#D1FF4C]/90"
            >
              Book a demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
