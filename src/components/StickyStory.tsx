"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {BarChart3, MapPin, Heart, Activity, LayoutGrid, User, Users, Smile, Share2, MoreHorizontal} from "lucide-react";

export default function StickyStory() {
    const { t, language } = useLanguage(); // 't' objesi burada önemli
    const [activeStep, setActiveStep] = useState(0);

    const storySteps = [
        {
            id: 0,
            title: t.sticky_story.step_1_title,
            desc: t.sticky_story.step_1_desc,
            bg: "bg-red-100",
            color: "text-red-600"
        },
        {
            id: 1,
            title: t.sticky_story.step_2_title,
            desc: t.sticky_story.step_2_desc,
            bg: "bg-brand-100",
            color: "text-brand-600"
        },
        {
            id: 2,
            title: t.sticky_story.step_3_title,
            desc: t.sticky_story.step_3_desc,
            bg: "bg-orange-100",
            color: "text-orange-600"
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- BAŞLIK (DÜZELTİLDİ) --- */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        {t.sticky_story.header_title}
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        {t.sticky_story.header_desc}
                    </p>
                </div>

                {/* --- GRID --- */}
                <div className="grid lg:grid-cols-2 gap-12 items-start relative">

                    {/* --- SOL: METİNLER --- */}
                    <div className="relative z-10 flex flex-col gap-[60vh] pb-[30vh]">
                        {storySteps.map((step, index) => (
                            <div key={step.id} className="transition-opacity duration-500">
                                <motion.div
                                    onViewportEnter={() => setActiveStep(index)}
                                    viewport={{ margin: "-50% 0px -50% 0px" }}
                                    className={`flex flex-col justify-center p-8 rounded-3xl border-2 transition-all duration-500 ${
                                        activeStep === index
                                            ? "opacity-100 border-slate-100 bg-slate-50 shadow-lg scale-100"
                                            : "opacity-40 border-transparent scale-95"
                                    }`}
                                >
                                    <div className={`w-fit px-4 py-2 rounded-full ${step.bg} ${step.color} text-sm font-bold mb-4 uppercase`}>
                                        {/* ADIM kelimesi dillerde farklı olabilir ama şimdilik TR/EN basit tuttum, istersen bunu da çeviriye alabiliriz */}
                                        {language === 'tr' ? `ADIM ${index + 1}` : `STEP ${index + 1}`}
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                        {step.desc}
                                    </p>

                                    {/* Mobil Önizleme */}
                                    <div className="lg:hidden mt-6 w-full aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden border-4 border-slate-800">
                                        {index === 0 && <ScreenStep1 />}
                                        {index === 1 && <ScreenStep2 />}
                                        {index === 2 && <ScreenStep3 />}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* --- SAĞ: TELEFON --- */}
                    <div className="hidden lg:flex sticky top-32 h-[800px] items-start justify-center pt-4">
                        <RealisticPhone activeStep={activeStep} />
                    </div>

                </div>
            </div>
        </section>
    );
}

// ------------------------------------------------------------------
// ALT BİLEŞENLER (Aynı kaldı)
// ------------------------------------------------------------------

function RealisticPhone({ activeStep }: { activeStep: number }) {
    return (
        <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[3.5rem] shadow-2xl border-[8px] border-slate-800 ring-4 ring-slate-900/10 overflow-hidden transition-all duration-500">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-3xl z-50 flex items-center justify-center gap-3 px-2">
                <div className="w-16 h-1 bg-slate-800/60 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-slate-800/60 rounded-full"></div>
            </div>
            <div className="relative w-full h-full bg-white overflow-hidden">
                {activeStep === 0 && <ScreenStep1 />}
                {activeStep === 1 && <ScreenStep2 />}
                {activeStep === 2 && <ScreenStep3 />}
            </div>
        </div>
    );
}

function ScreenStep1() {
    return (
        <div className="w-full h-full bg-slate-50 flex flex-col p-6 pt-20">
            {/* Kart Yapısı */}
            <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-visible">

                {/* Başlık Alanı */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Zaman İçinde Mood</h3>
                    <p className="text-sm text-slate-400 font-medium mt-1">Son 7 Gün</p>
                </div>

                {/* Grafik Alanı */}
                <div className="relative h-48 w-full">

                    {/* SVG Çizgisi */}
                    {/* viewBox genişliği 320, yüksekliği 200 olarak ayarlandı */}
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 320 200" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="gradientGreen" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                            </linearGradient>
                            {/* Çizgiye derinlik katmak için gölge filtresi */}
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#22c55e" floodOpacity="0.3"/>
                            </filter>
                        </defs>

                        {/* Dolgu Alanı (Opak Yeşil) */}
                        <path
                            d="M10,60 L80,60 Q110,60 125,90 L155,150 L195,110 L245,160 L310,140 L310,200 L10,200 Z"
                            fill="url(#gradientGreen)"
                            className="transition-all duration-1000 ease-out"
                        />

                        {/* Ana Yeşil Çizgi */}
                        <path
                            d="M10,60 L80,60 Q110,60 125,90 L155,150 L195,110 L245,160 L310,140"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#shadow)"
                            className="drop-shadow-sm"
                        />
                    </svg>

                    {/* Emojiler - SVG koordinatlarına göre CSS ile yerleştirildi */}
                    {/* Not: 'left' ve 'top' değerleri SVG path'indeki noktalara göre ayarlandı */}

                    {/* 1. Emoji: Mutlu (Yatay Düzlem) */}
                    <div className="absolute top-[20%] left-[18%] -translate-x-1/2 -translate-y-1/2">
                        <EmojiBadge emoji="😊" />
                    </div>

                    {/* 2. Emoji: Party (Kırılmadan hemen önce) */}
                    <div className="absolute top-[20%] left-[32%] -translate-x-1/2 -translate-y-1/2">
                        <EmojiBadge emoji="🥳" />
                    </div>

                    {/* 3. Emoji: Nötr (Düşüş Başladı) */}
                    <div className="absolute top-[45%] left-[43%] -translate-x-1/2 -translate-y-1/2">
                        <EmojiBadge emoji="😐" />
                    </div>

                    {/* 4. Emoji: Ağlayan (Dip Nokta 1) */}
                    <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                        <EmojiBadge emoji="😢" />
                    </div>

                    {/* 5. Emoji: Kızgın (Tepki Çıkışı) */}
                    <div className="absolute top-[55%] left-[63%] -translate-x-1/2 -translate-y-1/2">
                        <EmojiBadge emoji="😠" />
                    </div>

                    {/* 6. Emoji: Üzgün (Dip Nokta 2 - Son Durum) */}
                    <div className="absolute top-[80%] left-[78%] -translate-x-1/2 -translate-y-1/2">
                        <EmojiBadge emoji="😔" delay="delay-700" />
                    </div>

                </div>
            </div>

            {/* Alt Bilgi Metni */}
            <div className="mt-8 text-center px-4">
                <p className="text-slate-500 text-sm leading-relaxed">
                    <span className="font-bold text-slate-800">Analiz:</span> Son 3 gündür modunda belirgin bir düşüş ve dalgalanma var.
                </p>
            </div>
        </div>
    );
}

// Emoji Balonu Bileşeni (Tekrar kullanımı ve stil temizliği için)
function EmojiBadge({ emoji, delay = "" }: { emoji: string, delay?: string }) {
    return (
        <div className={`w-9 h-9 bg-white rounded-full flex items-center justify-center text-xl shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-slate-50 z-10 hover:scale-125 transition-transform duration-300 cursor-pointer ${delay} animate-in fade-in zoom-in duration-500`}>
            {emoji}
        </div>
    );
}

import { Flashlight, Camera } from "lucide-react"; // Bu ikonları import etmeyi unutmayın

function ScreenStep2() {
    const { t, language } = useLanguage();

    // Tarih formatı (iOS kilit ekranı stili: Pazartesi, 9 Aralık)
    const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateStr = new Date().toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', dateOptions);

    return (
        <div className="w-full h-full relative overflow-hidden font-sans select-none">

            {/* 1. iOS Tarzı Duvar Kağıdı */}
            {/* Unsplash'ten derinlik hissi veren, iOS stok duvar kağıtlarına benzeyen bir görsel */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 scale-105"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')",
                    filter: "brightness(0.9)"
                }}
            ></div>

            {/* 2. Üst Kısım: Saat ve Tarih */}
            <div className="relative z-10 pt-16 flex flex-col items-center text-white drop-shadow-md">
                {/* Kilit Simgesi (Opsiyonel, FaceID açılmış gibi) */}
                <div className="mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                        <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-9h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 1 1 6 0v2H9V6z"/>
                    </svg>
                </div>

                {/* Tarih */}
                <div className="text-lg font-medium tracking-wide opacity-90 uppercase sm:normal-case">
                    {dateStr}
                </div>

                {/* Saat (iOS 16 Kalın/İnce Font Estetiği) */}
                <div className="text-[5.5rem] leading-none font-bold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                    14:02
                </div>
            </div>

            {/* 3. iOS Bildirimi */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[92%] z-20">
                {/* Bildirim Kartı: Glassmorphism */}
                <div className="bg-white/20 backdrop-blur-2xl rounded-[20px] p-3.5 shadow-sm border border-white/20 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">

                    {/* Bildirim Header */}
                    <div className="flex items-center justify-between mb-2 pl-1">
                        <div className="flex items-center gap-2">
                            {/* App Logo */}
                            <div className="w-5 h-5 rounded-[5px] overflow-hidden bg-black shadow-sm">
                                <img
                                    src="/Moodies-app-logo.png"
                                    alt="Moodies Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* App Name */}
                            <span className="text-[13px] font-semibold text-white/90 tracking-wide uppercase">
                                MOODIES
                            </span>
                        </div>
                        {/* Time label */}
                        <span className="text-[11px] text-white/60 font-medium">
                            {t.sticky_story.screen_2_time}
                        </span>
                    </div>

                    {/* Bildirim İçeriği */}
                    <div className="pl-1 pr-2">
                        <h4 className="text-[15px] font-semibold text-white leading-tight mb-1">
                            {t.sticky_story.screen_2_notif_title}
                        </h4>
                        <p className="text-[14px] text-white/90 leading-snug">
                            {t.sticky_story.screen_2_notif_desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. Alt Kısım: Fener ve Kamera Butonları */}
            <div className="absolute bottom-10 w-full px-12 flex justify-between items-center z-10 text-white">
                {/* El Feneri */}
                <div className="w-[50px] h-[50px] rounded-full bg-slate-900/40 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg active:bg-white active:text-black transition-colors duration-200">
                    <Flashlight size={24} strokeWidth={1.5} />
                </div>

                {/* Kamera */}
                <div className="w-[50px] h-[50px] rounded-full bg-slate-900/40 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg active:bg-white active:text-black transition-colors duration-200">
                    <Camera size={24} strokeWidth={1.5} />
                </div>
            </div>

            {/* 5. Swipe Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60 z-20"></div>
        </div>
    );
}

function ScreenStep3() {
    const { t } = useLanguage();

    // Arka plan ve ana fotoğraf için görsel (Arkadaşlarla kahve/sohbet ortamı)
    const memoryImage = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop";

    return (
        <div className="w-full h-full relative bg-slate-50 overflow-hidden font-sans">

            {/* 1. Atmosferik Arka Plan (Ana resmin bulanık hali) */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl scale-125"
                style={{ backgroundImage: `url(${memoryImage})` }}
            ></div>

            {/* 2. Header (Uygulama İçi Başlık) */}
            <div className="absolute top-12 left-0 w-full px-6 flex justify-between items-center z-20">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-none">Anılar</h3>
                    <span className="text-xs text-slate-500 font-medium">Bugün, 15:30</span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md text-slate-600 hover:bg-white transition-colors">
                    <MoreHorizontal size={18} />
                </button>
            </div>

            {/* 3. Ana Anı Kartı */}
            <div className="absolute top-[18%] left-4 right-4 bottom-8 flex flex-col gap-4">

                {/* Fotoğraf Alanı */}
                <div className="relative flex-1 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/50 group">
                    <img
                        src={memoryImage}
                        alt="Friends Meeting"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Fotoğraf Üzeri Gradient (Okunabilirlik için) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Konum Etiketi (Sol Üst) */}
                    <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                        <MapPin size={12} className="text-white" />
                        <span className="text-[11px] font-bold tracking-wide uppercase">{t.sticky_story.screen_3_location}</span>
                    </div>

                    {/* Mood Etiketi (Sağ Üst) */}
                    <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                        <span className="text-sm">✨</span>
                        <span className="text-[11px] font-bold uppercase">Harika Hissediyor</span>
                    </div>

                    {/* Fotoğraf Üzeri Alt Bilgi */}
                    <div className="absolute bottom-0 left-0 w-full p-5">
                        <div className="flex items-end justify-between">
                            {/* Avatarlar ve İsimler */}
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    <img src="https://i.pravatar.cc/150?u=burak" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                    <img src="https://i.pravatar.cc/150?u=can" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                </div>
                                <div className="text-white">
                                    <p className="text-sm font-bold leading-tight">Burak & Can</p>
                                    <p className="text-[10px] text-white/80 font-medium">Ortak Anı</p>
                                </div>
                            </div>

                            {/* Beğeni Butonu (Aktif) */}
                            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-red-500 active:scale-90 transition-transform hover:bg-white/30">
                                <Heart size={24} fill="currentColor" className="drop-shadow-sm" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Açıklama Kartı (Alt Kısım) */}
                <div className="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col gap-3 relative z-10">
                    <div className="flex justify-between items-start">
                        <p className="text-slate-700 text-sm font-medium leading-relaxed">
                            "{t.sticky_story.screen_3_note}"
                        </p>
                    </div>

                    {/* Alt İkonlar (Yorum, Paylaş vs.) */}
                    <div className="w-full h-px bg-slate-100"></div>
                    <div className="flex justify-between items-center pt-1">
                        <div className="flex gap-4 text-slate-400">
                            <div className="flex items-center gap-1 text-xs font-bold hover:text-slate-600 cursor-pointer">
                                <span>52 Beğeni</span>
                            </div>
                        </div>
                        <Share2 size={18} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
                    </div>
                </div>

            </div>
        </div>
    );
}
