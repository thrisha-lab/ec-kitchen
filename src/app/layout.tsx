import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EC Kitchen Appliances | Portable Kitchen Appliances in Tamil Nadu",
    template: "%s | EC Kitchen Appliances",
  },
  description:
    "Explore EC Kitchen Appliances for portable chapati, sevai and idiyappam machines designed for convenient traditional cooking across Tamil Nadu.",
  keywords: [
    "kitchen appliances",
    "kitchen appliances India",
    "portable kitchen appliances",
    "portable kitchen appliances India",
    "portable chapati machine",
    "chapati making machine",
    "portable sevai machine",
    "sevai making machine",
    "portable idiyappam machine",
    "idiyappam making machine",
    "sevai and idiyappam machine",
    "2 in 1 sevai idiyappam machine",
    "kitchen appliances in Tamil Nadu",
    "EC Kitchen Appliances",
  ],
  authors: [{ name: "EC Kitchen Appliances" }],
  openGraph: {
    title: "EC Kitchen Appliances | Portable Kitchen Appliances in Tamil Nadu",
    description:
      "Explore EC Kitchen Appliances for portable chapati, sevai and idiyappam machines designed for convenient traditional cooking across Tamil Nadu.",
    type: "website",
    siteName: "EC Kitchen Appliances",
  },
  twitter: {
    card: "summary_large_image",
    title: "EC Kitchen Appliances | Portable Kitchen Appliances in Tamil Nadu",
    description:
      "Explore EC Kitchen Appliances for portable chapati, sevai and idiyappam machines.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EC Kitchen Appliances",
    url: "https://eckitchenappliances.com",
    telephone: "+91 9791699990",
    email: "easykitchen@gmail.com",
    sameAs: [
      "https://www.youtube.com/channel/UC770Z5GvbxbUmWmgJR1yt2Q",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <TooltipProvider delayDuration={200}>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingActions />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
