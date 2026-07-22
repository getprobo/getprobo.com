export type MenuIconName =
  | "article"
  | "book-open-text"
  | "briefcase"
  | "clock-counter-clockwise"
  | "code"
  | "compass"
  | "github-logo"
  | "handshake"
  | "paint-brush"
  | "quotes"
  | "shield-check"
  | "users-three";
export type MenuItem = {
  label: string;
  description: string;
  href: string;
  icon: MenuIconName;
};

export type MenuFeature = {
  eyebrow: string;
  title: string;
  href: string;
  asset: string;
  alt: string;
  variant: "product" | "story" | "guide";
};

export type MenuGroup = {
  label: string;
  items: MenuItem[];
  feature: MenuFeature;
};

export const menuGroups: MenuGroup[] = [
  {
    label: "Products",
    items: [
      {
        label: "Managed Compliance",
        description: "Expert-led compliance, end to end",
        href: "/",
        icon: "handshake",
      },
      {
        label: "Compliance Portal",
        description: "Share security documents securely",
        href: "/products/compliance-portal",
        icon: "shield-check",
      },
      {
        label: "Open-source platform",
        description: "Deploy Probo on your own infrastructure",
        href: "/docs/self-hosting/docker-compose",
        icon: "code",
      },
    ],
    feature: {
      eyebrow: "New on Probo",
      title: "Compliance Portal",
      href: "/products/compliance-portal",
      asset: "/navigation/browser.svg",
      alt: "Compliance Portal preview",
      variant: "product",
    },
  },
  {
    label: "Resources",
    items: [
      {
        label: "Guides & tools",
        description: "Practical compliance guides and free tools",
        href: "/hub",
        icon: "compass",
      },
      {
        label: "Blog",
        description: "Ideas and guidance from the Probo team",
        href: "/blog",
        icon: "article",
      },
      {
        label: "Customer Stories",
        description: "How teams get compliant with Probo",
        href: "/stories",
        icon: "quotes",
      },
      {
        label: "Changelog",
        description: "Latest product updates",
        href: "/changelog",
        icon: "clock-counter-clockwise",
      },
    ],
    feature: {
      eyebrow: "Customer stories",
      title: "How Ahrefs became ISO 27001 certified in 3 months",
      href: "/stories/ahrefs-iso",
      asset: "/navigation/ahrefs.webp",
      alt: "Ahrefs team collaborating in their office",
      variant: "story",
    },
  },
  {
    label: "Company",
    items: [
      {
        label: "About",
        description: "The people and vision powering Probo",
        href: "/about",
        icon: "users-three",
      },
      {
        label: "Careers",
        description: "Join the team building Probo",
        href: "/careers",
        icon: "briefcase",
      },
      {
        label: "Brand assets",
        description: "Official logos and visual resources",
        href: "/brand",
        icon: "paint-brush",
      },
      {
        label: "Security",
        description: "Review our security and compliance posture",
        href: "https://compliance.probo.com",
        icon: "shield-check",
      },
    ],
    feature: {
      eyebrow: "The Complete Guide",
      title: "What is SOC 2?",
      href: "/hub/soc2",
      asset: "/navigation/frameworks.svg",
      alt: "ISO 27001, SOC 2 Type II, and HIPAA framework cards",
      variant: "guide",
    },
  },
];

export const directMenuItems: MenuItem[] = [
  {
    label: "Docs",
    description: "Documentation for Probo",
    href: "/docs",
    icon: "book-open-text",
  },
  {
    label: "GitHub",
    description: "Explore our open-source compliance tools",
    href: "https://github.com/getprobo/probo",
    icon: "github-logo",
  },
];
