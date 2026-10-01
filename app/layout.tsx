import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/site/Navbar";
import Intro from "@/components/site/Intro";
import Footer from "@/components/site/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "JAN WORKS — Operations · Systems · Technology",
  description:
    "Israel Jan builds CRM systems, workflow automation, websites, digital systems and software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Intro />
        <Navbar />

        <main>{children}</main>

        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
