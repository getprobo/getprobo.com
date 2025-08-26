import Image from "next/image";
import type { Metadata } from "next";
import siteConfig from "@/app/metadata.config";

export const metadata: Metadata = {
  title: "About Probo - Open-Source Compliance Platform",
  description: "Learn about Probo's mission to transform compliance from a complex burden into an intuitive journey. Meet our team of ISO 27001 certified auditors.",
  openGraph: {
    title: "About Probo - Open-Source Compliance Platform",
    description: "Learn about Probo's mission to transform compliance from a complex burden into an intuitive journey. Meet our team of ISO 27001 certified auditors.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const teamMembers = [
  {
    name: "Antoine Bouchardy",
    role: "Co-founder & CEO",
    image: "/team/antoine.jpeg",
    bio: "ISO 27001 auditor with experience in compliance assessment and implementation. Passionate about making compliance accessible and straightforward.",
  },
  {
    name: "Bryan Frimin",
    role: "Co-founder & CTO",
    image: "/team/bryan.jpeg",
    bio: "ISO 27001 auditor with experience in compliance assessment and implementation. Passionate about making compliance accessible and straightforward.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="flex flex-col items-center gap-8 py-10 md:gap-14 md:py-20 lg:gap-16 lg:py-30">
        <h1 className="text-dark-900 text-3xl leading-[120%] md:text-[56px] lg:text-[64px]">
          Our mission
        </h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <p className="text-dark-900 border-dark-400 max-w-85.5 rounded-2xl border px-5 py-6 text-base leading-[150%] font-normal md:max-w-104.5 md:p-8 md:text-xl lg:max-w-197 lg:p-22 lg:text-[32px]">
            We{"'"}re transforming compliance from a complex burden into an
            intuitive journey. Our platform makes compliance straightforward and
            cost-effective, empowering businesses of all sizes to meet
            regulatory requirements with confidence.
          </p>
          <p className="bg-dark-900 max-w-85.5 rounded-2xl px-5 py-6 text-center text-xl leading-9 font-normal text-yellow-400 md:flex md:max-w-75 md:items-center md:justify-center md:py-12 md:text-[32px] lg:max-w-125 lg:p-12 lg:text-5xl lg:leading-[64px]">
            Let us guide you toward effortless compliance management.
          </p>
        </div>
      </section>

      <section className="bg-dark-50 flex flex-col items-center gap-10 rounded-3xl py-10 md:gap-16 md:py-20 lg:py-30">
        <h1 className="text-dark-900 text-3xl leading-[120%] md:text-[32px] md:leading-[130%] lg:text-5xl">
          Meet the team
        </h1>
        <div className="flex flex-col gap-10 lg:flex-row">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-dark-300 flex max-w-84 flex-col gap-2 rounded-3xl p-8 md:max-w-184 lg:max-w-148"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="h-25 w-25 rounded-full"
                width={100}
                height={100}
              />
              <h3 className="text-dark-900 text-2xl leading-[150%] font-semibold">
                {member.name}
              </h3>
              <h4 className="text-dark-900 text-xl leading-[150%] font-medium">
                {member.role}
              </h4>
              <p className="text-dark-900 text-xl leading-[150%] font-normal">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
