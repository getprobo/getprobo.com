import { Section } from "@/components/Section";
import type { Metadata } from "next";
import siteConfig from "@/app/metadata.config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how Probo uses cookies and similar technologies to improve your browsing experience and track website analytics.",
  alternates: {
    canonical: `${siteConfig.url}/cookie-policy`,
  },
};

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
        <h1 className="text-dark-900 mb-16 text-center text-5xl font-normal not-italic">
          Cookie Policy
        </h1>
        <p className="text-dark-900 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          What are Cookies?
        </h2>
        <p className="text-dark-900 text-xl font-light">
          Cookies are small text files that are placed on your computer or
          mobile device when you visit a website. They are widely used to make
          websites work more efficiently and provide a better browsing
          experience. Cookies can be &quot;persistent&quot; or
          &quot;session&quot; cookies.
        </p>
      </section>

      <section>
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          How We Use Cookies
        </h2>
        <p className="text-dark-900 text-xl font-light">
          We use cookies for several purposes, including to provide essential
          website functionality, improve website performance, and offer you a
          better browsing experience. Here&apos;s an overview of the types of
          cookies we use:
        </p>

        <div className="mt-8 space-y-12">
          {cookieTypes.map((type) => (
            <div key={type.name}>
              <h3 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
                {type.name}
              </h3>
              <p className="text-dark-900 mb-4 text-xl font-light">
                {type.description}
              </p>
              <div className="overflow-x-auto">
                <table className="bg-dark-900 w-full border-collapse overflow-hidden rounded-2xl">
                  <thead>
                    <tr className="text-dark-50 border-dark-700 border-b">
                      <th className="px-4 py-3 text-left text-xl font-normal">
                        Cookie Name
                      </th>
                      <th className="px-4 py-3 text-left text-xl font-normal">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left text-xl font-normal">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {type.examples.map((cookie, idx) => (
                      <tr
                        key={cookie.name}
                        className={`text-dark-50 ${idx < type.examples.length - 1 ? "border-dark-700 border-b" : ""}`}
                      >
                        <td className="px-4 py-3 font-medium">{cookie.name}</td>
                        <td className="px-4 py-3 font-light">
                          {cookie.purpose}
                        </td>
                        <td className="px-4 py-3 font-light">
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
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Managing Cookies
        </h2>
        <p className="text-dark-900 text-xl font-light">
          Most web browsers allow you to control cookies through their settings
          preferences. However, if you limit the ability of websites to set
          cookies, you may worsen your overall user experience, as it will no
          longer be personalized to you. It may also stop you from saving
          customized settings like login information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Updates to This Policy
        </h2>
        <p className="text-dark-900 text-xl font-light">
          We may update this Cookie Policy from time to time in order to reflect
          changes to the cookies we use or for other operational, legal, or
          regulatory reasons. Please re-visit this Cookie Policy regularly to
          stay informed about our use of cookies and related technologies.
        </p>
        <p className="text-dark-900 text-xl font-light">
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
