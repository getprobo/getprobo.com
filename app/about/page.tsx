import Image from "next/image";
import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <section className="mb-20">
          <h1 className="text-4xl font-light font-geist-alt text-white mb-6">
            Our Mission
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            We're transforming compliance from a complex burden into an
            intuitive journey. Our platform makes compliance straightforward and
            cost-effective, empowering businesses of all sizes to meet
            regulatory requirements with confidence.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            Let us guide you toward effortless compliance management.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light font-geist-alt text-white mb-8">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1A1A1A] rounded-lg p-6">
              <div className="mb-4">
                <Image
                  src="/team/antoine.jpeg"
                  alt="Antoine"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Antoine Bouchardy
              </h3>
              <p className="text-[#D1FF4C] mb-2">Co-founder & CEO</p>
              <p className="text-gray-300">
                ISO 27001 auditor with experience in compliance assessment and
                implementation. Passionate about making compliance accessible
                and straightforward.
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-6">
              <div className="mb-4">
                <Image
                  src="/team/bryan.jpeg"
                  alt="Bryan"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Bryan Frimin
              </h3>
              <p className="text-[#D1FF4C] mb-2">Co-founder & CTO</p>
              <p className="text-gray-300">
                YC alumnus and engineer who managed SOC2/ISO27001 compliance at
                his previous startup. Experienced in building scalable solutions
                for complex problems.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light font-geist-alt text-white mb-6">
            Our Story
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Founded in Paris, Probo was born from frustration with the status
            quo. Tired of expensive compliance tools with opaque pricing and
            basic templates hidden behind sales calls, we built the open-source
            solution we wished existed.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-light font-geist-alt text-white mb-6">
            Open Source First
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            We believe in transparency and community-driven development. By
            making Probo open-source, we're ensuring that quality compliance
            tools are accessible to everyone, not just those who can afford
            expensive enterprise solutions.
          </p>
        </section>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Us | Probo",
  description:
    "Meet the team behind Probo, the open-source compliance platform transforming how startups handle regulatory requirements.",
  openGraph: {
    title: "About Probo",
    description:
      "Meet the team behind Probo, the open-source compliance platform transforming how startups handle regulatory requirements.",
    type: "website",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Probo",
      },
    ],
  },
};
