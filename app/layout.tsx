import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Enterprise E-Commerce",
  description: "Modern minimal commerce experience"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="bg-white text-slate-900">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
