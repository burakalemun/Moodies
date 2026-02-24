"use client";
import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("moodies_cookie_consent");
        if (!consent) {
            // Kısa gecikmeyle göster — hydration tamamlandıktan sonra
            const t = setTimeout(() => setVisible(true), 1200);
            return () => clearTimeout(t);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("moodies_cookie_consent", "accepted");
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem("moodies_cookie_consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-[9999]">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-200 p-5 flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center text-brand-500 flex-shrink-0">
                            <Cookie size={18} />
                        </div>
                        <p className="font-bold text-slate-900 text-sm">Çerez Politikası</p>
                    </div>
                    <button
                        onClick={decline}
                        className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0 mt-0.5"
                        aria-label="Kapat"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Açıklama */}
                <p className="text-xs text-slate-500 leading-relaxed">
                    Daha iyi bir deneyim sunmak için çerezler kullanıyoruz.{" "}
                    <Link href="/privacy" className="text-brand-600 font-semibold hover:underline">
                        Gizlilik Politikası
                    </Link>
                    {"'nı okuyabilirsin."}
                </p>

                {/* Butonlar */}
                <div className="flex gap-2">
                    <button
                        onClick={decline}
                        className="flex-1 py-2.5 text-xs font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                        Reddet
                    </button>
                    <button
                        onClick={accept}
                        className="flex-1 py-2.5 text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-xl transition-colors shadow-sm shadow-brand-500/20"
                    >
                        Kabul Et
                    </button>
                </div>
            </div>
        </div>
    );
}
