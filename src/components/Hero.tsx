"use client";

import Image from "next/image"; // <--- BURAYI EKLEDİK
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden relative">
            {/* Arka Plan Süsleri */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* SOL: Yazılar */}
                <div className="text-center lg:text-left space-y-8">
                    <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-slate-600">{t.hero.badge}</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                        {t.hero.title_1} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">
                          {t.hero.title_2}
                        </span>
                    </h1>

                    <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-brand-500/30 transition-all hover:-translate-y-1">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.23-3.14-2.47-1.72-2.48-2.92-6.52-1.22-9.45 1.07-1.87 2.96-2.95 5.06-2.95 1.54 0 2.87 1.05 3.75 1.05.88 0 2.53-1.28 4.25-1.09 1.45.06 2.57.59 3.29 1.63-2.65 1.57-2.18 5.76.62 6.95-.5 1.49-1.2 2.98-2.32 4.62zm-3.27-14.8c.68-1.2 1.14-2.86.99-4.52-1.46.12-3.23 1.03-4.29 2.29-.63.75-1.18 2.08-1.04 3.76 1.64.13 3.3-1.03 4.34-1.53z"/></svg>
                            {t.hero.cta}
                        </button>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-500">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200"></div>
                            ))}
                        </div>
                        <p>{t.hero.users}</p>
                    </div>
                </div>

                {/* SAĞ: Görsel Şov */}
                <div className="relative mx-auto lg:mr-0">
                    {/* Telefon Mockup */}
                    <div className="relative z-10 w-[300px] h-[600px] bg-white rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden mx-auto">
                        {/* DÜZELTME BURADA: Yazı yerine Image bileşeni geldi */}
                        <Image
                            src="/hero-app.png"
                            alt="Moodies Uygulama Arayüzü"
                            fill // Ebeveyn div'in boyutlarını (300x600) tamamen kaplar
                            className="object-cover" // Resmi esnetip bozmadan kırparak sığdırır
                            priority // Sayfa açılır açılmaz yüklenmesi için (LCP optimizasyonu)
                        />
                    </div>

                    {/* BİLDİRİM 1 */}
                    <div className="absolute top-24 -left-12 lg:-left-24 z-20 animate-float">
                        <div className="bg-white/80 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-white/40 w-72 transform -rotate-6">
                            <div className="flex items-center justify-between mb-2 opacity-60">
                                <div className="flex items-center gap-1.5">
                                    {/* LOGO DEĞİŞİKLİĞİ BURADA */}
                                    <Image
                                        src="/Moodies-app-logo.png"
                                        alt="Moodies Icon"
                                        width={20}
                                        height={20}
                                        className="rounded-md"
                                    />
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-700">Moodies</span>
                                </div>
                                <span className="text-[10px] text-slate-500">Now</span>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0"></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900">{t.hero.notif_1_title}</p>
                                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">{t.hero.notif_1_desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BİLDİRİM 2 */}
                    <div className="absolute bottom-40 -right-12 lg:-right-20 z-20 animate-float-delayed">
                        <div className="bg-white/80 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-white/40 w-72 transform rotate-6">
                            <div className="flex items-center justify-between mb-2 opacity-60">
                                <div className="flex items-center gap-1.5">
                                    {/* LOGO DEĞİŞİKLİĞİ BURADA */}
                                    <Image
                                        src="/Moodies-app-logo.png"
                                        alt="Moodies Icon"
                                        width={20}
                                        height={20}
                                        className="rounded-md"
                                    />
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-700">Moodies</span>
                                </div>
                                <span className="text-[10px] text-slate-500">2m ago</span>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 flex-shrink-0"></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900">{t.hero.notif_2_title}</p>
                                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">{t.hero.notif_2_desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
