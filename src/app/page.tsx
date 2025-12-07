"use client";

import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StickyStory from "@/components/StickyStory"; // Telefonlu Hikaye
import BentoFeatures from "@/components/BentoFeatures"; // Yeni Bento Grid
import AppSimulator from "@/components/AppSimulator"; // Canlı Demo
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-100 relative overflow-x-hidden pt-32 md:pt-0">
            <AnimatedBackground />

            {/* Navbar zaten Layout'ta */}

            <Hero />
            <Marquee />
            <StickyStory />
            <BentoFeatures />
            <AppSimulator />
            <Testimonials />
            <FAQ />
            <CTABanner />
        </main>
    );
}
