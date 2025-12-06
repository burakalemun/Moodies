"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FileText } from "lucide-react";

export default function TermsPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-32 pb-20 min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-4 text-blue-600">
                        <FileText size={32} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        {t.terms.title}
                    </h1>
                    <p className="text-slate-500 font-medium">
                        {t.terms.last_updated}
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 border-b border-slate-100 pb-8">
                        {t.terms.intro}
                    </p>

                    <div className="space-y-8">
                        {(t.terms.sections as any[]).map((section: any, index: number) => (
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
