"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-32 pb-20 min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Başlık */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-2xl mb-4 text-brand-600">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        {t.privacy.title}
                    </h1>
                    <p className="text-slate-500 font-medium">
                        {t.privacy.last_updated}
                    </p>
                </div>

                {/* İçerik Kartı */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 border-b border-slate-100 pb-8">
                        {t.privacy.intro}
                    </p>

                    <div className="space-y-8">
                        {/* TypeScript hatası alırsan maplediğimiz dizinin tipini any yapabilirsin geçici olarak */}
                        {(t.privacy.sections as any[]).map((section: any, index: number) => (
                            <section key={index}>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">
                                    {section.heading}
                                </h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {section.content}
                                </p>
                            </section>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
