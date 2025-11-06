import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// --- LIGHTGALLERY CSS IMPORTS ---
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// --------------------------------

import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./footer";
import Navigation from "./navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samathi Lake",
  description: "Escape • Relax • Explore at Samathi Lake, Phnom Penh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <html lang="en">
        <body className={`${inter.className} bg-light text-dark`}>{children}</body>
      </html>
      <Footer />
    </>
  );
}