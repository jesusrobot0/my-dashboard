import { Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen p-8 flex justify-between gap-4">
      <Sidebar />
      <div className="w-3/4 px-4 py-8 ">{children}</div>
    </div>
  );
}
