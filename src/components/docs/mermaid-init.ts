import type mermaidType from "mermaid";

let mermaidModule: typeof mermaidType | null = null;

function themeFromDocument(): "default" | "dark" {
  const htmlTheme = document.documentElement.getAttribute("data-theme");
  const bodyTheme = document.body.getAttribute("data-theme");
  const dataTheme = htmlTheme || bodyTheme;
  return dataTheme === "dark" ? "dark" : "default";
}

async function getMermaid() {
  if (!mermaidModule) {
    const mod = await import("mermaid");
    mermaidModule = mod.default;
    mermaidModule.initialize({
      startOnLoad: false,
      theme: themeFromDocument(),
      securityLevel: "strict",
    });
  }
  return mermaidModule;
}

export async function renderMermaidDiagrams(root: ParentNode = document) {
  const nodes = root.querySelectorAll("pre.mermaid:not([data-processed])");
  if (nodes.length === 0) return;

  const mermaid = await getMermaid();
  mermaid.initialize({ theme: themeFromDocument() });

  for (const node of nodes) {
    if (!(node instanceof HTMLPreElement)) continue;
    const definition = node.textContent?.trim() ?? "";
    if (!definition) continue;
    if (!node.dataset.diagram) node.dataset.diagram = definition;

    const renderId = `mermaid-${Math.random().toString(36).slice(2, 11)}`;
    try {
      const { svg } = await mermaid.render(renderId, definition);
      node.innerHTML = svg;
      node.dataset.processed = "true";
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown rendering error";
      node.dataset.processed = "true";
      node.textContent = "";
      node.classList.add("mermaid-error");
      const strong = document.createElement("strong");
      strong.textContent = "Could not render diagram.";
      node.append(strong, " ", message);
    }
  }
}

let listenersBound = false;

export function bindMermaidLifecycle() {
  if (typeof document === "undefined" || listenersBound) return;
  listenersBound = true;

  const run = () => {
    void renderMermaidDiagrams();
  };

  run();
  document.addEventListener("astro:page-load", run);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-theme"
      ) {
        document
          .querySelectorAll("pre.mermaid[data-processed]")
          .forEach((el) => {
            if (!(el instanceof HTMLPreElement)) return;
            const definition = el.dataset.diagram;
            if (definition) el.textContent = definition;
            delete el.dataset.processed;
            el.classList.remove("mermaid-error");
          });
        run();
        break;
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
}
