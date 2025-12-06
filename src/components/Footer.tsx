"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- ÜST KISIM (GRID) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">

                    {/* 1. KOLON: MARKA & MİSYON */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 w-fit">
                            <Image
                                src="/Moodies-logo.png"
                                alt="Moodies Logo"
                                width={40}
                                height={40}
                                className="rounded-full flex-shrink-0 object-cover"
                                priority
                                quality={90}
                            />
                            <span className="font-extrabold text-xl text-slate-900 tracking-tight">Moodies</span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            {t.footer.mission}
                        </p>

                        {/* App Store Badge */}
                        <button className="bg-slate-900 text-white px-4 py-2 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-colors shadow-sm w-fit">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.23-3.14-2.47-1.72-2.48-2.92-6.52-1.22-9.45 1.07-1.87 2.96-2.95 5.06-2.95 1.54 0 2.87 1.05 3.75 1.05.88 0 2.53-1.28 4.25-1.09 1.45.06 2.57.59 3.29 1.63-2.65 1.57-2.18 5.76.62 6.95-.5 1.49-1.2 2.98-2.32 4.62zm-3.27-14.8c.68-1.2 1.14-2.86.99-4.52-1.46.12-3.23 1.03-4.29 2.29-.63.75-1.18 2.08-1.04 3.76 1.64.13 3.3-1.03 4.34-1.53z"/></svg>
                            <div className="text-left">
                                <div className="text-[10px] font-medium opacity-80">Download on the</div>
                                <div className="text-xs font-bold leading-none">App Store</div>
                            </div>
                        </button>
                    </div>

                    {/* 2. KOLON: ÜRÜN */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">{t.footer.product_title}</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link href="/#features" className="hover:text-brand-500 transition-colors">{t.footer.features}</Link></li>
                            <li><Link href="/#faq" className="hover:text-brand-500 transition-colors">{t.footer.faq}</Link></li>
                            <li><span className="text-slate-300 cursor-not-allowed">{t.footer.android}</span></li>
                            <li><span className="text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full text-xs font-bold">v2.0</span></li>
                        </ul>
                    </div>

                    {/* 3. KOLON: YASAL (DÜZELTİLDİ) */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">{t.footer.legal_title}</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            {/* Yanlış: href="../app/privacy/page.tsx" */}
                            {/* Doğru: href="/privacy" */}
                            <li><Link href="/privacy" className="hover:text-brand-500 transition-colors">{t.footer.privacy}</Link></li>

                            {/* Yanlış: href="../app/terms/page.tsx" */}
                            {/* Doğru: href="/terms" */}
                            <li><Link href="/terms" className="hover:text-brand-500 transition-colors">{t.footer.terms}</Link></li>

                            {/* Çerez ve KVKK sayfaların henüz yoksa Privacy'ye yönlendirmek en mantıklısıdır */}
                            <li><Link href="/privacy" className="hover:text-brand-500 transition-colors">{t.footer.cookies}</Link></li>
                            <li><Link href="/privacy" className="hover:text-brand-500 transition-colors">{t.footer.kvkk}</Link></li>
                        </ul>
                    </div>

                    {/* 4. KOLON: İLETİŞİM & SOSYAL (DÜZELTİLDİ) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-4">{t.footer.contact_title}</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <a href="mailto:destek@moodies.app" className="hover:text-brand-500 transition-colors flex items-center gap-2">
                                    <Mail size={16}/> destek@moodies.app
                                </a>
                            </li>

                            {/* Yanlış: href="../app/contact/page.tsx" */}
                            {/* Doğru: href="/contact" */}
                            <li>
                                <Link href="/contact" className="hover:text-brand-500 transition-colors font-medium text-brand-600">
                                    Help & Support / Delete Account
                                </Link>
                            </li>
                            <li className="pt-2">
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-brand-500 hover:border-brand-200 transition-all">
                                        <Twitter size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-pink-500 hover:border-pink-200 transition-all">
                                        <Instagram size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all">
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* --- ALT KISIM (COPYRIGHT) --- */}
                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        © 2024 Moodies Inc. {t.footer.rights} {t.footer.made_in}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-500">{t.footer.system_status}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
