export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div style={{ border: "1px solid green" }}>{notifications}</div>
      <div style={{ border: "1px solid red" }}>{revenue}</div>
      <div style={{ border: "1px solid blue" }}>{users}</div>
    </>
  );
}
