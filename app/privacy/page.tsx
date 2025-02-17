export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto prose prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when using Probo:
          </p>
          <ul>
            <li>Account information (name, email, company details)</li>
            <li>Usage data and platform interactions</li>
            <li>Compliance-related information you input into the platform</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process your transactions and send related information</li>
            <li>Send technical notices, updates, and security alerts</li>
            <li>Respond to your comments and questions</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Storage and Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your data. All data is encrypted in transit and at rest. We
            regularly review and update our security practices to enhance data
            protection.
          </p>
        </section>

        <section>
          <h2>4. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data in a structured format</li>
          </ul>
        </section>

        <section>
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:privacy@getprobo.com" className="text-[#D1FF4C]">
              privacy@getprobo.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
