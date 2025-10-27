/**
 * Split an array into chunks of a given size
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size < 1) {
    throw new Error("chunk size must be greater than 0");
  }
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
