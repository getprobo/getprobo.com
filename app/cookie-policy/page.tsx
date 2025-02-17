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
          name: "Vercel Analytics",
          purpose: "Anonymous website usage statistics",
          duration: "1 year",
        },
      ],
    },
    {
      name: "Functional Cookies",
      description:
        "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.",
      examples: [
        {
          name: "Language Preference",
          purpose: "Remembers your preferred language setting",
          duration: "1 year",
        },
        {
          name: "Theme Preference",
          purpose: "Remembers your preferred theme (light/dark)",
          duration: "1 year",
        },
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="prose prose-invert max-w-none">
        <h1>Cookie Policy</h1>
        <p className="text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>What are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently and provide a better browsing
            experience. Cookies can be &quot;persistent&quot; or
            &quot;session&quot; cookies.
          </p>
        </section>

        <section>
          <h2>How We Use Cookies</h2>
          <p>
            We use cookies for several purposes, including to provide essential
            website functionality, improve website performance, and offer you a
            better browsing experience. Here&apos;s an overview of the types of
            cookies we use:
          </p>

          <div className="mt-8 space-y-12">
            {cookieTypes.map((type) => (
              <div key={type.name}>
                <h3 className="text-xl font-semibold text-white">
                  {type.name}
                </h3>
                <p className="mb-4 text-neutral-400">{type.description}</p>
                <div className="space-y-4">
                  {type.examples.map((cookie) => (
                    <div
                      key={cookie.name}
                      className="p-4 rounded-lg border border-neutral-800 bg-black/50"
                    >
                      <h4 className="font-medium text-white mb-2">
                        {cookie.name}
                      </h4>
                      <div className="space-y-1 text-sm text-neutral-400">
                        <p>
                          <strong className="text-neutral-200">Purpose:</strong>{" "}
                          {cookie.purpose}
                        </p>
                        <p>
                          <strong className="text-neutral-200">
                            Duration:
                          </strong>{" "}
                          {cookie.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their
            settings preferences. However, if you limit the ability of websites
            to set cookies, you may worsen your overall user experience, as it
            will no longer be personalized to you. It may also stop you from
            saving customized settings like login information.
          </p>
        </section>

        <section>
          <h2>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to
            reflect changes to the cookies we use or for other operational,
            legal, or regulatory reasons. Please re-visit this Cookie Policy
            regularly to stay informed about our use of cookies and related
            technologies.
          </p>
          <p>
            If you have any questions about our use of cookies or other
            technologies, please email us at{" "}
            <a href="mailto:privacy@getprobo.com" className="text-[#D1FF4C]">
              privacy@getprobo.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
