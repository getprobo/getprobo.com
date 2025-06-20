import { Section } from "@/components/Section";

export default function SubprocessorsPage() {
  const subprocessors = [
    {
      name: "AWS",
      purpose: "Cloud infrastructure and hosting",
      location: "United States",
      link: "https://aws.amazon.com/compliance/gdpr-center/",
    },
    {
      name: "GitHub",
      purpose: "Static site hosting",
      location: "United States",
      link: "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",
    },
    {
      name: "PostHog",
      purpose: "Analytics and event tracking",
      location: "United States",
      link: "https://posthog.com/privacy",
    },
    {
      name: "Stripe",
      purpose: "Payment processing",
      location: "United States",
      link: "https://stripe.com/privacy",
    },
    {
      name: "Attio",
      purpose: "Customer relationship management",
      location: "United States",
      link: "https://attio.com/legal/privacy",
    },
    {
      name: "Google Workspace",
      purpose: "Email, calendar, and document collaboration",
      location: "United States",
      link: "https://policies.google.com/privacy",
    },
    {
      name: "Microsoft 365",
      purpose: "Email, calendar, and document collaboration",
      location: "United States",
      link: "https://privacy.microsoft.com/en-us/privacystatement",
    },
    {
      name: "Slack",
      purpose: "Communication, collaboration and customer support",
      location: "United States",
      link: "https://slack.com/intl/en-gb/trust/privacy/privacy-policy",
    },
    {
      name: "Cal.com",
      purpose: "Booking and scheduling",
      location: "United States",
      link: "https://cal.com/privacy",
    },
    {
      name: "Notion",
      purpose: "Document collaboration",
      location: "United States",
      link: "https://www.notion.so/notion/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091",
    },
    {
      name: "Granola",
      purpose: "Note-taking and document collaboration",
      location: "United States",
      link: "https://www.granola.ai/docs/policies/privacy/pp",
    },
    {
      name: "Linear",
      purpose: "Project management and collaboration",
      location: "United States",
      link: "https://linear.app/privacy",
    },
    {
      name: "Documenso",
      purpose: "Document signing",
      location: "United States",
      link: "https://documenso.com/privacy",
    },
    {
      name: "Anthropic",
      purpose: "AI processing",
      location: "United States",
      link: "https://www.anthropic.com/legal/privacy",
    },
    {
      name: "OpenAI",
      purpose: "AI processing",
      location: "United States",
      link: "https://openai.com/policies/privacy-policy/",
    },
    {
      name: "Grafana",
      purpose: "Monitoring and alerting",
      location: "United States",
      link: "https://grafana.com/legal/privacy-policy",
    },
    {
      name: "Cloudflare",
      purpose: "CDN and DNS",
      location: "United States",
      link: "https://www.cloudflare.com/en-gb/privacypolicy/",
    },
    {
      name: "Tailscale",
      purpose: "VPN",
      location: "United States",
      link: "https://tailscale.com/legal/privacy-policy",
    },
    {
      name: "Superhuman",
      purpose: "Email client",
      location: "United States",
      link: "https://superhuman.com/privacy",
    },
    {
      name: "Claap",
      purpose: "Note-taking and document collaboration",
      location: "United States",
      link: "https://www.claap.io/legal/privacy-policy",
    },
    {
      name: "Typeform",
      purpose: "Form builder",
      location: "United States",
      link: "https://admin.typeform.com/to/dwk6gt",
    },
  ];

  subprocessors.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Section className="bg-dark-50">
      <div className="mb-20">
        <h2 className="text-dark-900 mb-16 text-center text-5xl font-normal not-italic">
          Subprocessors
        </h2>
        <p className="text-dark-900 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <section className="mb-10">
        <p className="text-dark-900 text-xl font-light">
          Probo uses certain subprocessors to assist in providing our services.
          A subprocessor is a third party data processor who has or potentially
          will have access to or process Service Data (which may contain
          Personal Data). We use the following subprocessors to host our
          services and help us provide our services to you:
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="bg-dark-900 w-full border-collapse overflow-hidden rounded-2xl">
            <thead>
              <tr className="text-dark-50 border-dark-700 border-b">
                <th className="px-4 py-3 text-left text-xl font-normal">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xl font-normal">
                  Purpose
                </th>
                <th className="px-4 py-3 text-left text-xl font-normal">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-xl font-normal">
                  Privacy Policy
                </th>
              </tr>
            </thead>
            <tbody>
              {subprocessors.map((processor, idx) => (
                <tr
                  key={processor.name}
                  className={`text-dark-50 ${idx < subprocessors.length - 1 ? "border-dark-700 border-b" : ""}`}
                >
                  <td className="px-4 py-3 font-medium">{processor.name}</td>
                  <td className="px-4 py-3 font-light">{processor.purpose}</td>
                  <td className="px-4 py-3 font-light">{processor.location}</td>
                  <td className="px-4 py-3">
                    <a
                      href={processor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      View →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Updates to this List
        </h2>
        <p className="text-dark-900 text-xl font-light">
          We may update this list from time to time as our business needs change
          and as we engage new subprocessors or terminate existing ones. We will
          post any such updates here. If you have questions about our
          subprocessors, please contact us at{" "}
          <a href="mailto:privacy@getprobo.com" className="text-dark-900">
            privacy@getprobo.com
          </a>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Security and Compliance
        </h2>
        <p className="text-dark-900 text-xl font-light">
          We carefully review the security and privacy practices of
          subprocessors we engage to ensure they provide a level of security and
          privacy appropriate to their access to data and the scope of the
          services they are engaged to provide.
        </p>
      </section>
    </Section>
  );
}
