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
      purpose: "Source code hosting and version control",
      location: "United States",
      link: "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",
    },
  ];

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
