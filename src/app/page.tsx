"use client";

import Navbar from "@/components/Navbar"; // Navbar'ı buradan da silebilirsin aslında, Layout'ta varsa. Ama kalsın şimdilik.
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-100 relative">
            <AnimatedBackground />

            {/* Navbar Layout'ta varsa buradakini silebilirsin, yoksa kalsın */}
            {/* <Navbar /> */}

            <Hero />
            <Marquee />
            <Features />
            <Testimonials />
            <FAQ />
            <CTABanner />

            {/* Footer Layout'ta olacağı için buradan silindi */}
        </main>
    );
}
