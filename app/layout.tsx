import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/design/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import NavbarNew from "@/components/ui/NavbarNew";
import Footer from "@/components/ui/Footer";

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})


export const metadata: Metadata = {
  title: "Aricin Rotarius",
  description: "Full-Stack Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}

      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
