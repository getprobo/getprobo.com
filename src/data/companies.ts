// Create fake data for the companies section
export const companies = Array.from({ length: 8 }, (_, i) => [
  {
    image: "ahrefs.svg",
    alt: "Ahrefs",
    href: "https://ahrefs.com",
    badge: "W25",
  },
  {
    image: "carbonfact.svg",
    alt: "CarbonFact",
    href: "https://carbonfact.com",
    badge: "W25",
  },
]).flat();
