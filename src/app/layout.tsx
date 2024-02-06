import type { Metadata } from "next";
import { general } from "@/fonts";
import StoreProvider from "@/lib/store/storeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Learn",
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
      <body className={general.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
