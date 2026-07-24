import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700"],
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const SITE_URL = "https://snehprasad.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sneh Prasad — AI/ML Engineer & Full-Stack Developer",
    template: "%s · Sneh Prasad",
  },
  description:
    "Portfolio of Sneh Prasad — AI/ML engineer and full-stack developer specializing in predictive maintenance, deep learning, and production-ready web applications.",
  keywords: [
    "Sneh Prasad",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Predictive Maintenance",
    "Next.js Developer",
    "SRM Institute",
  ],
  authors: [{ name: "Sneh Prasad", url: SITE_URL }],
  creator: "Sneh Prasad",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Sneh Prasad — AI/ML Engineer & Full-Stack Developer",
    description:
      "AI/ML engineer and full-stack developer specializing in predictive maintenance, deep learning, and production-ready web applications.",
    siteName: "Sneh Prasad",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneh Prasad — AI/ML Engineer & Full-Stack Developer",
    description:
      "AI/ML engineer and full-stack developer specializing in predictive maintenance, deep learning, and production-ready web applications.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-base font-body antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
