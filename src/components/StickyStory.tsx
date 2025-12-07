"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { BarChart3, MapPin, Heart } from "lucide-react";

export default function StickyStory() {
    const { t, language } = useLanguage(); // 't' objesi burada önemli
    const [activeStep, setActiveStep] = useState(0);

    const storySteps = [
        {
            id: 0,
            title: t.sticky_story.step_1_title,
            desc: t.sticky_story.step_1_desc,
            bg: "bg-red-100",
            color: "text-red-600"
        },
        {
            id: 1,
            title: t.sticky_story.step_2_title,
            desc: t.sticky_story.step_2_desc,
            bg: "bg-brand-100",
            color: "text-brand-600"
        },
        {
            id: 2,
            title: t.sticky_story.step_3_title,
            desc: t.sticky_story.step_3_desc,
            bg: "bg-orange-100",
            color: "text-orange-600"
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- BAŞLIK (DÜZELTİLDİ) --- */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        {t.sticky_story.header_title}
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        {t.sticky_story.header_desc}
                    </p>
                </div>

                {/* --- GRID --- */}
                <div className="grid lg:grid-cols-2 gap-12 items-start relative">

                    {/* --- SOL: METİNLER --- */}
                    <div className="relative z-10 flex flex-col gap-[60vh] pb-[30vh]">
                        {storySteps.map((step, index) => (
                            <div key={step.id} className="transition-opacity duration-500">
                                <motion.div
                                    onViewportEnter={() => setActiveStep(index)}
                                    viewport={{ margin: "-50% 0px -50% 0px" }}
                                    className={`flex flex-col justify-center p-8 rounded-3xl border-2 transition-all duration-500 ${
                                        activeStep === index
                                            ? "opacity-100 border-slate-100 bg-slate-50 shadow-lg scale-100"
                                            : "opacity-40 border-transparent scale-95"
                                    }`}
                                >
                                    <div className={`w-fit px-4 py-2 rounded-full ${step.bg} ${step.color} text-sm font-bold mb-4 uppercase`}>
                                        {/* ADIM kelimesi dillerde farklı olabilir ama şimdilik TR/EN basit tuttum, istersen bunu da çeviriye alabiliriz */}
                                        {language === 'tr' ? `ADIM ${index + 1}` : `STEP ${index + 1}`}
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                        {step.desc}
                                    </p>

                                    {/* Mobil Önizleme */}
                                    <div className="lg:hidden mt-6 w-full aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden border-4 border-slate-800">
                                        {index === 0 && <ScreenStep1 />}
                                        {index === 1 && <ScreenStep2 />}
                                        {index === 2 && <ScreenStep3 />}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* --- SAĞ: TELEFON --- */}
                    <div className="hidden lg:flex sticky top-32 h-[800px] items-start justify-center pt-4">
                        <RealisticPhone activeStep={activeStep} />
                    </div>

                </div>
            </div>
        </section>
    );
}

// ------------------------------------------------------------------
// ALT BİLEŞENLER (Aynı kaldı)
// ------------------------------------------------------------------

function RealisticPhone({ activeStep }: { activeStep: number }) {
    return (
        <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[3.5rem] shadow-2xl border-[8px] border-slate-800 ring-4 ring-slate-900/10 overflow-hidden transition-all duration-500">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-3xl z-50 flex items-center justify-center gap-3 px-2">
                <div className="w-16 h-1 bg-slate-800/60 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-slate-800/60 rounded-full"></div>
            </div>
            <div className="relative w-full h-full bg-white overflow-hidden">
                {activeStep === 0 && <ScreenStep1 />}
                {activeStep === 1 && <ScreenStep2 />}
                {activeStep === 2 && <ScreenStep3 />}
            </div>
        </div>
    );
}

function ScreenStep1() {
    const { t } = useLanguage();
    return (
        <div className="w-full h-full bg-white flex flex-col p-6 pt-16">
            <h4 className="text-xl font-bold text-slate-900 mb-8">
                {t.sticky_story.screen_1_title}
            </h4>
            <div className="bg-red-50 rounded-3xl p-6 border border-red-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                        <BarChart3 size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-red-400 font-bold uppercase">
                            {t.sticky_story.screen_1_label}
                        </p>
                        <p className="text-sm font-bold text-red-900">
                            {t.sticky_story.screen_1_value}
                        </p>
                    </div>
                </div>
                <div className="flex items-end justify-between h-32 gap-2 mt-4">
                    {[60, 40, 30, 30, 30].map((h, i) => (
                        <div key={i} className={`w-full rounded-t-lg ${i > 1 ? 'bg-red-500' : 'bg-red-200'}`} style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <p className="text-xs text-red-600/70 mt-4 text-center font-medium">
                    {t.sticky_story.screen_1_desc}
                </p>
            </div>
        </div>
    );
}

function ScreenStep2() {
    const { t, language } = useLanguage();
    // Tarihi dile göre formatla
    const dateStr = new Date().toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' });

    return (
        <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
            <div className="absolute top-20 w-full text-center text-white/90">
                <div className="text-6xl font-thin">14:02</div>
                <div className="text-sm font-medium mt-1 opacity-80">{dateStr}</div>
            </div>
            <div className="absolute top-64 left-4 right-4 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 text-left">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-white uppercase flex items-center gap-1">
                         MOODIES
                    </span>
                    <span className="text-[10px] text-white/80">
                        {t.sticky_story.screen_2_time}
                    </span>
                </div>
                <p className="text-sm font-bold text-white mb-1">
                    {t.sticky_story.screen_2_notif_title}
                </p>
                <p className="text-xs text-white/90 leading-relaxed">
                    {t.sticky_story.screen_2_notif_desc}
                </p>
            </div>
        </div>
    );
}

function ScreenStep3() {
    const { t } = useLanguage();
    return (
        <div className="w-full h-full bg-slate-900 relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Heart size={80} className="text-red-500 fill-red-500 drop-shadow-2xl animate-pulse" />
            </div>

            <div className="absolute bottom-10 left-6 right-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900 z-10"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-slate-900 -ml-4 z-0"></div>
                    <span className="text-white text-sm font-bold ml-2">@burak & @can</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <p className="text-white text-sm">
                        {t.sticky_story.screen_3_note}
                    </p>
                </div>
                <div className="flex items-center gap-1 mt-4 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin size={10} />
                    {t.sticky_story.screen_3_location}
                </div>
            </div>
        </div>
    );
}
