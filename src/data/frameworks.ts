export const frameworks = [
  { label: "SOC2 Type 2", badge: "SOC2_TYPE2" },
  { label: "ISO 27001", badge: "ISO27001", badgeDark: "ISO27001_dark" },
  // GDPR badge is renamed to avoid being blocked by adblockers
  { label: "GDPR", badge: "JetDePierre" },
  { label: "HIPAA", badge: "HIPAA" },
  { label: "FERPA", badge: "FERPA" },
  { label: "SOC2 Type 1", badge: "SOC2_TYPE1" },
  { label: "SOC3", badge: "SOC3_TYPE1" },
  { label: "CCPA", badge: "CCPA" },
  { label: "ISO 27701", badge: "ISO27701", badgeDark: "ISO27701_dark" },
  { label: "ISO 42001", badge: "ISO42001", badgeDark: "ISO42001_dark" },
  { label: "CASA", badge: "CASA" },
] satisfies {
  label: string;
  badge: string;
  badgeDark?: string;
}[];
