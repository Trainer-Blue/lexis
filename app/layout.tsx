import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['200','300','400','600','700','800','900'],
});

export const metadata: Metadata = {
  title: "lexisPDF - AI Powered PDF Summarisation",
  description: "Effortlessly summarise your PDF documents using advanced AI technology. Enhance productivity and streamline your workflow with lexisPDF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
