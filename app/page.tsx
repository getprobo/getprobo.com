"use client";
import {
  ArrowRight,
  ArrowRightIcon,
  Check,
  ChevronRight,
  Database,
  FileText,
  Flame,
  Settings,
  Star,
  Store,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { useEffect, useState } from "react";

function TailoredNotTemplated() {
  const customizedChecklist = [
    {
      checked: true,
      description: "List all your computers",
      person: "/people/person-1.png",
    },
    {
      checked: true,
      description: "Grant access only when necessary",
      person: "/people/person-2.png",
    },
    {
      checked: false,
      description: "Enforce 2FA on all your tools",
      person: "/people/person-3.png",
    },
    {
      checked: false,
      description: "Encrypt data at rest",
      person: "/people/person-4.png",
    },
    {
      checked: false,
      description: "Test before pushing to production",
      person: "/people/person-5.png",
    },
  ];

  return (
    <div className="h-full w-full rounded-2xl bg-white p-5 sm:px-2">
      <h3 className="text-dark-600 pb-4 text-sm font-medium uppercase">
        Your customized checklist
      </h3>
      <div className="flex flex-col gap-4">
        {customizedChecklist.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center gap-2">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full ${
                  item.checked ? "bg-dark-900" : "border-dark-400 border"
                }`}
              >
                {item.checked && <Check className="h-3 w-3 text-white" />}
              </div>
              <p
                className={`text-dark-600 text-sm ${
                  item.checked ? "decoration-dark-600 line-through" : ""
                }`}
              >
                {item.description}
              </p>
            </div>
            <Image
              src={item.person}
              alt="icon-1"
              width={24}
              height={24}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function HandsOff() {
  return (
    <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-[#E4E2DD]">
      {/* Concentric circles */}
      <div className="absolute h-[85%] w-[85%] rounded-full border border-[#6A7270] opacity-40"></div>
      <div className="absolute h-[70%] w-[70%] rounded-full border border-[#6A7270] opacity-30"></div>
      <div className="absolute h-[55%] w-[55%] rounded-full border border-[#6A7270] opacity-20"></div>
      <div className="absolute h-[40%] w-[40%] rounded-full border border-[#6A7270] opacity-10"></div>

      {/* Center Probo logo */}
      <div className="absolute z-10">
        <Image
          src="/probo-logo.svg"
          alt="Probo"
          width={56}
          height={56}
          className="rounded-2xl"
        />
      </div>

      {/* Vendor assessment - Top */}
      <div
        className="absolute"
        style={{ top: "8%", left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
          <Store className="h-5 w-5" />
          <span className="text-dark-900 text-sm">Vendor assessment</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-[#E6FF03]"></div>
      </div>

      {/* Policies - Top Right */}
      <div className="absolute" style={{ top: "30%", right: "10%" }}>
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
          <FileText className="h-5 w-5" />
          <span className="text-dark-900 text-sm">Policies</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-[#E6FF03]"></div>
      </div>

      {/* Auditor relations - Bottom Right */}
      <div className="absolute" style={{ bottom: "30%", right: "8%" }}>
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
          <Users className="h-5 w-5" />
          <span className="text-dark-900 text-sm">Auditor relations</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-[#E6FF03]"></div>
      </div>

      {/* Risk assessment - Bottom */}
      <div
        className="absolute"
        style={{ bottom: "8%", left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
          <Flame className="h-5 w-5" />
          <span className="text-dark-900 text-sm">Risk assessment</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-[#E6FF03]"></div>
      </div>

      {/* Processes - Left */}
      <div
        className="absolute"
        style={{ top: "50%", left: "8%", transform: "translateY(-50%)" }}
      >
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
          <Settings className="h-5 w-5" />
          <span className="text-dark-900 text-sm">Processes</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-[#E6FF03]"></div>
      </div>
    </div>
  );
}

function Transparency() {
  const [starsCount, setStarsCount] = useState(360);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/getprobo/probo",
        );
        const data = await response.json();
        setStarsCount(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching stars:", error);
      }
    }

    fetchStars();
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Link href="https://github.com/getprobo/probo">
        <Image
          src="/logo-github-invertocat.svg"
          alt="github"
          width={150}
          height={150}
          style={{ width: "150px", height: "150px" }}
        />
      </Link>
      <Link href="https://github.com/getprobo/probo">
        <div className="flex rounded-full bg-black px-3 py-2 text-sm font-normal text-white not-italic">
          <div className="flex items-center gap-2">
            Repository{" "}
            <div className="bg-yellow flex items-center gap-1 rounded-full px-2 py-1 text-black">
              {starsCount} <Star className="h-4 w-4" />
            </div>{" "}
          </div>
        </div>
      </Link>
      <div className="flex w-[340px] items-center gap-2 rounded-2xl bg-white py-4 pr-6 pl-4 shadow-xl">
        <Database className="h-4 w-4" />
        <p className="text-base font-medium text-black not-italic">
          Export your data
        </p>
        <ChevronRight className="ml-auto h-4 w-4" />
      </div>
    </div>
  );
}

function StepCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div>
      <div className="border-dark-600 rounded-2xl border p-10">
        <Image
          src={icon}
          alt={title}
          width={56}
          height={56}
          style={{ width: "56px", height: "56px" }}
          className="mb-20"
        />
        <h2 className="text-yellow mb-6 text-xl font-medium">{title}</h2>
        <p className="text-dark-600 text-lg font-light">{description}</p>
      </div>
    </div>
  );
}

function BackedBy() {
  return (
    <div className="text-dark-600 flex w-fit rounded-full border border-solid border-[rgba(16,30,28,0.20)] px-6 py-3 font-medium">
      Backed by{" "}
      <Image
        src="/yc-logo-with-name.svg"
        alt="ycombinator logo"
        width={116}
        height={24}
        style={{ width: "116px", height: "24px" }}
        className="ml-2"
      />
    </div>
  );
}

function FeatureCard({
  title,
  description,
  children,
  className = "",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <div
        className={`bg-dark-300 mb-6 h-[420px] max-w-[420px] rounded-2xl ${className}`}
      >
        {children}
      </div>
      <div className="max-w-[420px] pr-6">
        <h3 className="text-dark-900 text-xl font-medium not-italic">
          {title}
        </h3>
        <p className="text-dark-600 text-lg font-normal not-italic">
          {description}
        </p>
      </div>
    </div>
  );
}

function BadgeCard({
  icon,
  description,
}: {
  icon: string;
  description: string;
}) {
  return (
    <div className="bg-dark-100 flex flex-col items-center gap-8 rounded-2xl px-10 py-14">
      <Image
        src={icon}
        alt="icon-4"
        width={120}
        height={120}
        style={{ width: "auto", height: "auto" }}
      />
      <p className="text-dark-600 text-center text-base">{description}</p>
    </div>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(100, (scrollTop / scrollHeight) * 120);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section className="my-4 flex flex-col items-center justify-center py-32">
        <BackedBy />
        <div className="mt-10 mb-10 flex flex-col gap-2 text-center text-6xl font-normal">
          <p className="text-dark-900 sm:text-4xl md:text-5xl">
            Compliance for Startups
          </p>
          <div className="text-dark-600 flex items-center justify-center sm:text-4xl md:text-5xl">
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
            <span className="ml-3">in one week</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            className="bg-dark-300 text-dark-900 flex items-center gap-2 rounded-full px-6 py-3 text-base font-normal"
            href="https://github.com/getprobo/probo"
          >
            Open-source
          </Link>
          <Link
            className="bg-dark-900 text-yellow flex items-center gap-2 rounded-full px-6 py-3 text-base font-normal"
            href="https://hexacc.typeform.com/getstarted"
          >
            Get Started <ArrowRight />
          </Link>
        </div>
      </section>
      <Section className="bg-dark-50 sm:px-2">
        <h2 className="text-dark-900 text-center text-5xl font-normal not-italic sm:text-4xl">
          What sets Probo apart
        </h2>
        <div className="mt-16 mb-16 grid grid-cols-3 gap-4 xl:grid-cols-1 xl:place-items-center">
          <FeatureCard
            title="Tailored, not templated"
            description="No non-sense or fluff. We fit compliance to your business, not the other way."
            className="px-10 py-[80px]"
          >
            <TailoredNotTemplated />
          </FeatureCard>
          <FeatureCard
            title="Hands-off journey"
            description="Compliance is done by us, so you stay focused on your business"
          >
            <HandsOff />
          </FeatureCard>
          <FeatureCard
            title="Transparency"
            description="No vendor lock-in and no paywall. We are open-source."
          >
            <Transparency />
          </FeatureCard>
        </div>
        <div className="flex justify-center">
          <Link
            className="bg-dark-900 text-yellow flex w-fit items-center gap-2 rounded-full px-6 py-3 text-base font-normal"
            href="https://hexacc.typeform.com/getstarted"
          >
            Get Started <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Section>
      <Section className="bg-dark-900">
        <div className="relative grid grid-cols-[1fr_auto_1fr] gap-28 lg:grid-cols-1">
          <div
            className="sticky top-10 lg:static"
            style={{ height: "fit-content" }}
          >
            <h1 className="text-dark-50 mb-6 text-5xl font-light not-italic">
              Keep working on your company. We do the compliance for you.
            </h1>
            <p className="text-dark-600 mb-8 text-lg font-light not-italic">
              Compliance shouldn{"'"}t feel like a burden you carry alone.
              <br /> Audits, regulations, and endless paperwork steal focus from
              your actual business. <br /> <br /> Think Probo as your dedicated
              compliance team. We handle the maze efficiently so you get back
              your focus.
            </p>
            <Link
              href="https://hexacc.typeform.com/getstarted"
              className="bg-yellow text-dark-900 flex w-fit items-center gap-2 rounded-full px-6 py-3 text-base font-normal"
            >
              Start <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="visible justify-center lg:invisible">
            <div className="relative flex h-full flex-col items-center">
              <div
                className="bg-dark-300 h-full w-0.5"
                style={{
                  background: `linear-gradient(to bottom, #a3e635 ${scrollProgress}%, #555 ${scrollProgress}%)`,
                }}
              ></div>
              <div className="bg-dark-900 absolute top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-lime-400">
                <div className="h-2 w-2 rounded-full bg-lime-400"></div>
              </div>
              <div className="bg-dark-900 absolute top-1/3 flex h-4 w-4 items-center justify-center rounded-full border-2 border-lime-400">
                <div className="h-2 w-2 rounded-full bg-lime-400"></div>
              </div>
              <div className="bg-dark-900 absolute top-2/3 flex h-4 w-4 items-center justify-center rounded-full border-2 border-lime-400">
                <div className="h-2 w-2 rounded-full bg-lime-400"></div>
              </div>
              <div className="bg-dark-900 absolute bottom-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-lime-400">
                <div className="h-2 w-2 rounded-full bg-lime-400"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <StepCard
              title="1. Talk to us"
              description="Tell us exactly what you do - no bad or good answer."
              icon="/icons/talk-to-us.svg"
            />
            <StepCard
              title="2. We do it for you"
              description="We create the right documents (policies, inventories, risk analysis, etc..) to match your ways of working. You only handle what absolutely requires your input."
              icon="/icons/we-do-it-for-you.svg"
            />
            <StepCard
              title="3. Audit"
              description="We go find the adequate independent auditor for your company and manage the audit on your behalf."
              icon="/icons/audit.svg"
            />
            <StepCard
              title="4. We run it"
              description="We proactively maintain your compliance in the background and help you improve over time."
              icon="/icons/we-run-it.svg"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-dark-50">
        <h2 className="text-dark-900 mb-6 text-center text-5xl font-normal not-italic">
          Where Probo helps
        </h2>
        <p className="text-dark-600 mb-16 text-center text-lg font-light not-italic">
          We designed Probo to help startups and small businesses where needed
        </p>

        <div className="grid grid-cols-3 gap-6 md:grid-cols-1 lg:grid-cols-2">
          <BadgeCard
            icon="/badges/soc2.svg"
            description="Unlocks enterprise deals and accelerates sales cycles."
          />
          <BadgeCard
            icon="/badges/GDPR.svg"
            description="Opens EU markets and boosts trust with privacy‑minded buyers."
          />
          <BadgeCard
            icon="/badges/HIPAA.svg"
            description="Wins U.S. healthcare deals and clears regulatory barriers."
          />
          <BadgeCard
            icon="/badges/ISO-27001.svg"
            description="Earns global enterprise trust."
          />
          <BadgeCard
            icon="/badges/ISO-42001.svg"
            description="Proves responsible AI and smooths adoption in regulated sectors."
          />
          <BadgeCard
            icon="/badges/ISO-27701.svg"
            description="Showcases privacy governance and attracts data‑sensitive customers."
          />
        </div>
      </Section>
    </div>
  );
}
