export default function TermsOfService() {
  return (
    <div className="py-20">
      <div className="prose prose-invert max-w-none">
        <h1>Terms of Service</h1>
        <p className="text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Probo&apos;s services, you agree to be bound
            by these Terms of Service and all applicable laws and regulations.
            If you do not agree with any of these terms, you are prohibited from
            using the service.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            Probo is open-source software released under the MIT License.
            However, the use of our hosted service is subject to these
            additional terms:
          </p>
          <ul>
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

        <section>
          <h2>3. Service Availability</h2>
          <p>
            We strive to maintain high availability of our service, but we do
            not guarantee uninterrupted access. We reserve the right to modify,
            suspend, or discontinue any part of the service without notice.
          </p>
        </section>

        <section>
          <h2>4. User Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>Maintaining the security of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>
              Ensuring your use complies with applicable laws and regulations
            </li>
            <li>The accuracy of data you input into the system</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Ownership</h2>
          <p>
            You retain all rights to your data. We claim no ownership over the
            compliance information or documents you store in Probo. You grant us
            a license to host, process, and display your data solely to provide
            our services to you.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Probo shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages resulting from your use of the service.
          </p>
        </section>

        <section>
          <h2>7. Contact</h2>
          <p>
            Questions about these Terms should be sent to{" "}
            <a href="mailto:legal@getprobo.com" className="text-[#D1FF4C]">
              legal@getprobo.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
