"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Brain, TrendingUp, Mic, Users, PenLine, Pencil, Image, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function BentoFeatures() {
    const { t } = useLanguage();

    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold px-4 py-2 rounded-full mb-5">
                        <Sparkles size={12} />
                        {t.features_bento.header_title}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        {t.features_bento.header_title}
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        {t.features_bento.header_desc}
                    </p>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto md:auto-rows-[320px]">

                    {/* 1. AI ANALİZ — Sol Büyük */}
                    <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="md:col-span-2 rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-500 to-emerald-400 p-8 flex flex-col justify-between overflow-hidden relative group min-h-[320px] shadow-xl shadow-brand-500/25"
                    >
                        {/* Dekor */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-400/20 rounded-full blur-3xl -ml-10 -mb-10" />
                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t.features_bento.ai_title}</h3>
                            <p className="text-brand-100 max-w-md font-medium leading-relaxed">
                                {t.features_bento.ai_desc}
                            </p>
                        </div>

                        {/* AI mesaj kutusu */}
                        <div className="relative z-10 mt-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-start gap-3">
                            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Zap size={14} className="text-white" />
                            </div>
                            <div>
                                <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-1">
                                    {t.features_bento.ai_tag}
                                </p>
                                <p className="text-white text-sm font-medium leading-snug">
                                    {t.features_bento.ai_text}
                                </p>
                            </div>
                            <div className="flex items-center gap-1 ml-auto flex-shrink-0 self-end">
                                <motion.div
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                                    className="w-1.5 h-1.5 bg-white rounded-full"
                                />
                                <motion.div
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                                    className="w-1.5 h-1.5 bg-white rounded-full"
                                />
                                <motion.div
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                                    className="w-1.5 h-1.5 bg-white rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. DUYGUSAL TRENDLER — Sağ Dikey */}
                    <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="rounded-[2rem] bg-white border border-slate-200 flex flex-col justify-between overflow-hidden relative min-h-[320px] shadow-sm hover:shadow-lg transition-shadow"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-60" />

                        <div className="relative z-10 p-8 pb-0">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 text-green-600">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features_bento.trends_title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                {t.features_bento.trends_desc}
                            </p>
                        </div>

                        {/* Grafik */}
                        <div className="relative w-full h-40 mt-auto">
                            <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="greenGradient2" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,90 C50,90 80,40 150,40 S250,100 300,70 V120 H0 Z" fill="url(#greenGradient2)" />
                                <path d="M0,90 C50,90 80,40 150,40 S250,100 300,70" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                            </svg>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute left-[46%] top-[25%] -translate-x-1/2"
                            >
                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-md text-lg border border-green-100">
                                    🤩
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute right-[0%] top-[50%] -translate-x-1/2"
                            >
                                <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-md text-lg border border-green-100">
                                    🙂
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 3. YARATICI GÜNLÜK */}
                    <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="rounded-[2rem] bg-white border border-slate-200 p-5 flex flex-col relative overflow-hidden min-h-[320px] shadow-sm hover:shadow-lg transition-shadow"
                    >
                        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full blur-2xl -ml-6 -mt-6 opacity-70" />

                        <div className="relative z-10 mb-3 flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
                                <PenLine size={20} />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 leading-snug">
                                {t.features_bento.creative_title}
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-2 flex-1 relative z-10 min-h-0">
                            {/* METİN */}
                            <div className="bg-orange-50 border border-orange-100 rounded-xl flex flex-col items-center justify-center p-2 gap-1.5">
                                <PenLine size={18} className="text-orange-500" />
                                <div className="flex flex-col gap-1 w-full px-1">
                                    <motion.div animate={{ width: ["40%", "100%", "100%", "40%"] }} transition={{ repeat: Infinity, duration: 3 }}
                                        className="h-1 bg-orange-300 rounded-full" />
                                    <motion.div animate={{ width: ["20%", "75%", "75%", "20%"] }} transition={{ repeat: Infinity, duration: 3, delay: 0.3 }}
                                        className="h-1 bg-orange-200 rounded-full" />
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{t.features_bento.act_write}</span>
                            </div>

                            {/* SES */}
                            <div className="bg-red-50 border border-red-100 rounded-xl flex flex-col items-center justify-center p-2 gap-1.5">
                                <Mic size={18} className="text-red-500" />
                                <div className="flex gap-0.5 items-end h-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <motion.div key={i}
                                            animate={{ height: [4, 10 + i * 2, 4] }}
                                            transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.1 }}
                                            className="w-1 bg-red-400 rounded-full"
                                        />
                                    ))}
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{t.features_bento.act_speak}</span>
                            </div>

                            {/* ÇİZİM */}
                            <div className="bg-purple-50 border border-purple-100 rounded-xl flex flex-col items-center justify-center p-2 gap-1.5">
                                <div className="relative">
                                    <motion.div animate={{ x: [0, 4, 0, -4, 0], y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                        <Pencil size={18} className="text-purple-500" />
                                    </motion.div>
                                    <svg className="absolute top-4 left-0 w-6 h-4 overflow-visible" viewBox="0 0 20 14">
                                        <motion.path d="M0,7 Q5,0 10,7 T20,7" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round"
                                            initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
                                    </svg>
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mt-2">{t.features_bento.act_draw}</span>
                            </div>

                            {/* MEDYA */}
                            <div className="bg-blue-50 border border-blue-100 rounded-xl flex flex-col items-center justify-center p-2 gap-1.5">
                                <div className="relative">
                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.5 }}
                                        className="text-blue-500 relative z-10">
                                        <Image size={18} />
                                    </motion.div>
                                    <motion.div animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.3, 0.8] }}
                                        transition={{ repeat: Infinity, duration: 2.5, delay: 0.3 }}
                                        className="absolute inset-0 bg-blue-200 rounded-full blur-sm" />
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{t.features_bento.act_add}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 4. ARKADAŞ AKTİVİTESİ — Sağ Geniş */}
                    <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="md:col-span-2 rounded-[2rem] bg-white border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between shadow-sm hover:shadow-lg transition-shadow gap-8 min-h-[320px] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-100 rounded-full blur-3xl -mr-12 -mt-12 opacity-50" />

                        <div className="max-w-xs text-center md:text-left relative z-10">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 mx-auto md:mx-0">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.features_bento.friends_title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                {t.features_bento.friends_desc}
                            </p>
                        </div>

                        {/* Arkadaş Kartları */}
                        <div className="flex flex-col gap-3 w-full max-w-xs relative z-10">
                            {/* Online arkadaş */}
                            <motion.div
                                animate={{ x: [0, 2, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100 shadow-sm"
                            >
                                <div className="relative">
                                    <div className="w-11 h-11 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xl">😊</div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-slate-900">Gökdeniz</p>
                                    <p className="text-[10px] text-slate-500">{t.features_bento.friend_1_time}</p>
                                </div>
                                <span className="text-[10px] font-bold bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full border border-yellow-200 flex-shrink-0">
                                    {t.features_bento.friend_1_mood}
                                </span>
                            </motion.div>

                            {/* Offline arkadaş */}
                            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="relative">
                                    <div className="w-11 h-11 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-xl opacity-70">😴</div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-slate-300 rounded-full border-2 border-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-slate-500">Emirhan</p>
                                    <p className="text-[10px] text-slate-400">{t.features_bento.friend_2_time}</p>
                                </div>
                                <span className="text-[10px] font-bold bg-blue-50 text-blue-500 px-2.5 py-1 rounded-full border border-blue-100 flex-shrink-0">
                                    {t.features_bento.friend_2_mood}
                                </span>
                            </div>

                            {/* Bildirim satırı */}
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-brand-50 rounded-xl border border-brand-100">
                                <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse flex-shrink-0" />
                                <p className="text-xs text-brand-700 font-semibold">3 arkadaşın bugün mood girişi yaptı</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
