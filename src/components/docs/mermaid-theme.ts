import type { MermaidConfig } from "mermaid";

const fontFamily =
  '"Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const light = {
  background: "transparent",
  fontFamily,
  fontSize: "14px",

  primaryColor: "#ffffff",
  primaryTextColor: "#141e12",
  primaryBorderColor: "#c3c8c2",
  secondaryColor: "#e4f7c7",
  secondaryTextColor: "#141e12",
  secondaryBorderColor: "#93c926",
  tertiaryColor: "#f4f6f3",
  tertiaryTextColor: "#141e12",
  tertiaryBorderColor: "#ecefec",

  textColor: "#141e12",
  lineColor: "#8f958d",
  titleColor: "#141e12",

  mainBkg: "#ffffff",
  nodeBorder: "#c3c8c2",
  nodeTextColor: "#141e12",
  clusterBkg: "#f7f9f6",
  clusterBorder: "#e3e7e1",
  edgeLabelBackground: "#ffffff",

  actorBkg: "#e4f7c7",
  actorBorder: "#93c926",
  actorTextColor: "#141e12",
  actorLineColor: "#c3c8c2",
  signalColor: "#4a5147",
  signalTextColor: "#141e12",
  labelBoxBkgColor: "#ffffff",
  labelBoxBorderColor: "#c3c8c2",
  labelTextColor: "#141e12",
  loopTextColor: "#141e12",
  noteBkgColor: "#f4f6f3",
  noteBorderColor: "#c3c8c2",
  noteTextColor: "#141e12",
  activationBkgColor: "#e4f7c7",
  activationBorderColor: "#93c926",
  sequenceNumberColor: "#141e12",

  labelColor: "#141e12",
  altBackground: "#f7f9f6",
  transitionColor: "#8f958d",
  transitionLabelColor: "#141e12",
} as const;

const dark = {
  background: "transparent",
  fontFamily,
  fontSize: "14px",

  primaryColor: "#20241f",
  primaryTextColor: "#eceeec",
  primaryBorderColor: "#3d453c",
  secondaryColor: "#253317",
  secondaryTextColor: "#d8f7a5",
  secondaryBorderColor: "#5d770d",
  tertiaryColor: "#20241f",
  tertiaryTextColor: "#eceeec",
  tertiaryBorderColor: "#343b34",

  textColor: "#eceeec",
  lineColor: "#697168",
  titleColor: "#eceeec",

  mainBkg: "#20241f",
  nodeBorder: "#3d453c",
  nodeTextColor: "#eceeec",
  clusterBkg: "#1b1e1b",
  clusterBorder: "#343b34",
  edgeLabelBackground: "#1b1e1b",

  actorBkg: "#253317",
  actorBorder: "#5d770d",
  actorTextColor: "#d8f7a5",
  actorLineColor: "#3d453c",
  signalColor: "#b6bdb4",
  signalTextColor: "#eceeec",
  labelBoxBkgColor: "#1b1e1b",
  labelBoxBorderColor: "#3d453c",
  labelTextColor: "#eceeec",
  loopTextColor: "#eceeec",
  noteBkgColor: "#20241f",
  noteBorderColor: "#3d453c",
  noteTextColor: "#eceeec",
  activationBkgColor: "#253317",
  activationBorderColor: "#5d770d",
  sequenceNumberColor: "#151715",

  labelColor: "#eceeec",
  altBackground: "#191c19",
  transitionColor: "#697168",
  transitionLabelColor: "#eceeec",
} as const;

export function mermaidConfig(mode: "light" | "dark"): MermaidConfig {
  return {
    startOnLoad: false,
    securityLevel: "strict",
    theme: "base",
    themeVariables: mode === "dark" ? dark : light,
    fontFamily,
    flowchart: { curve: "basis", padding: 16, useMaxWidth: true },
    sequence: {
      useMaxWidth: true,
      actorMargin: 60,
      boxMargin: 12,
      mirrorActors: false,
      messageAlign: "center",
    },
    state: { useMaxWidth: true },
  };
}
