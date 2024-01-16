import { Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen p-8 flex justify-between gap-4">
      <Sidebar />
      <main className="w-3/4">{children}</main>
    </div>
  );
}
