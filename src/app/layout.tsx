import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Designer Portfolio | SaaS, Dashboards & Design Systems",
  description: "Product Designer specializing in SaaS, dashboards, mobile apps, and design systems with clean dev-ready execution. I design clear, scalable digital products that teams can build fast.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "SaaS Design",
    "Dashboard Design",
    "Mobile App Design",
    "Design Systems",
    "UX/UI",
    "Design Consultant",
    "Dev-ready Design"
  ],
  authors: [{ name: "Product Designer" }],
  creator: "Product Designer",
  openGraph: {
    title: "Product Designer Portfolio | SaaS, Dashboards & Design Systems",
    description: "I design clear, scalable digital products that teams can build fast. Specializing in SaaS, dashboards, mobile apps, and design systems.",
    url: "https://your-portfolio-url.com",
    siteName: "Product Designer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Designer Portfolio | SaaS, Dashboards & Design Systems",
    description: "I design clear, scalable digital products that teams can build fast. Specializing in SaaS, dashboards, mobile apps, and design systems.",
    creator: "@your-twitter-handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
