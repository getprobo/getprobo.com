import { Section } from "@/components/Section";
import Image from "next/image";

function TeamMember({
  name,
  role,
  image,
  description,
}: {
  name: string;
  role: string;
  image: string;
  description: string;
}) {
  return (
    <div className="bg-dark-100 flex flex-col gap-2 rounded-2xl p-12">
      <Image
        src={image}
        alt={name}
        className="rounded-full"
        width={100}
        height={100}
      />
      <h2 className="text-dark-900 text-2xl font-normal">{name}</h2>
      <h3 className="text-dark-900 text-xl font-light">{role}</h3>
      <p className="text-dark-900 text-xl font-light">{description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <Section>
        <h2 className="text-dark-900 mb-16 text-center text-5xl font-normal not-italic">
          Our mission
        </h2>

        <div className="grid grid-cols-2 gap-12 lg:grid-cols-1">
          <div className="border-dark-600 flex min-h-[580px] max-w-[755px] items-center justify-center rounded-2xl border p-12">
            <p
              className="text-dark-900 text-3xl font-light"
              style={{ lineHeight: "50px" }}
            >
              We{"'"}re transforming compliance from a complex burden into an
              intuitive journey. <br />
              Our platform makes compliance straightforward and cost-effective,
              empowering businesses of all sizes to meet regulatory requirements
              with confidence.
            </p>
          </div>

          <div className="bg-dark-900 flex min-h-[580px] items-center justify-center rounded-2xl p-12">
            <p className="text-yellow text-center text-5xl font-light">
              Let us guide you toward effortless compliance management.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-dark-50">
        <h2 className="text-dark-900 mb-16 text-center text-5xl font-normal not-italic">
          Meet the team
        </h2>

        <div className="grid grid-cols-2 gap-12 lg:grid-cols-1">
          <TeamMember
            name="Antoine Bouchardy"
            role="Co-founder & CEO"
            image="/team/antoine.jpeg"
            description="ISO 27001 auditor with experience in compliance assessment and implementation. Passionate about making compliance accessible and straightforward."
          />

          <TeamMember
            name="Bryan Frimin"
            role="Co-founder & CTO"
            image="/team/bryan.jpeg"
            description="YC alumnus and engineer who managed SOC2/ISO27001 compliance at his previous startup. Experienced in building scalable solutions for complex problems."
          />
        </div>
      </Section>
    </div>
  );
}
