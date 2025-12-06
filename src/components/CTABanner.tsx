"use client";
import { Smile } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CTABanner() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto bg-brand-500 rounded-[3rem] relative overflow-hidden shadow-2xl shadow-brand-500/30">

                {/* ARKA PLAN DESENİ */}
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
                </div>

                <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-8 py-12 lg:p-16">

                    {/* --- SOL: İKNA METNİ --- */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 rounded-full text-white text-sm font-medium">
                            <Smile size={16} />
                            <span>{t.cta_banner.user_count}</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                            {t.cta_banner.title_1} <br />
                            <span className="text-brand-100">{t.cta_banner.title_2}</span>
                        </h2>

                        <p className="text-brand-50 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                            {t.cta_banner.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-white text-brand-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-all hover:-translate-y-1 shadow-xl flex items-center justify-center gap-3">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.23-3.14-2.47-1.72-2.48-2.92-6.52-1.22-9.45 1.07-1.87 2.96-2.95 5.06-2.95 1.54 0 2.87 1.05 3.75 1.05.88 0 2.53-1.28 4.25-1.09 1.45.06 2.57.59 3.29 1.63-2.65 1.57-2.18 5.76.62 6.95-.5 1.49-1.2 2.98-2.32 4.62zm-3.27-14.8c.68-1.2 1.14-2.86.99-4.52-1.46.12-3.23 1.03-4.29 2.29-.63.75-1.18 2.08-1.04 3.76 1.64.13 3.3-1.03 4.34-1.53z"/></svg>
                                {t.cta_banner.button}
                            </button>
                        </div>

                        <p className="text-brand-200 text-xs font-medium">
                            {t.cta_banner.subtext}
                        </p>
                    </div>

                    {/* --- SAĞ: TELEFON GÖRSELİ (Peeking Effect) --- */}
                    <div className="relative h-[400px] lg:h-[500px] flex items-end justify-center lg:justify-end pointer-events-none">
                        <div className="relative w-64 h-[500px] bg-white rounded-t-[3rem] border-x-8 border-t-8 border-brand-900 shadow-2xl transform translate-y-12 lg:translate-y-20 lg:rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                            <div className="w-full h-full bg-slate-50 rounded-t-[2.5rem] overflow-hidden relative">
                                <div className="absolute inset-0 flex flex-col items-center pt-10 px-4 space-y-4">
                                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-white text-3xl">😊</div>
                                    <div className="w-full h-4 bg-slate-200 rounded-full"></div>
                                    <div className="w-3/4 h-4 bg-slate-200 rounded-full"></div>
                                    <div className="w-full p-4 bg-white rounded-2xl shadow-sm border border-slate-100 mt-8">
                                        <div className="w-full h-20 bg-brand-50 rounded-xl"></div>
                                    </div>
                                </div>
                                {/* Buraya Resim Koymak İstersen: <img src="/cta-app-screen.png" className="w-full h-full object-cover object-top" /> */}
                            </div>
                        </div>
                        <div className="absolute right-12 bottom-0 w-64 h-[400px] bg-brand-200 rounded-t-[3rem] opacity-50 transform translate-y-12 rotate-[6deg] -z-10 hidden lg:block"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
