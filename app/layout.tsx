import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['200','300','400','600','700','800','900'],
});

const ORIGIN_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "lexisPDF - AI Powered PDF Summarisation",
  description: "Effortlessly summarise your PDF documents using advanced AI technology. Enhance productivity and streamline your workflow with lexisPDF.",
  openGraph: {
    images: [
      {
        url: 'https://lexispdf.vercel.app/opengraph-image.png',
        alt: 'LexisPDF - AI-Powered PDF Summarization',
      },
    ],
  },
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${fontSans.variable} font-sans antialiased`}
        >
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </body>
      </html> 
    </ClerkProvider>
  );
}
