export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mb-4 rounded-3xl px-12 py-32 ${className}`}>
      {children}
    </section>
  );
}
