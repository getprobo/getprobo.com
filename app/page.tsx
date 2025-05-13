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
    <div className="bg-white rounded-2xl w-full h-full p-5">
      <h3 className="uppercase text-sm font-medium text-dark-600 pb-4">
        Your Customized checliskt
      </h3>
      <div className="flex flex-col gap-4">
        {customizedChecklist.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center gap-2">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  item.checked ? "bg-dark-900" : "border border-dark-400"
                }`}
              >
                {item.checked && <Check className="w-3 h-3 text-white" />}
              </div>
              <p
                className={`text-dark-600 text-sm ${
                  item.checked ? "line-through decoration-dark-600" : ""
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
    <div className="relative w-full h-full bg-[#E4E2DD] rounded-2xl flex items-center justify-center">
      {/* Concentric circles */}
      <div className="absolute w-[85%] h-[85%] rounded-full border border-[#6A7270] opacity-40"></div>
      <div className="absolute w-[70%] h-[70%] rounded-full border border-[#6A7270] opacity-30"></div>
      <div className="absolute w-[55%] h-[55%] rounded-full border border-[#6A7270] opacity-20"></div>
      <div className="absolute w-[40%] h-[40%] rounded-full border border-[#6A7270] opacity-10"></div>

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
        <div className="bg-white py-2 px-4 rounded-full shadow-md flex items-center gap-2">
          <Store className="w-5 h-5" />
          <span className="text-dark-900 text-sm">Vendor assessment</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="w-3 h-3 rounded-full bg-[#E6FF03] mx-auto mt-3"></div>
      </div>

      {/* Policies - Top Right */}
      <div className="absolute" style={{ top: "30%", right: "10%" }}>
        <div className="bg-white py-2 px-4 rounded-full shadow-md flex items-center gap-2">
          <FileText className="w-5 h-5" />
          <span className="text-dark-900 text-sm">Policies</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="w-3 h-3 rounded-full bg-[#E6FF03] mx-auto mt-3"></div>
      </div>

      {/* Auditor relations - Bottom Right */}
      <div className="absolute" style={{ bottom: "30%", right: "8%" }}>
        <div className="bg-white py-2 px-4 rounded-full shadow-md flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span className="text-dark-900 text-sm">Auditor relations</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="w-3 h-3 rounded-full bg-[#E6FF03] mx-auto mt-3"></div>
      </div>

      {/* Risk assessment - Bottom */}
      <div
        className="absolute"
        style={{ bottom: "8%", left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="bg-white py-2 px-4 rounded-full shadow-md flex items-center gap-2">
          <Flame className="w-5 h-5" />
          <span className="text-dark-900 text-sm">Risk assessment</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="w-3 h-3 rounded-full bg-[#E6FF03] mx-auto mt-3"></div>
      </div>

      {/* Processes - Left */}
      <div
        className="absolute"
        style={{ top: "50%", left: "8%", transform: "translateY(-50%)" }}
      >
        <div className="bg-white py-2 px-4 rounded-full shadow-md flex items-center gap-2">
          <Settings className="w-5 h-5" />
          <span className="text-dark-900 text-sm">Processes</span>
        </div>
        {/* Yellow dot below bubble */}
        <div className="w-3 h-3 rounded-full bg-[#E6FF03] mx-auto mt-3"></div>
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
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <Image
        src="/logo-github-invertocat.svg"
        alt="github"
        width={150}
        height={150}
        style={{ width: "150px", height: "150px" }}
      />
      <div className="flex bg-black rounded-full px-3 py-2 text-white not-italic font-normal text-sm">
        <div className="flex items-center gap-2">
          Repository{" "}
          <div className="flex items-center gap-1 text-black bg-yellow rounded-full px-2 py-1">
            {starsCount} <Star className="w-4 h-4" />
          </div>{" "}
        </div>
      </div>
      <div className="flex items-center gap-2 bg-white py-4 pr-6 pl-4 rounded-2xl shadow-xl w-[340px]">
        <Database className="w-4 h-4" />
        <p className="text-black font-medium text-base not-italic">
          Export your data
        </p>
        <ChevronRight className="w-4 h-4 ml-auto" />
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
      <div className="p-10 border-dark-600 border rounded-2xl">
        <Image
          src={icon}
          alt={title}
          width={56}
          height={56}
          style={{ width: "56px", height: "56px" }}
          className="mb-20"
        />
        <h2 className="text-yellow font-medium text-xl mb-6">{title}</h2>
        <p className="text-dark-600 font-light text-lg">{description}</p>
      </div>
    </div>
  );
}

function BackedBy() {
  return (
    <div className="border border-solid border-[rgba(16,30,28,0.20)] rounded-full flex py-3 px-6 w-fit text-dark-600 font-medium">
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
    // TODO: move to grid
    <div>
      <div
        className={`bg-dark-300 rounded-2xl w-[420px] h-[420px] mb-6 ${className}`}
      >
        {children}
      </div>
      <div className="w-[420px] pr-6">
        <h3 className="text-dark-900 font-medium not-italic text-xl">
          {title}
        </h3>
        <p className="text-dark-600 not-italic text-lg font-normal">
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
    <div className="bg-dark-100 py-14 px-10 rounded-2xl flex flex-col items-center gap-8">
      <Image
        src={icon}
        alt="icon-4"
        width={120}
        height={120}
        style={{ width: "auto", height: "auto" }}
      />
      <p className="text-center text-base text-dark-600">{description}</p>
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
      <section className="my-4 py-32 flex justify-center flex-col items-center">
        <BackedBy />
        <div className="flex flex-col gap-2 text-6xl font-normal text-center mt-10 mb-10">
          <p className="text-dark-900 md:text-5xl sm:text-4xl">
            Compliance for Startups
          </p>
          <div className="text-dark-600 md:text-5xl sm:text-4xl flex justify-center items-center">
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
            className="bg-dark-300 px-6 py-3 font-normal text-dark-900 text-base rounded-full flex gap-2 items-center"
            href="https://github.com/getprobo/probo"
          >
            Open-source
          </Link>
          <Link
            className="bg-dark-900 px-6 py-3 font-normal text-yellow text-base rounded-full flex gap-2 items-center"
            href="https://hexacc.typeform.com/getstarted"
          >
            Get Started <ArrowRight />
          </Link>
        </div>
      </section>
      <Section className="bg-dark-50">
        <h2 className="text-dark-900 font-normal text-5xl sm:text-4xl text-center not-italic">
          What sets Probo apart
        </h2>
        <div className="grid grid-cols-3 xl:grid-cols-1 xl:place-items-center gap-4 mt-16 mb-16">
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
            className="bg-dark-900 px-6 py-3 font-normal text-yellow text-base rounded-full gap-2 items-center w-fit"
            href="https://hexacc.typeform.com/getstarted"
          >
            Get Started <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </Section>
      <Section className="bg-dark-900">
        <div className="grid grid-cols-[1fr_auto_1fr] lg:grid-cols-1 gap-28 relative">
          <div
            className="sticky lg:static top-10"
            style={{ height: "fit-content" }}
          >
            <h1 className="text-dark-50 font-light not-italic text-5xl mb-6">
              Keep working on your company. We do the compliance for you.
            </h1>
            <p className="text-dark-600 font-light not-italic text-lg mb-8">
              Compliance shouldn{"'"}t feel like a burden you carry alone.
              <br /> Audits, regulations, and endless paperwork steal focus from
              your actual business. <br /> <br /> Think Probo as your dedicated
              compliance team. We handle the maze efficiently so you get back
              your focus.
            </p>
            <Link
              href="https://hexacc.typeform.com/getstarted"
              className="bg-yellow px-6 py-3 font-normal text-dark-900 text-base rounded-full flex gap-2 items-center w-fit"
            >
              Start <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="justify-center lg:invisible visible">
            <div className="relative flex flex-col items-center h-full">
              <div
                className="w-0.5 h-full bg-dark-300"
                style={{
                  background: `linear-gradient(to bottom, #a3e635 ${scrollProgress}%, #555 ${scrollProgress}%)`,
                }}
              ></div>
              <div className="absolute top-0 w-4 h-4 bg-dark-900 border-2 border-lime-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              </div>
              <div className="absolute top-1/3 w-4 h-4 bg-dark-900 border-2 border-lime-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              </div>
              <div className="absolute top-2/3 w-4 h-4 bg-dark-900 border-2 border-lime-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              </div>
              <div className="absolute bottom-0 w-4 h-4 bg-dark-900 border-2 border-lime-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
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
        <h2 className="text-dark-900 font-normal text-5xl text-center not-italic mb-6">
          Where Probo helps
        </h2>
        <p className="not-italic font-light text-center text-lg text-dark-600 mb-16">
          We designed Probo to help startups and small businesses where needed
        </p>

        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
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
