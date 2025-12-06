"use client";
import { BarChart3, Users, BookHeart, Lock, Smile, Meh, Frown, ScanFace } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Features() {
    const { t } = useLanguage();

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">{t.features.title}</h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                        {t.features.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* --- KART 1: GRAFİK --- */}
                    <div className="md:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-500 shadow-sm mb-4">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{t.features.card_1_title}</h3>
                            <p className="text-slate-500 text-sm max-w-xs">{t.features.card_1_desc}</p>
                        </div>
                        {/* Grafik Kodu (SVG - Değişmedi) */}
                        <div className="absolute bottom-0 right-0 w-full h-48 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="relative w-full h-full">
                                <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,60 L100,60 L140,65 L160,130 L190,40 L220,140 L250,50 L280,60 L320,80 L400,70 L400,200 L0,200 Z" fill="url(#moodGradient)" />
                                    <path d="M0,60 L100,60 L140,65 L160,130 L190,40 L220,140 L250,50 L280,60 L320,80 L400,70" fill="none" className="stroke-brand-500 stroke-[4]" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="absolute top-[28%] left-[20%] bg-white p-1 rounded-full shadow-sm border border-slate-100 hover:scale-110 transition-transform"><Smile className="text-yellow-500" size={16} /></div>
                                <div className="absolute top-[70%] left-[38%] bg-white p-1 rounded-full shadow-sm border border-slate-100 hover:scale-110 transition-transform z-10"><Frown className="text-orange-500" size={16} /></div>
                                <div className="absolute top-[15%] left-[45%] bg-white p-1.5 rounded-full shadow-md border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}><Smile className="text-green-500" size={20} strokeWidth={2.5} /></div>
                                <div className="absolute top-[75%] left-[53%] bg-white p-1 rounded-full shadow-sm border border-slate-100 hover:scale-110 transition-transform"><Meh className="text-red-500" size={16} /></div>
                                <div className="absolute top-[35%] right-[5%] bg-white p-1 rounded-full shadow-sm border border-slate-100 hover:scale-110 transition-transform"><Smile className="text-yellow-500" size={16} /></div>
                            </div>
                        </div>
                    </div>

                    {/* --- KART 2: ARKADAŞLAR --- */}
                    <div className="md:row-span-2 bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-500 shadow-sm mb-4">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t.features.card_2_title}</h3>
                        <p className="text-slate-500 text-sm mb-6">{t.features.card_2_desc}</p>
                        <div className="space-y-3 relative z-10">
                            {/* Avatar Listesi (Statik kalabilir veya çevrilebilir) */}
                            {[
                                { name: "Ayşe", mood: "Happy", color: "text-yellow-700 bg-yellow-100", initial: "A", bg: "bg-orange-100" },
                                { name: "Mert", mood: "Tired", color: "text-slate-600 bg-slate-200", initial: "M", bg: "bg-blue-100" },
                                { name: "Can", mood: "Focused", color: "text-purple-700 bg-purple-100", initial: "C", bg: "bg-green-100" },
                            ].map((friend, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-100/50">
                                    <div className={`w-10 h-10 rounded-full ${friend.bg} flex items-center justify-center text-sm font-bold text-slate-700`}>{friend.initial}</div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">{friend.name}</p>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mt-0.5 ${friend.color}`}>{friend.mood}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
                    </div>

                    {/* --- KART 3: JOURNAL --- */}
                    <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-lg transition-all group overflow-hidden relative">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm mb-4">
                                <BookHeart size={24} />
                            </div>
                            <h3 className="text-lg font-bold">{t.features.card_3_title}</h3>
                            <p className="text-slate-500 text-sm mt-1">{t.features.card_3_desc}</p>
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-white border border-slate-200 p-4 rounded-xl shadow-sm w-32 rotate-12 group-hover:rotate-6 transition-transform">
                            <div className="h-2 w-16 bg-slate-200 rounded-full mb-2"></div>
                            <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>

                    {/* --- KART 4: PRIVACY --- */}
                    <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-lg transition-all group overflow-hidden relative">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm mb-4">
                                <Lock size={24} />
                            </div>
                            <h3 className="text-lg font-bold">{t.features.card_4_title}</h3>
                            <p className="text-slate-500 text-sm mt-1">{t.features.card_4_desc}</p>
                        </div>
                        <div className="absolute -bottom-6 -right-6 text-slate-200/50 group-hover:text-green-500/10 transition-colors">
                            <ScanFace size={96} strokeWidth={1} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
