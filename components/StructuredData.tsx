import Script from "next/script";
import siteConfig from "@/app/metadata.config";

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${data["@type"]}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/probo-logo-with-name.svg`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.discord,
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.support,
      contactType: "customer support",
      availableLanguage: ["English"],
    },
    founder: siteConfig.authors.map((author) => ({
      "@type": "Person",
      name: author.name,
      url: author.url,
    })),
  };

  return <StructuredData data={organizationData} />;
}

export function WebSiteStructuredData() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/probo-logo-with-name.svg`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <StructuredData data={websiteData} />;
}

export function SoftwareApplicationStructuredData() {
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Compliance Management Software",
    operatingSystem: "Web",
    url: siteConfig.url,
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    screenshot: `${siteConfig.url}/og.png`,
    featureList: [
      "SOC 2 Compliance",
      "GDPR Compliance",
      "HIPAA Compliance",
      "ISO 27001 Certification",
      "ISO 42001 Certification",
      "ISO 27701 Certification",
      "Automated Compliance Monitoring",
      "Risk Assessment",
      "Vendor Management",
      "Policy Generation",
      "Audit Management",
      "Open Source",
    ],
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return <StructuredData data={softwareData} />;
}

export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can I get SOC 2 certified with Probo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With Probo, you can achieve SOC 2 certification in just one week. Our streamlined process and expert guidance ensure you meet all requirements efficiently without compromising on quality.",
        },
      },
      {
        "@type": "Question",
        name: "Is Probo really open source?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Probo is fully open source. You can find our code on GitHub, contribute to the project, and even self-host if needed. We believe in transparency and no vendor lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "What compliance frameworks does Probo support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Probo supports multiple compliance frameworks including SOC 2, GDPR, HIPAA, ISO 27001, ISO 42001, and ISO 27701. We continuously add support for new frameworks based on customer needs.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Probo cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Probo offers transparent pricing with no hidden fees. As an open-source platform, you can self-host for free, or choose our managed service for a hands-off experience. Contact us for specific pricing based on your needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle the audit process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we manage the entire audit process on your behalf. We find the right independent auditor for your company, coordinate the audit, and ensure everything runs smoothly.",
        },
      },
    ],
  };

  return <StructuredData data={faqData} />;
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url?: string }>;
}) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };

  return <StructuredData data={breadcrumbData} />;
}

export function BlogPostStructuredData({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author || siteConfig.authors[0].name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/probo-logo-with-name.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return <StructuredData data={articleData} />;
}
