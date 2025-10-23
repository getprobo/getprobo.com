export const isClient = () => {
  return !import.meta.env.SSR
}
