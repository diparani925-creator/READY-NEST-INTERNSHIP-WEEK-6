import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CityCare Smart Hospital Management System",
  description: "Modern EHR, appointment scheduling, digital prescriptions, patient portal, and hospital admin management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
    >
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100">{children}</body>
    </html>
  );
}
