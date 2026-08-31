type MdxJsxAttribute = {
  type: "mdxJsxAttribute";
  name: string;
  value?: string | { value?: string } | null;
};

type Walkable = {
  type: string;
  alt?: string | null;
  url?: string;
  name?: string;
  attributes?: MdxJsxAttribute[];
  children?: Walkable[];
  position?: { start?: { line?: number } };
};

function walk(node: Walkable, visit: (node: Walkable) => void) {
  visit(node);
  for (const child of node.children ?? []) {
    walk(child, visit);
  }
}

function attributeValue(attribute: MdxJsxAttribute | undefined): string | null {
  if (!attribute) {
    return null;
  }
  if (typeof attribute.value === "string") {
    return attribute.value;
  }
  if (attribute.value && typeof attribute.value.value === "string") {
    return attribute.value.value;
  }
  return "";
}

export function remarkRequireImageAlt() {
  return (
    tree: Walkable,
    file: { path?: string; fail: (reason: string) => void },
  ) => {
    const problems: string[] = [];

    walk(tree as Walkable, (node) => {
      const line = node.position?.start?.line;
      const at = line ? `:${line}` : "";

      if (node.type === "image") {
        if (!node.alt?.trim()) {
          problems.push(
            `${file.path ?? "content"}${at}: markdown image ${node.url ?? ""} is missing alt text`,
          );
        }
        return;
      }

      if (
        (node.type === "mdxJsxFlowElement" ||
          node.type === "mdxJsxTextElement") &&
        node.name === "img"
      ) {
        const alt = node.attributes?.find(
          (attribute) =>
            attribute.type === "mdxJsxAttribute" && attribute.name === "alt",
        );
        if (alt == null || attributeValue(alt) == null) {
          problems.push(
            `${file.path ?? "content"}${at}: <img> is missing an alt attribute`,
          );
        }
      }
    });

    if (problems.length > 0) {
      file.fail(
        `Images must have alt text so the collection does not regress.\n${problems.join("\n")}`,
      );
    }
  };
}
