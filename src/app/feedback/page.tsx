"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Sparkles, Bug, ChevronRight, CheckCircle2, AlertCircle, ArrowLeft, Send } from "lucide-react";

type TabType = "request" | "feature" | "bug";

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
    priority: string;
    appVersion: string;
    device: string;
}

const initialForm: FormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "Orta",
    appVersion: "",
    device: "",
};

export default function FeedbackPage() {
    const [activeTab, setActiveTab] = useState<TabType>("request");
    const [form, setForm] = useState<FormState>(initialForm);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const tabs: { key: TabType; label: string; icon: React.ReactNode; color: string; desc: string }[] = [
        {
            key: "request",
            label: "İstek & Görüş",
            icon: <MessageSquare size={20} />,
            color: "brand",
            desc: "Genel görüş, öneri veya memnuniyetini paylaş",
        },
        {
            key: "feature",
            label: "Özellik İste",
            icon: <Sparkles size={20} />,
            color: "purple",
            desc: "Uygulamaya eklenmesini istediğin bir özelliği anlat",
        },
        {
            key: "bug",
            label: "Hata Bildir",
            icon: <Bug size={20} />,
            color: "red",
            desc: "Karşılaştığın bir sorunu bize ilet, düzeltelim",
        },
    ];

    const colorMap = {
        brand: { bg: "bg-brand-50", border: "border-brand-200", text: "text-brand-600", active: "bg-brand-500", ring: "ring-brand-500/20" },
        purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600", active: "bg-purple-500", ring: "ring-purple-500/20" },
        red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-600", active: "bg-red-500", ring: "ring-red-500/20" },
    };

    const currentTab = tabs.find(t => t.key === activeTab)!;
    const colors = colorMap[currentTab.color as keyof typeof colorMap];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.message.trim()) return;

        setStatus("loading");
        try {
            const res = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type: activeTab, ...form }),
            });
            if (!res.ok) throw new Error();
            setStatus("success");
            setForm(initialForm);
        } catch {
            setStatus("error");
        }
    };

    const inputClass = "w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-400 transition-all text-sm font-medium";

    return (
        <main className="min-h-screen bg-slate-50 pt-28">

            <div className="max-w-3xl mx-auto px-4 py-12">
                {/* Başlık */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Bize Ulaş</h1>
                    <p className="text-slate-500 text-lg">Aşağıdan uygun kategoriyi seçip mesajını gönder.</p>
                </div>

                {/* Tab Seçici */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {tabs.map(tab => {
                        const c = colorMap[tab.color as keyof typeof colorMap];
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => { setActiveTab(tab.key); setStatus("idle"); }}
                                className={`flex flex-col items-center text-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 ${isActive ? `${c.bg} ${c.border} ${c.text} shadow-lg ring-4 ${c.ring}` : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50"}`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? `${c.active} text-white shadow-md` : "bg-slate-100"}`}>
                                    {tab.icon}
                                </div>
                                <span className="text-sm font-bold leading-tight">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Açıklama */}
                <div className={`${colors.bg} ${colors.border} border rounded-2xl px-5 py-4 flex items-center gap-3 mb-8`}>
                    <div className={`${colors.text} opacity-70`}>{currentTab.icon}</div>
                    <p className={`${colors.text} text-sm font-semibold`}>{currentTab.desc}</p>
                </div>

                {/* Başarı Mesajı */}
                {status === "success" && (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center gap-4 mb-6 animate-in fade-in zoom-in duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="text-green-600" size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-green-900">Mesajın iletildi!</p>
                            <p className="text-green-700 text-sm mt-0.5">En kısa sürede geri döneceğiz. Teşekkürler 🙏</p>
                        </div>
                    </div>
                )}

                {/* Hata Mesajı */}
                {status === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-center gap-4 mb-6">
                        <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                        <div>
                            <p className="font-bold text-red-900">Bir hata oluştu</p>
                            <p className="text-red-700 text-sm mt-0.5">Lütfen tekrar dene veya doğrudan <a href="mailto:destek@moodies.app" className="underline">destek@moodies.app</a> adresine yaz.</p>
                        </div>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-5">

                    {/* Ad & Email (yan yana) */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ad Soyad <span className="text-slate-300">(opsiyonel)</span></label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Ahmet Yılmaz"
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                E-posta {activeTab !== "feature" && <span className="text-red-400">*</span>}
                                {activeTab === "feature" && <span className="text-slate-300">(opsiyonel)</span>}
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required={activeTab !== "feature"}
                                placeholder="ahmet@email.com"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* Konu */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Konu <span className="text-red-400">*</span></label>
                        <input
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            placeholder={
                                activeTab === "request" ? "Örn: Günlük hatırlatıcı saatini ayarlayamıyorum" :
                                    activeTab === "feature" ? "Örn: Widget'ta hava durumu göster" :
                                        "Örn: Arşiv ekranı açılmıyor"
                            }
                            className={inputClass}
                        />
                    </div>

                    {/* Öncelik (sadece feature için) */}
                    {activeTab === "feature" && (
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Öncelik</label>
                            <select name="priority" value={form.priority} onChange={handleChange} className={inputClass}>
                                <option>Düşük</option>
                                <option>Orta</option>
                                <option>Yüksek — Bu olmadan olmaz!</option>
                            </select>
                        </div>
                    )}

                    {/* Versiyon & Cihaz (sadece bug için) */}
                    {activeTab === "bug" && (
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Uygulama Versiyonu</label>
                                <input
                                    name="appVersion"
                                    value={form.appVersion}
                                    onChange={handleChange}
                                    placeholder="Örn: 2.0.1"
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Cihaz</label>
                                <input
                                    name="device"
                                    value={form.device}
                                    onChange={handleChange}
                                    placeholder="Örn: iPhone 16 Pro, iOS 18"
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    )}

                    {/* Mesaj */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                            {activeTab === "request" ? "Mesajın" : activeTab === "feature" ? "Özelliği Anlat" : "Hatayı Açıkla"} <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder={
                                activeTab === "request" ? "Düşüncelerini bizimle paylaş..." :
                                    activeTab === "feature" ? "Bu özelliği neden istiyorsun? Nasıl çalışmasını hayal ediyorsun?" :
                                        "Hatayı adım adım anlat. Ne yaparken oldu? Ne görmeydi, ne gördün?"
                            }
                            className={`${inputClass} resize-none`}
                        />
                    </div>

                    {/* Gönder Butonu */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className={`w-full ${colors.active} text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0`}
                    >
                        {status === "loading" ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Gönderiliyor...
                            </>
                        ) : (
                            <>
                                <Send size={18} />
                                {activeTab === "request" ? "Görüşü Gönder" : activeTab === "feature" ? "İsteği Gönder" : "Hatayı Bildir"}
                            </>
                        )}
                    </button>
                </form>

                {/* Alt Link */}
                <p className="text-center text-slate-400 text-sm mt-6">
                    Acil bir durumda doğrudan{" "}
                    <a href="mailto:destek@moodies.app" className="text-brand-500 font-semibold hover:underline">
                        destek@moodies.app
                    </a>{" "}
                    adresine yazabilirsin.
                </p>
            </div>
        </main>
    );
}
