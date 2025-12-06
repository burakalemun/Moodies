"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Globe, ChevronDown, Check, Menu, X } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();

    // Masaüstü dil menüsü için state
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    // Mobil menü için state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const langMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Dışarı tıklayınca menüleri kapatma
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                !(event.target as Element).closest('button[aria-label="Toggle Menu"]')
            ) {
                setIsMobileMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
        { code: 'pt', label: 'Português', flag: '🇧🇷' },
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    ];

    return (
        <nav className="fixed top-6 inset-x-0 z-50 flex flex-col items-center px-4 pointer-events-none">

            {/* --- ANA NAVBAR (PILL) --- */}
            <div className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl shadow-slate-200/20 rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-4 md:gap-8 transition-all hover:shadow-slate-200/40 w-full max-w-sm md:max-w-fit relative z-[60]">

                {/* --- LOGO VE İSİM (ARTIK HEP GÖRÜNÜR) --- */}
                <div className="flex items-center gap-2 mr-auto md:mr-0">
                    <Image
                        src="/Moodies-logo.png"
                        alt="Moodies Logo"
                        width={40}
                        height={40}
                        className="rounded-full flex-shrink-0 object-cover"
                        priority
                        // quality={90} // Konsoldaki sarı uyarıyı gitmesi için bunu kaldırdım. Varsayılan (75) iyidir.
                    />
                    {/* DEĞİŞİKLİK BURADA: 'hidden sm:block' kaldırdık. Artık hep görünecek. */}
                    <span className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
                        Moodies
                    </span>
                </div>

                {/* --- MASAÜSTÜ LİNKLER (Mobilde gizli) --- */}
                <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-500 whitespace-nowrap">
                    <a href="#features" className="hover:text-brand-500 transition-colors">{t.navbar.features}</a>
                    <a href="#testimonials" className="hover:text-brand-500 transition-colors">{t.navbar.testimonials}</a>
                    <a href="#faq" className="hover:text-brand-500 transition-colors">{t.navbar.faq}</a>
                </div>

                {/* --- MASAÜSTÜ SAĞ TARAF (Dil + İndir) (Mobilde gizli) --- */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Dil Menüsü */}
                    <div className="relative" ref={langMenuRef}>
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className={`flex items-center gap-1.5 text-slate-600 font-bold text-xs px-3 py-2 rounded-full transition-all border ${isLangMenuOpen ? 'bg-white border-slate-200 shadow-sm' : 'border-transparent hover:bg-slate-100'}`}
                        >
                            <Globe size={16} />
                            <span className="uppercase">{language}</span>
                            <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isLangMenuOpen && (
                            <div className="absolute right-0 top-full mt-6 w-40 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200 z-[70]">
                                {languages.map((item) => (
                                    <button
                                        key={item.code}
                                        onClick={() => {
                                            setLanguage(item.code);
                                            setIsLangMenuOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-sm font-medium flex items-center justify-between hover:bg-brand-50 hover:text-brand-600 transition-colors ${language === item.code ? 'text-brand-600 bg-brand-50/50' : 'text-slate-700'}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{item.flag}</span>
                                            <span>{item.label}</span>
                                        </div>
                                        {language === item.code && <Check size={14} />}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="w-px h-6 bg-slate-200"></div>

                    <button className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
                        {t.navbar.download}
                    </button>
                </div>

                {/* --- MOBİL MENÜ BUTONU --- */}
                <div className="md:hidden flex items-center">
                    <button
                        aria-label="Toggle Menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-600 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* --- MOBİL MENÜ İÇERİĞİ --- */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="pointer-events-auto absolute top-full mt-4 w-[calc(100%-2rem)] max-w-sm bg-white/90 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden z-[50]"
                >
                    <div className="flex flex-col gap-4 text-center">
                        <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-600 hover:text-brand-600 transition-colors">{t.navbar.features}</a>
                        <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-600 hover:text-brand-600 transition-colors">{t.navbar.testimonials}</a>
                        <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-600 hover:text-brand-600 transition-colors">{t.navbar.faq}</a>
                    </div>

                    <div className="h-px bg-slate-200 w-full"></div>

                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center mb-3">Language</p>
                        <div className="grid grid-cols-2 gap-2">
                            {languages.map((item) => (
                                <button
                                    key={item.code}
                                    onClick={() => {
                                        setLanguage(item.code);
                                    }}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all border ${language === item.code ? 'bg-brand-50 border-brand-200 text-brand-600' : 'bg-slate-50 border-transparent text-slate-600 hover:bg-slate-100'}`}
                                >
                                    <span>{item.flag}</span>
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl text-base font-bold shadow-lg shadow-brand-500/30 active:scale-95 transition-all">
                        {t.navbar.download}
                    </button>
                </div>
            )}
        </nav>
    );
}
