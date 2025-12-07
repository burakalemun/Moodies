"use client";

import Navbar from "@/components/Navbar"; // Navbar'ı buradan da silebilirsin aslında, Layout'ta varsa. Ama kalsın şimdilik.
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FriendshipFlow from "@/components/FriendshipFlow";
import Features from "@/components/Features";
import MoodDemo from "@/components/MoodDemo";
import StickyStory from "@/components/StickyStory";
import BentoFeatures from "@/components/BentoFeatures";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import AnimatedBackground from "@/components/AnimatedBackground";
import WidgetsShowcase from "@/components/WidgetsShowcase";
import AppSimulator from "@/components/AppSimulator";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-100 relative">
            <AnimatedBackground />

            {/* Navbar Layout'ta varsa buradakini silebilirsin, yoksa kalsın */}
            {/* <Navbar /> */}

            <Hero />
            <Marquee />

            <AppSimulator />


            {/*<FriendshipFlow />*/}
            {/*<Features />*/}
            <StickyStory />
            <BentoFeatures />

            <WidgetsShowcase />

            <Testimonials />
            <FAQ />
            <CTABanner />

            {/* Footer Layout'ta olacağı için buradan silindi */}
        </main>
    );
}
