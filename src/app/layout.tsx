import type { Metadata } from "next";
import { general } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Learn    ",
    default: "Next Learn",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={general.className}>{children}</body>
    </html>
  );
}
