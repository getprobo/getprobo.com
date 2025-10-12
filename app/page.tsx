"use client";
import {
  ArrowRight,
  ArrowRightIcon,
  Check,
  FileText,
  Flame,
  Settings,
  Star,
  Store,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { useEffect, useState } from "react";

const steps = [
  {
    icon: "/icons/talk-to-us.svg",
    title: "1. Talk to us",
    description: "Tell us exactly what you do - no bad or good answer.",
  },
  {
    icon: "/icons/we-do-it-for-you.svg",
    title: "2. We do it for you",
    description:
      "We create the right documents (policies, inventories, risk analysis, etc..) to match your ways of working. You only handle what absolutely requires your input.",
  },
  {
    icon: "/icons/audit.svg",
    title: "3. Audit",
    description:
      "We go find the adequate independent auditor for your company and manage the audit on your behalf.",
  },
  {
    icon: "/icons/we-run-it.svg",
    title: "4. We run it",
    description:
      "We proactively maintain your compliance in the background and help you improve over time.",
  },
];

const certifications = [
  {
    icon: "/badges/soc2.svg",
    description: "Unlocks enterprise deals and accelerates sales cycles.",
  },
  {
    icon: "/badges/GDPR.svg",
    description:
      "Opens EU markets and boosts trust with privacy-minded buyers.",
  },
  {
    icon: "/badges/HIPAA.svg",
    description: "Wins U.S. healthcare deals and clears regulatory barriers.",
  },
  {
    icon: "/badges/ISO-27001.svg",
    description: "Earns global enterprise trust.",
  },
  {
    icon: "/badges/ISO-42001.svg",
    description:
      "Proves responsible AI and smooths adoption in regulated sectors.",
  },
  {
    icon: "/badges/ISO-27701.svg",
    description:
      "Showcases privacy governance and attracts data-sensitive customers.",
  },
];

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress = Math.min(
          100,
          Math.max(0, (scrollTop / scrollHeight) * 120),
        );
        setScrollProgress(progress);
      });
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const [starsCount, setStarsCount] = useState(400);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/getprobo/probo",
        );
        const data = await response.json();
        setStarsCount(data.stargazers_count);
      } catch (error) {
        console.error("cannot fetch github stars:", error);
      }
    }

    fetchStars();
  }, []);

  const features = [
    {
      title: "Tailored, not templated",
      description:
        "No non-sense or fluff. We fit compliance to your business, not the other way.",
      illustration: (
        <div className="bg-dark-300 rounded-xl px-7.5 py-16 md:px-10 md:py-20">
          <div className="bg-dark-50 flex flex-col gap-3 rounded-xl p-4 md:min-w-[320px] md:gap-4 md:p-5">
            <h3 className="text-dark-900 text-[9px] font-semibold uppercase md:text-xs">
              Your tailored checklist
            </h3>
            <div className="flex items-center gap-2">
              <div className="bg-dark-900 rounded-full p-0.5 text-white md:p-1">
                <Check className="h-2 w-2 md:h-3 md:w-3" />
              </div>
              <p className="text-dark-400 text-[11px] leading-[100%] font-normal whitespace-nowrap line-through md:text-sm">
                List all your computers
              </p>
              <Image
                src="people/person-1.png"
                alt="icon-1"
                width={18}
                height={18}
                className="ml-auto h-4.5 w-4.5 md:h-6 md:w-6"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-dark-900 rounded-full p-0.5 text-white md:p-1">
                <Check className="h-2 w-2 md:h-3 md:w-3" />
              </div>
              <p className="text-dark-400 text-[11px] leading-[100%] font-normal whitespace-nowrap line-through md:text-sm">
                Grant acces only when necessary
              </p>
              <Image
                src="people/person-2.png"
                alt="icon-1"
                width={18}
                height={18}
                className="ml-auto h-4.5 w-4.5 md:h-6 md:w-6"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-dark-50 border-dark-300 h-3 w-3 rounded-full border md:h-5 md:w-5"></div>
              <p className="text-dark-900 text-[11px] leading-[100%] font-normal whitespace-nowrap md:text-sm">
                Enforce 2FA on all your tools
              </p>
              <Image
                src="people/person-3.png"
                alt="icon-1"
                width={18}
                height={18}
                className="ml-auto h-4.5 w-4.5 md:h-6 md:w-6"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-dark-50 border-dark-300 h-3 w-3 rounded-full border md:h-5 md:w-5"></div>
              <p className="text-dark-900 text-[11px] leading-[100%] font-normal whitespace-nowrap md:text-sm">
                Encrypt data at rest
              </p>
              <Image
                src="people/person-4.png"
                alt="icon-1"
                width={18}
                height={18}
                className="ml-auto h-4.5 w-4.5 md:h-6 md:w-6"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-dark-50 border-dark-300 h-3 w-3 rounded-full border md:h-5 md:w-5"></div>
              <p className="text-dark-900 text-[11px] leading-[100%] font-normal whitespace-nowrap md:text-sm">
                Test before pushing to production
              </p>
              <Image
                src="people/person-5.png"
                alt="icon-1"
                width={18}
                height={18}
                className="ml-auto h-4.5 w-4.5 md:h-6 md:w-6"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Hands-off journey",
      description:
        "Compliance is done by us, so you stay focused on your business",
      illustration: (
        <div className="bg-dark-300 relative flex h-full w-full items-center justify-center rounded-xl">
          <div className="absolute h-[85%] w-[85%] rounded-full border border-[#6A7270] opacity-10"></div>
          <div className="absolute h-[70%] w-[70%] rounded-full border border-[#6A7270] opacity-20"></div>
          <div className="absolute h-[55%] w-[55%] rounded-full border border-[#6A7270] opacity-30"></div>
          <div className="absolute h-[40%] w-[40%] rounded-full border border-[#6A7270] opacity-40"></div>

          <div className="absolute z-10">
            <Image
              src="/probo-logo.svg"
              alt="Probo"
              width={56}
              height={56}
              className="rounded-2xl"
            />
          </div>

          <div className="absolute top-[11%] left-[40%] md:top-[12%] md:left-[38%]">
            <div className="flex items-center gap-2 rounded-full bg-white p-2 whitespace-nowrap shadow-md md:px-4 md:py-2">
              <Store className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-dark-900 text-xs md:text-sm">
                Vendor assessment
              </span>
            </div>
            <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-yellow-400"></div>
          </div>

          <div className="absolute top-[40%] left-[68%] md:top-[38%] md:left-[62%]">
            <div className="flex items-center gap-2 rounded-full bg-white p-2 whitespace-nowrap shadow-md md:px-4 md:py-2">
              <FileText className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-dark-900 text-xs md:text-sm">Policies</span>
            </div>
            <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-yellow-400"></div>
          </div>

          <div className="absolute bottom-[12%] left-[52%] md:bottom-[12%] md:left-[42%]">
            <div className="flex items-center gap-2 rounded-full bg-white p-2 whitespace-nowrap shadow-md md:px-4 md:py-2">
              <Users className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-dark-900 text-xs md:text-sm">
                Auditor relations
              </span>
            </div>
            <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-yellow-400"></div>
          </div>

          <div className="absolute bottom-[20%] left-[2%] md:bottom-[28%] md:left-[5%]">
            <div className="flex items-center gap-2 rounded-full bg-white p-2 whitespace-nowrap shadow-md md:px-4 md:py-2">
              <Flame className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-dark-900 text-xs md:text-sm">
                Risk assessment
              </span>
            </div>
            <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-yellow-400"></div>
          </div>

          <div className="absolute bottom-[58%] left-[9%] md:bottom-[58%] md:left-[13%]">
            <div className="flex items-center gap-2 rounded-full bg-white p-2 whitespace-nowrap shadow-md md:px-4 md:py-2">
              <Settings className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-dark-900 text-xs md:text-sm">
                Processes
              </span>
            </div>
            <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-yellow-400"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Transparency",
      description: "No vendor lock-in and no paywall. We are open-source.",
      illustration: (
        <Link
          className="flex flex-col items-center gap-3"
          href="https://github.com/getprobo/probo"
        >
          <Image
            src="/logo-github-invertocat.svg"
            alt="github"
            width={115}
            height={115}
            className="h-28.5 w-28.5"
          />
          <p className="text-dark-50 bg-dark-900 flex w-fit items-center gap-[5px] rounded-full px-3 py-1.5 text-xs leading-[100%]">
            Repository{" "}
            <span className="text-dark-900 flex items-center gap-[5px] rounded-full bg-yellow-400 px-1.5 py-1.5 text-xs leading-[100%]">
              {starsCount}{" "}
              <Star className="text-dark-900 fill-dark-900 h-3 w-3" />
            </span>
          </p>
        </Link>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      <section className="grid grid-cols-1 place-items-center gap-10 px-5 py-10 md:py-20 lg:px-12 lg:py-30">
        <div className="flex max-w-fit items-center justify-center gap-2.5 rounded-full px-6 py-3 outline-1 outline-neutral-400">
          <p className="text-base leading-tight font-medium text-neutral-500">
            Backed by
          </p>
          <Image
            src="/yc-logo-with-name.svg"
            alt="ycombinator logo"
            width={116}
            height={24}
            className="h-6 w-29"
          />
        </div>
        <h1 className="gap-0.2 grid grid-cols-1 text-center text-[28px] leading-[200%] font-normal whitespace-nowrap md:text-[56px] md:leading-[120%] lg:text-[64px]">
          <span className="text-dark-900">Your compliance officer</span>
          <span className="text-dark-600">
            <TypewriterEffect
              words={[
                "SOC 2",
                "GDPR",
                "HIPAA",
                "ISO 27001",
                "ISO 42001",
                "ISO 27701",
              ]}
            />
            <span>under control</span>
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            className="bg-dark-300 text-dark-900 min-w-64 rounded-full px-6 py-5 text-center leading-[100%] font-semibold md:w-fit md:min-w-0"
            href="https://github.com/getprobo/probo"
          >
            Open-source
          </Link>
          <Link
            className="bg-dark-900 flex min-w-64 justify-center gap-2.5 rounded-full px-6 py-5 text-center leading-[100%] font-semibold text-yellow-400 md:w-fit md:min-w-0"
            href="https://hexacc.typeform.com/getstarted"
          >
            Get started <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-0 w-0 opacity-0 lg:pointer-events-auto lg:relative lg:h-auto lg:w-auto lg:opacity-100"
        ></div>
      </section>

      <section className="bg-dark-50 grid gap-16 rounded-3xl px-5 py-20 md:px-12">
        <h2 className="text-center text-3xl leading-9 font-normal text-zinc-900 md:text-5xl md:leading-[62.40px]">
          What sets Probo apart
        </h2>

        <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex max-w-80 flex-col gap-4 md:max-w-105"
            >
              <div className="bg-dark-300 flex h-80 items-center justify-center rounded-xl md:h-105">
                {feature.illustration}
              </div>
              <div className="grid grid-cols-1 gap-2">
                <h3 className="text-dark-900 text-xl leading-[100%] font-medium">
                  {feature.title}
                </h3>
                <p className="text-dark-600 leading-[150%] font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          className="bg-dark-900 mx-auto flex min-w-54 justify-center gap-2.5 rounded-full px-6 py-5 text-center leading-[100%] font-semibold text-yellow-400 md:w-fit md:min-w-0"
          href="https://hexacc.typeform.com/getstarted"
        >
          Get started <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </Link>
      </section>

      <section className="bg-dark-900 flex flex-col gap-20 rounded-3xl px-5 py-20 md:px-12 md:py-30 lg:flex-row">
        <div className="flex flex-col gap-8 lg:sticky lg:top-8 lg:self-start">
          <div className="grid gap-6">
            <h2 className="text-dark-50 text-3xl leading-9 font-normal md:text-5xl md:leading-[120%] lg:whitespace-nowrap">
              Keep working on your
              <br /> company. We do the <br /> compliance for you.
            </h2>
            <p className="text-dark-300 text-base leading-[150%] font-normal md:text-lg md:leading-relaxed">
              Compliance shouldn{"'"}t feel like a burden you carry alone.
              Audits, regulations, and <br /> endless paperwork steal focus from
              your actual business. <br />
              <br />
              Think Probo as your dedicated compliance team. We handle the maze
              efficiently <br /> so you get back your focus.
            </p>
          </div>
          <Link
            href="https://hexacc.typeform.com/getstarted"
            className="text-dark-900 mx-auto flex w-fit min-w-52 items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-5 text-base leading-[100%] font-medium md:mx-0 md:min-w-0"
          >
            Start today <ArrowRightIcon className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-16 md:flex-row">
          <div className="relative hidden flex-col items-center self-center md:flex">
            <div className="bg-dark-600 absolute h-full w-0.5"></div>

            <div
              className="absolute w-0.5 bg-yellow-400"
              style={{
                height: `${scrollProgress}%`,
                maxHeight: "100%",
                transition: "height 0.2s ease-out",
              }}
            ></div>

            <div
              className={`z-10 h-3 w-3 rounded-full border-2 ${scrollProgress >= 10 ? "border-yellow-400 bg-yellow-400" : "bg-dark-900 border-dark-600"}`}
            ></div>
            <div className="h-70 w-0.5"></div>
            <div
              className={`z-10 h-3 w-3 rounded-full border-2 ${scrollProgress >= 40 ? "border-yellow-400 bg-yellow-400" : "bg-dark-900 border-dark-600"}`}
            ></div>
            <div className="h-70 w-0.5"></div>
            <div
              className={`z-10 h-3 w-3 rounded-full border-2 ${scrollProgress >= 66 ? "border-yellow-400 bg-yellow-400" : "bg-dark-900 border-dark-600"}`}
            ></div>
            <div className="h-70 w-0.5"></div>
            <div
              className={`z-10 h-3 w-3 rounded-full border-2 ${scrollProgress >= 99 ? "border-yellow-400 bg-yellow-400" : "bg-dark-900 border-dark-600"}`}
            ></div>
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.title}>
                <Link
                  href="https://github.com/getprobo/probo"
                  className="border-dark-600 mx-auto flex w-80 flex-col gap-10 rounded-2xl border px-5 py-10 md:w-133 md:px-10"
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={56}
                    height={56}
                    className="h-14 w-14"
                  />
                  <div className="flex flex-col gap-6">
                    <h3 className="text-base leading-tight font-semibold text-yellow-400">
                      {step.title}
                    </h3>
                    <p className="text-dark-300 text-sm leading-[140%] font-normal">
                      {step.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-50 grid gap-16 rounded-3xl px-5 py-20 md:px-12">
        <div className="grid gap-6">
          <h2 className="text-dark-900 text-center text-3xl leading-9 font-normal md:text-5xl md:leading-[62.40px]">
            Where Probo helps
          </h2>
          <p className="text-center text-base leading-normal font-normal text-neutral-500 md:text-lg md:leading-relaxed">
            We designed Probo to help startups and small businesses where needed
          </p>
        </div>

        <div className="mx-auto grid max-w-fit grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <div
              key={certification.icon}
              className="bg-dark-100 grid max-w-80 justify-items-center gap-8 rounded-2xl px-5 py-14 md:max-w-85 md:px-10 lg:max-w-100"
            >
              <Image
                src={certification.icon}
                alt={certification.description}
                width={120}
                height={120}
                className="h-auto w-auto"
              />
              <p className="text-center text-base leading-snug font-normal text-neutral-500">
                {certification.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
