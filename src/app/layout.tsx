import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL, SITE_URL } from "@/lib/data";
import { GradientOrbs } from "@/components/effects/gradient-orbs";
import { Particles } from "@/components/effects/particles";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { Grain } from "@/components/effects/grain";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Ahammadali Shaik — Senior Python Backend Developer, AI Engineer & AWS Developer with 7.4+ years building enterprise-grade applications, cloud-native systems, and next-generation AI products.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSONAL.name} — Senior Python & AI Engineer`,
    template: `%s — ${PERSONAL.name}`,
  },
  description,
  keywords: [
    "Ahammadali Shaik",
    "Senior Python Developer",
    "AI Engineer",
    "AWS Developer",
    "Django",
    "LangChain",
    "RAG",
    "Agentic AI",
    "Backend Engineer",
    "LLM Engineering",
  ],
  authors: [{ name: PERSONAL.name, url: SITE_URL }],
  creator: PERSONAL.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${PERSONAL.name} — Senior Python & AI Engineer`,
    description,
    siteName: PERSONAL.name,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} — Senior Python & AI Engineer`,
    description,
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <LoadingScreen />
        <GradientOrbs />
        <Particles />
        <Grain />
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
