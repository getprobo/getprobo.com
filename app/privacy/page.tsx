import { Section } from "@/components/Section";

export default function PrivacyPolicy() {
  return (
    <Section className="bg-dark-50">
      <div className="mb-20">
        <h2 className="text-dark-900 font-normal text-5xl text-center not-italic mb-16">
          Privacy Policy
        </h2>
        <p className="text-dark-900 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          1. Information We Collect
        </h2>
        <p className="text-dark-900 font-light text-xl">
          We collect information you provide directly to us when using Probo:
        </p>
        <ul className="text-dark-900 font-light text-xl list-disc pl-8 mt-4">
          <li>Account information (name, email, company details)</li>
          <li>Usage data and platform interactions</li>
          <li>Compliance-related information you input into the platform</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-dark-900 font-light text-xl">
          We use the information we collect to:
        </p>
        <ul className="text-dark-900 font-light text-xl list-disc pl-8 mt-4">
          <li>Provide, maintain, and improve our services</li>
          <li>Process your transactions and send related information</li>
          <li>Send technical notices, updates, and security alerts</li>
          <li>Respond to your comments and questions</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          3. Data Storage and Security
        </h2>
        <p className="text-dark-900 font-light text-xl">
          We implement appropriate technical and organizational measures to
          protect your data. All data is encrypted in transit and at rest. We
          regularly review and update our security practices to enhance data
          protection.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          4. Your Rights
        </h2>
        <p className="text-dark-900 font-light text-xl">
          You have the right to:
        </p>
        <ul className="text-dark-900 font-light text-xl list-disc pl-8 mt-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Export your data in a structured format</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          5. Contact Us
        </h2>
        <p className="text-dark-900 font-light text-xl">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a className="text-dark-900" href="mailto:privacy@getprobo.com">
            privacy@getprobo.com
          </a>
        </p>
      </section>
    </Section>
  );
}
