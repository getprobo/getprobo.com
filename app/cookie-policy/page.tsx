import { Section } from "@/components/Section";

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description:
        "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.",
      examples: [
        {
          name: "Session Cookie",
          purpose: "Maintains your session while you are using our website",
          duration: "Session",
        },
        {
          name: "CSRF Token",
          purpose: "Helps prevent cross-site request forgery attacks",
          duration: "Session",
        },
      ],
    },
    {
      name: "Analytics Cookies",
      description:
        "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.",
      examples: [
        {
          name: "Posthog",
          purpose: "Anonymous website usage statistics",
          duration: "1 year",
        },
      ],
    },
  ];

  return (
    <Section className="bg-dark-50">
      <div className="mb-20">
        <h2 className="text-dark-900 font-normal text-5xl text-center not-italic mb-16">
          Cookie Policy
        </h2>
        <p className="text-dark-900 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          What are Cookies?
        </h2>
        <p className="text-dark-900 font-light text-xl">
          Cookies are small text files that are placed on your computer or
          mobile device when you visit a website. They are widely used to make
          websites work more efficiently and provide a better browsing
          experience. Cookies can be &quot;persistent&quot; or
          &quot;session&quot; cookies.
        </p>
      </section>

      <section>
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          How We Use Cookies
        </h2>
        <p className="text-dark-900 font-light text-xl">
          We use cookies for several purposes, including to provide essential
          website functionality, improve website performance, and offer you a
          better browsing experience. Here&apos;s an overview of the types of
          cookies we use:
        </p>

        <div className="mt-8 space-y-12">
          {cookieTypes.map((type) => (
            <div key={type.name}>
              <h3 className="text-dark-900 font-normal text-3xl not-italic mb-4">
                {type.name}
              </h3>
              <p className="mb-4 text-dark-900 font-light text-xl">
                {type.description}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-dark-900 rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="text-dark-50 border-b border-dark-700">
                      <th className="py-3 px-4 text-left font-normal text-xl">
                        Cookie Name
                      </th>
                      <th className="py-3 px-4 text-left font-normal text-xl">
                        Purpose
                      </th>
                      <th className="py-3 px-4 text-left font-normal text-xl">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {type.examples.map((cookie, idx) => (
                      <tr
                        key={cookie.name}
                        className={`text-dark-50 ${idx < type.examples.length - 1 ? "border-b border-dark-700" : ""}`}
                      >
                        <td className="py-3 px-4 font-medium">{cookie.name}</td>
                        <td className="py-3 px-4 font-light">
                          {cookie.purpose}
                        </td>
                        <td className="py-3 px-4 font-light">
                          {cookie.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          Managing Cookies
        </h2>
        <p className="text-dark-900 font-light text-xl">
          Most web browsers allow you to control cookies through their settings
          preferences. However, if you limit the ability of websites to set
          cookies, you may worsen your overall user experience, as it will no
          longer be personalized to you. It may also stop you from saving
          customized settings like login information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 font-normal text-3xl not-italic mb-4">
          Updates to This Policy
        </h2>
        <p className="text-dark-900 font-light text-xl">
          We may update this Cookie Policy from time to time in order to reflect
          changes to the cookies we use or for other operational, legal, or
          regulatory reasons. Please re-visit this Cookie Policy regularly to
          stay informed about our use of cookies and related technologies.
        </p>
        <p className="text-dark-900 font-light text-xl">
          If you have any questions about our use of cookies or other
          technologies, please email us at{" "}
          <a className="text-dark-900" href="mailto:privacy@getprobo.com">
            privacy@getprobo.com
          </a>
          .
        </p>
      </section>
    </Section>
  );
}
