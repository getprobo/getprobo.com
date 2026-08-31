export const frameworks = [
  { label: "SOC 2", badge: "SOC2_TYPE2" },
  { label: "SOC 2 Type 1", badge: "SOC2_TYPE1" },
  { label: "SOC 2 Type 2", badge: "SOC2_TYPE2" },
  { label: "SOC 3", badge: "SOC3" },
  { label: "ISO 27001", badge: "ISO27001", badgeDark: "ISO27001_dark" },
  { label: "ISO 27701", badge: "ISO27701", badgeDark: "ISO27701_dark" },
  { label: "ISO 42001", badge: "ISO42001", badgeDark: "ISO42001_dark" },
  // GDPR badge is renamed to avoid being blocked by adblockers
  { label: "GDPR", badge: "JetDePierre" },
  { label: "CCPA", badge: "CCPA" },
  { label: "HIPAA", badge: "HIPAA" },
  { label: "FERPA", badge: "FERPA" },
  { label: "CASA", badge: "CASA" },
] satisfies {
  label: string;
  badge: string;
  badgeDark?: string;
}[];

export function frameworkBadgeAlt(name: string): string {
  const key = name.replace(/_dark$/, "");
  const match = frameworks.find(
    (framework) => framework.badge === key || framework.badgeDark === name,
  );
  const label = match?.label ?? key.replaceAll("_", " ");
  return `${label} compliance badge`;
}
