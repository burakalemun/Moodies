"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
    return (
        <LanguageProvider>
            <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-100 relative">
                <AnimatedBackground />

                <Hero />
                <Marquee />
                <Features />
                <Testimonials />
                <FAQ />
                <CTABanner />
            </main>
        </LanguageProvider>
    );
}
