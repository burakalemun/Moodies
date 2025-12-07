"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Brain, TrendingUp, Mic, Users, PenLine, Pencil, Image } from "lucide-react";
import { motion } from "framer-motion";

export default function BentoFeatures() {
    const { t } = useLanguage(); // 't' objesini kullanıyoruz

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        {t.features_bento.header_title}
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        {t.features_bento.header_desc}
                    </p>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[320px]">

                    {/* 1. KUTU: AI ANALİZ (Sol Büyük) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-2 rounded-[2rem] bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between overflow-hidden relative group min-h-[320px]"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-80 transition-opacity"></div>

                        <div>
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-500 mb-6">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.features_bento.ai_title}</h3>
                            <p className="text-slate-500 max-w-md font-medium">
                                {t.features_bento.ai_desc}
                            </p>
                        </div>

                        {/* AI Typing Effect */}
                        <div className="mt-8 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 font-mono text-sm text-slate-600 flex items-center gap-3 relative z-10">
                            <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse shrink-0"></div>
                            <span>
                                <span className="font-bold text-slate-900">{t.features_bento.ai_tag} </span>
                                {t.features_bento.ai_text}
                            </span>
                        </div>
                    </motion.div>

                    {/* 2. KUTU: DUYGUSAL TRENDLER (Sağ Dikey) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-[2rem] bg-green-50 border border-green-100 flex flex-col justify-between overflow-hidden relative min-h-[320px]"
                    >
                        {/* İçerik */}
                        <div className="relative z-10 p-8 pb-0">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm text-green-600">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features_bento.trends_title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                {t.features_bento.trends_desc}
                            </p>
                        </div>

                        {/* Grafik Animasyonu */}
                        <div className="relative w-full h-40 mt-auto">
                            <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4"/>
                                        <stop offset="100%" stopColor="#f0fdf4" stopOpacity="0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0,90 C50,90 80,40 150,40 S250,100 300,70 V120 H0 Z" fill="url(#greenGradient)" />
                                <path d="M0,90 C50,90 80,40 150,40 S250,100 300,70" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" className="drop-shadow-sm"/>
                            </svg>

                            {/* Emojiler */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                                className="absolute left-[46%] top-[25%] -translate-x-1/2"
                            >
                                <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-lg border border-green-100 relative z-10">
                                    🤩
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                                className="absolute right-[-2%] top-[55%] -translate-x-1/2"
                            >
                                <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-lg border border-green-100 relative z-10">
                                    🙂
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 3. KUTU: YARATICI GÜNLÜK (4'e Bölünmüş - Animasyonlu) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-[2rem] bg-orange-50 border border-orange-100 p-6 flex flex-col relative overflow-hidden min-h-[320px]"
                    >
                        <h3 className="text-lg font-bold text-slate-900 text-center mb-4">
                            {t.features_bento.creative_title}
                        </h3>

                        {/* 4'lü Grid Yapısı */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full w-full">

                            {/* 1. METİN */}
                            <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-2 shadow-sm border border-orange-100/50">
                                <div className="text-orange-500 mb-2"><PenLine size={20} /></div>
                                <div className="flex flex-col gap-1.5 w-8">
                                    <motion.div animate={{ width: ["0%", "100%", "100%"] }} transition={{ repeat: Infinity, duration: 2, times: [0, 0.5, 1] }} className="h-1 bg-orange-200 rounded-full w-full" />
                                    <motion.div animate={{ width: ["0%", "80%", "80%"] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2, times: [0, 0.5, 1] }} className="h-1 bg-orange-200 rounded-full w-full" />
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-wide">{t.features_bento.act_write}</span>
                            </div>

                            {/* 2. SES */}
                            <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-2 shadow-sm border border-orange-100/50">
                                <div className="text-orange-500 mb-2"><Mic size={20} /></div>
                                <div className="flex gap-0.5 items-end h-3">
                                    {[1,2,3,4].map(i => (
                                        <motion.div key={i} animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }} className="w-1 bg-orange-300 rounded-full" />
                                    ))}
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-wide">{t.features_bento.act_speak}</span>
                            </div>

                            {/* 3. ÇİZİM */}
                            <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-2 shadow-sm border border-orange-100/50">
                                <div className="text-orange-500 mb-1 relative">
                                    <motion.div animate={{ x: [0, 5, 0, -5, 0], y: [0, -2, 0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                        <Pencil size={18} />
                                    </motion.div>
                                    <svg className="absolute top-4 left-0 w-6 h-6 overflow-visible" viewBox="0 0 20 20">
                                        <motion.path d="M0,5 Q5,15 10,5 T20,5" fill="none" stroke="#fdba74" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
                                    </svg>
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 mt-3 uppercase tracking-wide">{t.features_bento.act_draw}</span>
                            </div>

                            {/* 4. MEDYA */}
                            <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-2 shadow-sm border border-orange-100/50 overflow-hidden">
                                <div className="relative">
                                    <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-orange-500 z-10 relative">
                                        <Image size={20} />
                                    </motion.div>
                                    <motion.div animate={{ opacity: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }} className="absolute inset-0 bg-orange-200 rounded-full blur-sm" />
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-wide">{t.features_bento.act_add}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 4. KUTU: ARKADAŞ AKTİVİTESİ (Sağ Geniş) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-2 rounded-[2rem] bg-white border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between shadow-sm gap-8 min-h-[320px]"
                    >
                        <div className="max-w-xs text-center md:text-left">
                            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-6 mx-auto md:mx-0">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.features_bento.friends_title}</h3>
                            <p className="text-slate-500 font-medium">
                                {t.features_bento.friends_desc}
                            </p>
                        </div>

                        {/* Arkadaş Listesi Kartları */}
                        <div className="flex flex-col gap-3 w-full max-w-xs">
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl">😊</div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-900">Gökdeniz</p>
                                    <p className="text-[10px] text-slate-500">{t.features_bento.friend_1_time}</p>
                                </div>
                                <span className="text-[10px] font-bold bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">{t.features_bento.friend_1_mood}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 opacity-60">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">😴</div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-900">Emirhan</p>
                                    <p className="text-[10px] text-slate-500">{t.features_bento.friend_2_time}</p>
                                </div>
                                <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{t.features_bento.friend_2_mood}</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
