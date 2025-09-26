export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: "1rem", backgroundColor: "green" }}>
      <p>Products Layout</p>
      <div style={{ backgroundColor: "white" }}>{children}</div>
    </div>
  );
}
