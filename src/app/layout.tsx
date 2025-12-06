import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Google Font'u import ediyoruz
import "./globals.css";

// Context ve Componentler
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 2. Fontu yapılandırıyoruz (Dosya aramaya gerek yok, internetten çekecek)
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
        {/* 3. Font sınıfını body'e ekliyoruz */}
        <body className={inter.className}>

        <LanguageProvider>
            {/* Navbar en tepede */}
            <Navbar />

            {/* Sayfalar burada render olacak */}
            {children}

            {/* Footer en altta */}
            <Footer />
        </LanguageProvider>

        </body>
        </html>
    );
}
