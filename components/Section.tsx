export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-3xl py-32 px-12 mb-4 ${className}`}>
      {children}
    </section>
  );
}
