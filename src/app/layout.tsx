import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// YENİ OLUŞTURDUĞUMUZ BİLEŞENİ ÇAĞIRIYORUZ
import { Providers } from "@/components/Providers";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Moodies — Duygularını Yönet, Kendini Keşfet",
    description: "Moodies, yapay zeka destekli duygu takibi ve sosyal günlük uygulaması. Arkadaşlarınla bağlan, kendini keşfet.",
    metadataBase: new URL("https://moodies.app"),
    openGraph: {
        title: "Moodies — Duygularını Yönet, Kendini Keşfet",
        description: "Yapay zeka destekli duygu takibi ve sosyal günlük uygulaması.",
        url: "https://moodies.app",
        siteName: "Moodies",
        images: [
            {
                url: "/Moodies-logo.png",
                width: 512,
                height: 512,
                alt: "Moodies Logo",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Moodies — Duygularını Yönet, Kendini Keşfet",
        description: "Yapay zeka destekli duygu takibi ve sosyal günlük uygulaması.",
        images: ["/Moodies-logo.png"],
    },
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
                    <CookieConsent />
                </Providers>

            </body>
        </html>
    );
}
