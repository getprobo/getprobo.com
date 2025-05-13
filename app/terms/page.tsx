import { Section } from "@/components/Section";

export default function TermsOfService() {
  return (
    <Section className="bg-dark-50">
      <div className="mb-20">
        <h2 className="text-dark-900 font-normal text-5xl text-center not-italic mb-16">
          Terms of Service
        </h2>
        <p className="text-dark-900 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-dark-900 font-light text-xl">
          By accessing or using Probo&apos;s services, you agree to be bound by
          these Terms of Service and all applicable laws and regulations. If you
          do not agree with any of these terms, you are prohibited from using
          the service.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          2. Use License
        </h2>
        <p className="text-dark-900 font-light text-xl">
          Probo is open-source software released under the MIT License. However,
          the use of our hosted service is subject to these additional terms:
        </p>
        <ul className="text-dark-900 font-light text-xl ml-6 list-disc mt-4 space-y-2">
          <li>You may not use the service for any illegal purposes</li>
          <li>
            You may not transmit any malicious code or attempt to breach our
            systems
          </li>
          <li>
            You may not resell or redistribute our hosted service without
            permission
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          3. Service Availability
        </h2>
        <p className="text-dark-900 font-light text-xl">
          We strive to maintain high availability of our service, but we do not
          guarantee uninterrupted access. We reserve the right to modify,
          suspend, or discontinue any part of the service without notice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          4. User Responsibilities
        </h2>
        <p className="text-dark-900 font-light text-xl">
          You are responsible for:
        </p>
        <ul className="text-dark-900 font-light text-xl ml-6 list-disc mt-4 space-y-2">
          <li>Maintaining the security of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>
            Ensuring your use complies with applicable laws and regulations
          </li>
          <li>The accuracy of data you input into the system</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          5. Data Ownership
        </h2>
        <p className="text-dark-900 font-light text-xl">
          You retain all rights to your data. We claim no ownership over the
          compliance information or documents you store in Probo. You grant us a
          license to host, process, and display your data solely to provide our
          services to you.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          6. Limitation of Liability
        </h2>
        <p className="text-dark-900 font-light text-xl">
          To the fullest extent permitted by law, Probo shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages
          resulting from your use of the service.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          7. Contact
        </h2>
        <p className="text-dark-900 font-light text-xl">
          Questions about these Terms should be sent to{" "}
          <a href="mailto:legal@getprobo.com" className="text-dark-900">
            legal@getprobo.com
          </a>
        </p>
      </section>
    </Section>
  );
}
