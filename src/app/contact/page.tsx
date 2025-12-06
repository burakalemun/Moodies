"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Mail, AlertTriangle, ArrowRight } from "lucide-react";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-32 pb-20 min-h-screen bg-slate-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
                        {t.contact.title}
                    </h1>
                    <p className="text-lg text-slate-500">
                        {t.contact.subtitle}
                    </p>
                </div>

                {/* İletişim Kutusu */}
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-6">
                            <Mail size={32} />
                        </div>
                        <p className="text-slate-600 mb-6 font-medium">
                            {t.contact.email_text}
                        </p>
                        <a
                            href="mailto:support@moodies.app"
                            className="text-2xl font-bold text-slate-900 hover:text-brand-600 transition-colors border-b-2 border-brand-200 hover:border-brand-500 pb-1"
                        >
                            support@moodies.app
                        </a>
                    </div>
                </div>

                {/* HESAP SİLME ALANI (APPLE İÇİN ZORUNLU) - "Danger Zone" Görünümü */}
                <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1 text-red-500">
                            <AlertTriangle size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-red-900 mb-2">
                                {t.contact.delete_account_title}
                            </h3>
                            <p className="text-red-700/80 text-sm mb-6 leading-relaxed">
                                {t.contact.delete_account_desc}
                            </p>

                            <a
                                href="mailto:support@moodies.app?subject=Account Deletion Request&body=Please delete my Moodies account and all associated data."
                                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-red-500/20 active:scale-95"
                            >
                                {t.contact.delete_button}
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
