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
    <div className="rounded-2xl bg-dark-100 p-12 flex flex-col gap-2">
      <Image
        src={image}
        alt={name}
        className="rounded-full"
        width={100}
        height={100}
      />
      <h2 className="text-dark-900 font-normal text-2xl">{name}</h2>
      <h3 className="text-dark-900 font-light text-xl">{role}</h3>
      <p className="text-dark-900 font-light text-xl">{description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <Section>
        <h2 className="text-dark-900 font-normal text-5xl text-center not-italic mb-16">
          Our mission
        </h2>

        <div className="flex gap-12">
          <div className="border border-dark-600 rounded-2xl p-12 max-w-[755px] h-[580px] flex items-center justify-center">
            <p
              className="text-dark-900 font-light text-3xl"
              style={{ lineHeight: "50px" }}
            >
              We're transforming compliance from a complex burden into an
              intuitive journey. <br />
              Our platform makes compliance straightforward and cost-effective,
              empowering businesses of all sizes to meet regulatory requirements
              with confidence.
            </p>
          </div>

          <div className="h-[580px] flex items-center justify-center bg-dark-900 rounded-2xl p-12">
            <p className=" text-yellow font-light text-5xl text-center">
              Let us guide you toward effortless compliance management.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-dark-50">
        <h2 className="text-dark-900 font-normal text-5xl text-center not-italic mb-16">
          Meet the team
        </h2>

        <div className="flex gap-12">
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
