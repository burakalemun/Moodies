"use client";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
    const { t } = useLanguage();

    const faqs = [
        { question: t.faq.q1, answer: t.faq.a1 },
        { question: t.faq.q2, answer: t.faq.a2 },
        { question: t.faq.q3, answer: t.faq.a3 },
        { question: t.faq.q4, answer: t.faq.a4 },
    ];

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-slate-900">{t.faq.title}</h2>
                    <p className="mt-4 text-slate-500">
                        {t.faq.subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white rounded-2xl border border-slate-200 open:border-brand-200 open:ring-4 open:ring-brand-50 transition-all cursor-pointer">
                            <summary className="flex items-center justify-between p-6 font-bold text-slate-900 list-none select-none">
                                {faq.question}
                                <ChevronDown className="text-slate-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" />
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
