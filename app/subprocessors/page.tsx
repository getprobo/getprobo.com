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
    <div className="py-20">
      <div className="prose prose-invert max-w-none">
        <h1>Subprocessors</h1>
        <p className="text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <p>
            Probo uses certain subprocessors to assist in providing our
            services. A subprocessor is a third party data processor who has or
            potentially will have access to or process Service Data (which may
            contain Personal Data). We use the following subprocessors to host
            our services and help us provide our services to you:
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="px-6 py-4 text-left text-neutral-200">Name</th>
                  <th className="px-6 py-4 text-left text-neutral-200">
                    Purpose
                  </th>
                  <th className="px-6 py-4 text-left text-neutral-200">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-neutral-200">
                    Privacy Policy
                  </th>
                </tr>
              </thead>
              <tbody>
                {subprocessors.map((processor) => (
                  <tr
                    key={processor.name}
                    className="border-b border-neutral-800"
                  >
                    <td className="px-6 py-4 text-white">{processor.name}</td>
                    <td className="px-6 py-4 text-neutral-400">
                      {processor.purpose}
                    </td>
                    <td className="px-6 py-4 text-neutral-400">
                      {processor.location}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={processor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D1FF4C] hover:underline"
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

        <section className="mt-12">
          <h2>Updates to this List</h2>
          <p>
            We may update this list from time to time as our business needs
            change and as we engage new subprocessors or terminate existing
            ones. We will post any such updates here. If you have questions
            about our subprocessors, please contact us at{" "}
            <a href="mailto:privacy@getprobo.com" className="text-[#D1FF4C]">
              privacy@getprobo.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>Security and Compliance</h2>
          <p>
            We carefully review the security and privacy practices of
            subprocessors we engage to ensure they provide a level of security
            and privacy appropriate to their access to data and the scope of the
            services they are engaged to provide.
          </p>
        </section>
      </div>
    </div>
  );
}
