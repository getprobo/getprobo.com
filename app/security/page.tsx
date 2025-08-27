import { Section } from "@/components/Section";
import type { Metadata } from "next";
import siteConfig from "@/app/metadata.config";

export const metadata: Metadata = {
  title: "Security",
  description: "Learn about Probo's security practices and how we protect your data.",
  alternates: {
    canonical: `${siteConfig.url}/security`,
  },
};

export default function SecurityPage() {
  return (
    <Section className="bg-dark-50">
      <div className="mb-20">
        <h2 className="text-dark-900 mb-16 text-center text-5xl font-normal not-italic">
          Security at Probo
        </h2>
        <p className="text-dark-900 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Our Security Commitment
        </h2>
        <p className="text-dark-900 text-xl font-light">
          At Probo, security isn&apos;t just a feature it&apos;s fundamental to
          everything we do. As a compliance platform, we understand the critical
          nature of the data you entrust to us and take our responsibility to
          protect it seriously.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Infrastructure Security
        </h2>
        <ul className="text-dark-900 mt-4 ml-6 list-disc space-y-2 text-xl font-light">
          <li>
            <strong>Cloud Infrastructure:</strong> We host our services on AWS,
            leveraging their world-class security infrastructure and compliance
            certifications
          </li>
          <li>
            <strong>Network Security:</strong> All data in transit is encrypted
            using TLS 1.3, and we employ strict firewall rules and network
            segregation with VPN access
          </li>
          <li>
            <strong>Data Encryption:</strong> All data at rest is encrypted
            using AES-256 encryption
          </li>
          <li>
            <strong>Database Security:</strong> Databases are encrypted,
            regularly backed up, and equipped with Point-in-Time Recovery (PITR)
            capabilities
          </li>
          <li>
            <strong>Infrastructure as Code:</strong> All infrastructure is
            managed through code, ensuring consistency and security
          </li>
          <li>
            <strong>Container & VM Security:</strong> We only build from trusted
            Docker images and rebuild them regularly to incorporate the latest
            security fixes. The same approach is applied to VM images
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Application Security
        </h2>
        <ul className="text-dark-900 mt-4 ml-6 list-disc space-y-2 text-xl font-light">
          <li>
            <strong>Authentication:</strong> We enforce Single Sign-On (SSO)
            when possible and require at least two-factor authentication (2FA)
            everywhere else
          </li>
          <li>
            <strong>Session Management:</strong> Secure session handling with
            automatic timeouts and invalidation
          </li>
          <li>
            <strong>Access Control:</strong> Role-based access control (RBAC)
            with principle of least privilege
          </li>
          <li>
            <strong>Code Security:</strong> All commits are digitally signed for
            authenticity and integrity
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Security Practices
        </h2>
        <ul className="text-dark-900 mt-4 ml-6 list-disc space-y-2 text-xl font-light">
          <li>
            <strong>Security Testing:</strong> Annual penetration testing and
            vulnerability assessments
          </li>
          <li>
            <strong>Monitoring & Alerting:</strong> 24/7 security monitoring
            with comprehensive logging and alerting systems
          </li>
          <li>
            <strong>Access Logging:</strong> Comprehensive employee access
            logging with behavioral analysis and automated alerting for unusual
            access patterns
          </li>
          <li>
            <strong>Updates:</strong> Regular security patches and updates to
            all systems and dependencies
          </li>
          <li>
            <strong>Dependency Management:</strong> We leverage Software Bill of
            Materials (SBOM) for comprehensive dependency management and
            security
          </li>
          <li>
            <strong>Incident Response:</strong> Documented incident response
            procedures with regular team training
          </li>
          <li>
            <strong>Password Management:</strong> Enterprise password manager
            enforced across all team members
          </li>
        </ul>
      </section>

      {/* TODO: Add compliance section */}
      {/* <section>
        <h2>Compliance</h2>
        <p>
          We maintain various compliance certifications and follow industry
          best practices:
        </p>
        <ul>
          <li>SOC 2 Type II certified</li>
          <li>ISO 27001 certified</li>
          <li>GDPR compliant</li>
          <li>CCPA compliant</li>
        </ul>
      </section> */}

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Vulnerability Disclosure
        </h2>
        <p className="text-dark-900 text-xl font-light">
          We appreciate the work of security researchers and welcome responsible
          disclosure of security vulnerabilities. Please report any security
          issues to{" "}
          <a href="mailto:security@getprobo.com" className="text-dark-900">
            security@getprobo.com
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-dark-900 mb-4 text-3xl font-normal not-italic">
          Contact
        </h2>
        <p className="text-dark-900 text-xl font-light">
          For security-related inquiries, please contact our security team at{" "}
          <a href="mailto:security@getprobo.com" className="text-dark-900">
            security@getprobo.com
          </a>
        </p>
      </section>
    </Section>
  );
}
