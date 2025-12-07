"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function WidgetsShowcase() {
    const { t } = useLanguage(); // 't' objesini kullanıyoruz

    return (
        <section className="py-24 bg-white relative overflow-hidden">

            {/* Arka Plan Süsleri */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-3xl opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* SOL: Yazı */}
                    <div className="text-center lg:text-left">
                        <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">{t.widgets.tag}</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6 tracking-tight leading-tight">
                            {t.widgets.title_1} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-yellow-500">
                                {t.widgets.title_2}
                            </span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                            {t.widgets.description}
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {/* Tags dizisini map ile dönüyoruz */}
                            {(t.widgets.tags as string[]).map((tag: string) => (
                                <div key={tag} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full border border-slate-200 text-sm font-bold shadow-sm">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SAĞ: Widget Görselleri */}
                    <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">

                        {/* WIDGET 1: KARE (ARKADAŞ DURUMU - Sol Alt) */}
                        <motion.div
                            initial={{ rotate: -6, x: -40, y: 40 }}
                            whileInView={{ rotate: -3, x: -20, y: 20 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="absolute left-0 top-20 w-44 h-44 bg-white rounded-[2rem] p-5 flex flex-col justify-between shadow-2xl shadow-slate-200/50 border border-slate-100 z-10"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-2xl shadow-inner">😴</div>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                            <div>
                                <p className="text-slate-900 font-bold text-sm mb-1">{t.widgets.friend_status}</p>
                                <p className="text-slate-400 text-[10px] font-medium">{t.widgets.time_ago}</p>
                            </div>
                        </motion.div>

                        {/* WIDGET 2: ÇİÇEK ÇİZİMİ (SARI NOT KAĞIDI - Ortada/Üstte) */}
                        <motion.div
                            initial={{ scale: 0, rotate: 12 }}
                            whileInView={{ scale: 1, rotate: 6 }}
                            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
                            className="absolute top-0 w-40 h-40 bg-[#fffbeb] rounded-[2rem] p-4 shadow-2xl shadow-yellow-500/20 border-2 border-yellow-100 z-30 flex flex-col items-center justify-center"
                        >
                            {/* Gönderen */}
                            <div className="absolute top-4 left-4 flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase">{t.widgets.drawing_from}</span>
                            </div>

                            {/* SVG El Çizimi Çiçek */}
                            <svg viewBox="0 0 100 100" className="w-28 h-28 drop-shadow-sm mt-3" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                {/* Sap (Yeşil) */}
                                <path d="M50 55 Q50 80 50 90" className="stroke-emerald-500" />
                                {/* Yaprak Sol */}
                                <path d="M50 75 Q35 75 35 65 Q35 55 50 65" className="stroke-emerald-500" fill="rgba(16, 185, 129, 0.1)" />
                                {/* Yaprak Sağ */}
                                <path d="M50 70 Q65 70 65 60 Q65 50 50 60" className="stroke-emerald-500" fill="rgba(16, 185, 129, 0.1)" />

                                {/* Taç Yapraklar (Pembe - Papatya Formu) */}
                                <path d="M50 32 C50 15 35 15 35 32 C15 32 15 48 35 48 C35 65 50 65 50 48 C65 65 80 48 65 32 C80 15 65 15 50 32" className="stroke-rose-400" />

                                {/* Çiçek Göbeği (Sarı) */}
                                <circle cx="50" cy="40" r="6" className="stroke-amber-400 fill-amber-100" />
                            </svg>
                        </motion.div>

                        {/* WIDGET 3: GENİŞ (GRAFİK - Alt) */}
                        <motion.div
                            initial={{ y: 60, scale: 0.9 }}
                            whileInView={{ y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
                            className="absolute bottom-10 w-80 h-44 bg-slate-900 rounded-[2rem] p-6 flex flex-col justify-between shadow-2xl shadow-slate-900/20 z-20 border border-slate-800"
                        >
                            <div className="flex justify-between text-white/50 text-[10px] font-bold uppercase tracking-widest">
                                <span>{t.widgets.weekly_mood}</span>
                                <span className="text-brand-400">Moodies</span>
                            </div>
                            <div className="flex items-end justify-between gap-2 h-20">
                                {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                                    <div key={i} className="w-full bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-sm opacity-90" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </motion.div>

                        {/* WIDGET 4: KARE (MOTİVASYON - Sağ) */}
                        <motion.div
                            initial={{ rotate: 10, x: 40, y: 0 }}
                            whileInView={{ rotate: 5, x: 20, y: 10 }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                            className="absolute right-0 top-16 w-36 h-36 bg-gradient-to-br from-orange-400 to-pink-500 rounded-[2rem] p-5 flex flex-col items-center justify-center text-center shadow-2xl shadow-orange-500/20 z-0 text-white"
                        >
                            <span className="text-3xl mb-2 drop-shadow-md">🔥</span>
                            <p className="font-bold text-xs leading-tight mb-1">{t.widgets.streak_title}</p>
                            <p className="text-white/80 text-[10px] font-medium">{t.widgets.streak_subtitle}</p>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
