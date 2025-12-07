"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { BarChart3, MapPin, Heart } from "lucide-react";

export default function StickyStory() {
    const { language } = useLanguage();
    const [activeStep, setActiveStep] = useState(0);

    const storySteps = [
        {
            id: 0,
            title: language === 'tr' ? "1. Yalnızlık Döngüsü" : "1. The Loop",
            desc: language === 'tr'
                ? "3 gün üst üste 'Üzgün' veya 'Stresli' girişi yaptın. Moodies yapay zekası bu negatif deseni fark eder."
                : "You logged 'Sad' for 3 days. Moodies AI detects the pattern.",
            bg: "bg-red-100",
            color: "text-red-600"
        },
        {
            id: 1,
            title: language === 'tr' ? "2. Moodies Devrede" : "2. Intervention",
            desc: language === 'tr'
                ? "Sistem, seçtiğin en yakın arkadaşına otomatik bir bildirim gönderir: 'Can'ın sana ihtiyacı olabilir.'"
                : "System notifies your best friend: 'Can might need you right now.'",
            bg: "bg-brand-100",
            color: "text-brand-600"
        },
        {
            id: 2,
            title: language === 'tr' ? "3. Gerçek Bağlantı" : "3. Real Connection",
            desc: language === 'tr'
                ? "Arkadaşın arar, buluşursunuz. O anı fotoğraflayıp 'Ortak Anı' olarak kaydedersiniz."
                : "Your friend calls, you meet up. You save that moment as a 'Shared Memory'.",
            bg: "bg-orange-100",
            color: "text-orange-600"
        }
    ];

    return (
        <section className="pt-12 pb-12 lg:pt-24 lg:pb-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- BAŞLIK --- */}
                <div className="text-center mb-8 lg:mb-24">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        {language === 'tr' ? "Yalnızlık Döngüsünü Kır." : "Break the Cycle."}
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        {language === 'tr' ? "Moodies'in en güçlü özelliğiyle tanışın." : "Meet the most powerful feature of Moodies."}
                    </p>
                </div>

                {/* --- GRID --- */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">

                    {/* --- SOL: METİNLER --- */}
                    {/* DÜZELTME: gap-6 yaptık (Çok daha sıkı), Masaüstünde gap-[50vh] korundu */}
                    <div className="relative z-10 flex flex-col gap-2 lg:gap-[50vh] pb-0 lg:pb-[30vh]">
                        {storySteps.map((step, index) => (
                            <div key={step.id} className="transition-opacity duration-500">
                                <motion.div
                                    onViewportEnter={() => setActiveStep(index)}
                                    viewport={{ margin: "-50% 0px -50% 0px" }}
                                    className={`flex flex-col justify-center p-0 lg:p-8 rounded-3xl lg:border-2 transition-all duration-500 ${
                                        activeStep === index
                                            ? "opacity-100 lg:border-slate-100 lg:bg-slate-50 lg:shadow-lg lg:scale-100"
                                            : "opacity-100 lg:opacity-40 border-transparent lg:scale-95"
                                    }`}
                                >
                                    {/* Mobilde border ve padding'i kaldırdım (p-0) ki daha doğal dursun */}
                                    <div className={`w-fit px-4 py-2 rounded-full ${step.bg} ${step.color} text-xs font-bold mb-3`}>
                                        ADIM {index + 1}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-4">
                                        {step.desc}
                                    </p>

                                    {/* Mobil Önizleme */}
                                    <div className="lg:hidden w-full aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-lg">
                                        {index === 0 && <ScreenStep1 />}
                                        {index === 1 && <ScreenStep2 />}
                                        {index === 2 && <ScreenStep3 />}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* --- SAĞ: TELEFON (Masaüstü Sticky) --- */}
                    <div className="hidden lg:flex sticky top-32 h-[800px] items-start justify-center pt-4">
                        <RealisticPhone activeStep={activeStep} />
                    </div>

                </div>
            </div>
        </section>
    );
}

// ------------------------------------------------------------------
// ALT BİLEŞENLER (Aynı)
// ------------------------------------------------------------------

function RealisticPhone({ activeStep }: { activeStep: number }) {
    return (
        <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[3.5rem] shadow-2xl border-[8px] border-slate-800 ring-4 ring-slate-900/10 overflow-hidden transition-all duration-500">
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
    return (
        <div className="w-full h-full bg-white flex flex-col p-6 pt-16">
            <h4 className="text-xl font-bold text-slate-900 mb-8">Mood Analizi</h4>
            <div className="bg-red-50 rounded-3xl p-6 border border-red-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                        <BarChart3 size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-red-400 font-bold uppercase">Tespit Edildi</p>
                        <p className="text-sm font-bold text-red-900">Negatif Döngü</p>
                    </div>
                </div>
                <div className="flex items-end justify-between h-32 gap-2 mt-4">
                    {[60, 40, 30, 30, 30].map((h, i) => (
                        <div key={i} className={`w-full rounded-t-lg ${i > 1 ? 'bg-red-500' : 'bg-red-200'}`} style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <p className="text-xs text-red-600/70 mt-4 text-center font-medium">Son 3 gündür modun düşük.</p>
            </div>
        </div>
    );
}

function ScreenStep2() {
    return (
        <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
            <div className="absolute top-20 w-full text-center text-white/90">
                <div className="text-6xl font-thin">14:02</div>
                <div className="text-sm font-medium mt-1 opacity-80">Cumartesi, 12 Aralık</div>
            </div>
            <div className="absolute top-64 left-4 right-4 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 text-left">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-white uppercase flex items-center gap-1">MOODIES</span>
                    <span className="text-[10px] text-white/80">Şimdi</span>
                </div>
                <p className="text-sm font-bold text-white mb-1">Burak'ın sana ihtiyacı var 🔔</p>
                <p className="text-xs text-white/90 leading-relaxed">3 gündür modu biraz düşük görünüyor. Onu arayıp bir kahveye çıkarmaya ne dersin?</p>
            </div>
        </div>
    );
}

function ScreenStep3() {
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
                    <p className="text-white text-sm">İyi ki varsın dostum! 🚀</p>
                </div>
                <div className="flex items-center gap-1 mt-4 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin size={10} /> Kadıköy
                </div>
            </div>
        </div>
    );
}
