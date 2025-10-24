export function dynamicImages<T>(images: Record<string, () => T>): (name: string) => T {
  const entries = Object.entries(images);
  return (name: string) => {
    const image = entries.find(([key, value]) => key.includes(name));
    if (!image) {
      throw new Error(`"Cannot find the image "${name}"`)
    }
    return image[1]();
  }
}
