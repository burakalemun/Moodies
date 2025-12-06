import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// YENİ OLUŞTURDUĞUMUZ BİLEŞENİ ÇAĞIRIYORUZ
import { Providers } from "@/components/Providers";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Moodies",
    description: "Duygularını Yönet, Kendini Keşfet.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>

        {/* ARTIK BURADA "Providers" KULLANIYORUZ */}
        <Providers>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </Providers>

        </body>
        </html>
    );
}
