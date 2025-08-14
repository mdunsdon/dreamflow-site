import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DreamFlow Financial Coaching",
  description: "Practical money systems + somatic healing so your finances feel safe and actionable.",
  openGraph: {
    title: "DreamFlow Financial Coaching",
    description: "Practical money systems + somatic healing so your finances feel safe and actionable.",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
