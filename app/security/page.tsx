export default function SecurityPage() {
  return (
    <div className="py-20">
      <div className="prose prose-invert max-w-none">
        <h1>Security at Probo</h1>
        <p>
          At Probo, security isn&apos;t just a feature—it&apos;s fundamental to
          everything we do. As a compliance platform, we understand the critical
          nature of the data you entrust to us and take our responsibility to
          protect it seriously.
        </p>
        <p className="text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>Our Security Commitment</h2>
          <p>
            At Probo, security isn&apos;t just a feature—it&apos;s fundamental
            to everything we do. As a compliance platform, we understand the
            critical nature of the data you entrust to us and take our
            responsibility to protect it seriously.
          </p>
        </section>

        <section>
          <h2>Infrastructure Security</h2>
          <ul>
            <li>
              <strong>Cloud Infrastructure:</strong> We host our services on
              AWS, leveraging their world-class security infrastructure and
              compliance certifications
            </li>
            <li>
              <strong>Network Security:</strong> All data in transit is
              encrypted using TLS 1.3, and we employ strict firewall rules and
              network segregation
            </li>
            <li>
              <strong>Data Encryption:</strong> All data at rest is encrypted
              using AES-256 encryption
            </li>
          </ul>
        </section>

        <section>
          <h2>Application Security</h2>
          <ul>
            <li>
              <strong>Authentication:</strong> Multi-factor authentication
              support and secure password policies
            </li>
            <li>
              <strong>Session Management:</strong> Secure session handling with
              automatic timeouts and invalidation
            </li>
            <li>
              <strong>Access Control:</strong> Role-based access control (RBAC)
              with principle of least privilege
            </li>
          </ul>
        </section>

        <section>
          <h2>Security Practices</h2>
          <ul>
            <li>
              <strong>Security Testing:</strong> Regular penetration testing and
              vulnerability assessments
            </li>
            <li>
              <strong>Monitoring:</strong> 24/7 security monitoring and alerting
            </li>
            <li>
              <strong>Updates:</strong> Regular security patches and updates to
              all systems and dependencies
            </li>
            <li>
              <strong>Incident Response:</strong> Documented incident response
              procedures with regular team training
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

        <section>
          <h2>Vulnerability Disclosure</h2>
          <p>
            We appreciate the work of security researchers and welcome
            responsible disclosure of security vulnerabilities. Please report
            any security issues to{" "}
            <a href="mailto:security@getprobo.com" className="text-[#D1FF4C]">
              security@getprobo.com
            </a>
          </p>
        </section>

        <section>
          <h2>Security Updates</h2>
          <p>
            For real-time updates about our security status and any ongoing
            incidents, please visit our{" "}
            <a
              href="https://status.getprobo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D1FF4C]"
            >
              Status Page
            </a>
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For security-related inquiries, please contact our security team at{" "}
            <a href="mailto:security@getprobo.com" className="text-[#D1FF4C]">
              security@getprobo.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
