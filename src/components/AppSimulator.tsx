"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
    Smile, Library, Users, BarChart2, User,
    Image as ImageIcon, PenLine, Mic, UserPlus,
    Calendar, Dumbbell, Briefcase, Sparkles, TrendingUp
} from "lucide-react";

// --- TİP TANIMLARI ---
type MoodType = "harika" | "mutlu" | "normal" | "uzgun" | "sinirli";

interface Entry {
    id: number;
    moodId: MoodType;
    title: string;
    note: string;
    date: string;
    time: string;
}

export default function AppSimulator() {
    const { t, language } = useLanguage();

    // --- STATE ---
    const [activeTab, setActiveTab] = useState<'home' | 'stats'>('home');
    const [statFilter, setStatFilter] = useState(t.simulator.filter_week);

    // Form
    const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    // --- BAŞLANGIÇ VERİSİ ---
    const [entries, setEntries] = useState<Entry[]>([
        { id: 1, moodId: "mutlu", title: "Proje Bitti", note: "Sonunda siteyi yayına aldık.", date: "07 Ara", time: "10:00" },
        { id: 2, moodId: "mutlu", title: "Kahve Molası", note: "", date: "06 Ara", time: "11:00" },
        { id: 3, moodId: "harika", title: "Güzel Haber", note: "", date: "06 Ara", time: "12:00" },
        { id: 4, moodId: "normal", title: "Rutin", note: "", date: "05 Ara", time: "13:00" },
        { id: 5, moodId: "uzgun", title: "Yağmurlu Gün", note: "", date: "04 Ara", time: "14:00" },
        { id: 6, moodId: "sinirli", title: "Trafik", note: "", date: "03 Ara", time: "15:00" },
        { id: 7, moodId: "mutlu", title: "Spor", note: "", date: "03 Ara", time: "16:00" },
    ]);

    // Mood Ayarları
    const moods = [
        { id: "harika", label: t.simulator.mood_great, emoji: "🤩", color: "#a855f7" },
        { id: "mutlu", label: t.simulator.mood_happy, emoji: "😊", color: "#fbbf24" },
        { id: "normal", label: t.simulator.mood_normal, emoji: "😐", color: "#9ca3af" },
        { id: "uzgun", label: t.simulator.mood_sad, emoji: "😢", color: "#3b82f6" },
        { id: "sinirli", label: t.simulator.mood_angry, emoji: "😠", color: "#ef4444" },
    ] as const;

    // --- CHART HESAPLAMA ---
    const chartData = useMemo(() => {
        const counts = { harika: 0, mutlu: 0, normal: 0, uzgun: 0, sinirli: 0 };
        entries.forEach(e => { if (counts[e.moodId] !== undefined) counts[e.moodId]++; });
        const maxVal = Math.max(...Object.values(counts));

        let mostFrequentKey: MoodType = "mutlu";
        let maxCount = 0;
        (Object.keys(counts) as MoodType[]).forEach(key => {
            if (counts[key] > maxCount) { maxCount = counts[key]; mostFrequentKey = key; }
        });
        const mostFreqLabel = moods.find(m => m.id === mostFrequentKey)?.label || t.simulator.mood_happy;

        return { counts, maxVal: maxVal === 0 ? 1 : maxVal, mostFreqLabel };
    }, [entries, moods, t.simulator.mood_happy]);

    // --- KAYDETME ---
    const handleSave = () => {
        if (!selectedMood) return;
        const newEntry: Entry = {
            id: Date.now(),
            moodId: selectedMood,
            title: title || (language === 'tr' ? "Başlıksız" : "Untitled"),
            note: note,
            date: language === 'tr' ? "Bugün" : "Today",
            time: language === 'tr' ? "Şimdi" : "Now"
        };
        setEntries([newEntry, ...entries]);
        setTitle(""); setNote(""); setSelectedMood(null);
        setActiveTab('stats');
    };

    return (
        <section className="py-24 bg-slate-50 overflow-hidden" id="simulator">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">{t.simulator.label}</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-12">
                    {t.simulator.title}
                </h2>

                {/* TELEFON KASASI */}
                <div className="relative mx-auto w-[360px] h-[780px] bg-white rounded-[3.5rem] shadow-2xl border-[12px] border-slate-900 ring-4 ring-slate-900/10 overflow-hidden">

                    {/* --- ÜST KISIM (STATUS BAR & NOTCH) --- */}
                    {/* z-index 50 ile en üstte, h-24 yaparak alanı genişlettik */}
                    <div className="absolute top-0 w-full h-24 flex justify-between items-start px-8 z-10 bg-gradient-to-b from-[#F8F8F8] via-[#F8F8F8] to-transparent pt-6 pointer-events-none">
                        <span className="text-xs font-bold text-slate-900 mt-2">09:41</span>
                        {/* Dynamic Island */}
                        <div className="w-28 h-8 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-4 shadow-sm"></div>
                        <div className="flex gap-1 mt-2">
                            <div className="w-5 h-2.5 bg-slate-900 rounded-[2px]"></div>
                        </div>
                    </div>

                    {/* --- İÇERİK ALANI (SCROLL AREA) --- */}
                    {/* pt-32 (128px) -> İçerik çentiğin çok altından başlar */}
                    {/* pb-40 (160px) -> İçerik menünün çok üstünde biter */}
                    <div className="w-full h-full overflow-y-auto bg-[#F8F8F8] font-sans pt-32 pb-40 scrollbar-hide">
                        <AnimatePresence mode="wait">

                            {/* --- TAB 1: GİRİŞ --- */}
                            {activeTab === 'home' && (
                                <motion.div
                                    key="home"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="px-6"
                                >
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <h1 className="text-3xl font-extrabold text-slate-900">Moodies</h1>
                                        <div className="w-10 h-10 bg-green-100/50 rounded-full flex items-center justify-center text-green-600">
                                            <Calendar size={20} />
                                        </div>
                                    </div>

                                    {/* Mood Seçici */}
                                    <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-[2rem] p-6 mb-6 text-white shadow-xl shadow-green-500/20">
                                        <h2 className="text-lg font-bold text-center mb-6 opacity-95">{t.simulator.greeting}</h2>
                                        <div className="flex justify-between items-end px-1">
                                            {moods.map((m) => (
                                                <button
                                                    key={m.id}
                                                    onClick={() => setSelectedMood(m.id as MoodType)}
                                                    className="flex flex-col items-center gap-2 group transition-all"
                                                >
                                                    <div className={`w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${selectedMood === m.id ? 'scale-125 bg-white shadow-lg ring-4 ring-white/30 text-3xl' : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'}`}>
                                                        {m.emoji}
                                                    </div>
                                                    <span className={`text-[10px] font-bold transition-opacity ${selectedMood === m.id ? 'opacity-100' : 'opacity-70'}`}>{m.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Inputlar */}
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder={t.simulator.placeholder_title}
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="w-full bg-white rounded-2xl p-4 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 shadow-sm border border-slate-100"
                                        />
                                        <textarea
                                            placeholder={t.simulator.placeholder_note}
                                            value={note}
                                            onChange={(e) => setNote(e.target.value)}
                                            className="w-full h-32 bg-white rounded-2xl p-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 shadow-sm border border-slate-100 resize-none"
                                        />
                                    </div>

                                    <button
                                        onClick={handleSave}
                                        disabled={!selectedMood}
                                        className={`w-full mt-6 py-4 rounded-2xl font-bold text-white shadow-xl transition-all active:scale-95 ${selectedMood ? 'bg-[#22c55e] hover:bg-green-600 shadow-green-500/30' : 'bg-slate-300 cursor-not-allowed'}`}
                                    >
                                        {t.simulator.btn_save}
                                    </button>
                                </motion.div>
                            )}

                            {/* --- TAB 2: İSTATİSTİKLER --- */}
                            {activeTab === 'stats' && (
                                <motion.div
                                    key="stats"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="px-6"
                                >
                                    <h1 className="text-3xl font-extrabold text-slate-900 mb-6">{t.simulator.stats_title}</h1>

                                    {/* Filtre */}
                                    <div className="bg-slate-200/50 p-1 rounded-2xl flex mb-8">
                                        {[t.simulator.filter_week, t.simulator.filter_month, t.simulator.filter_all].map(filter => (
                                            <button
                                                key={filter}
                                                onClick={() => setStatFilter(filter)}
                                                className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all ${statFilter === filter ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                            >
                                                {filter}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Summary Cards */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col justify-between h-32">
                                            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wide">{t.simulator.stat_avg}</span>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl">😊</div>
                                                <span className="text-sm font-bold text-slate-900">{t.simulator.mood_happy}</span>
                                            </div>
                                        </div>
                                        <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col justify-between h-32">
                                            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wide">{t.simulator.stat_freq}</span>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">🌱</div>
                                                <span className="text-sm font-bold text-slate-900">{chartData.mostFreqLabel}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mood Breakdown */}
                                    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mb-6">
                                        <h3 className="text-base font-bold text-slate-900 mb-1">{t.simulator.chart_breakdown}</h3>
                                        <p className="text-[11px] text-slate-400 mb-8">{t.simulator.filter_week}</p>

                                        <div className="flex items-end justify-between h-48 gap-3 px-1">
                                            {moods.map((m) => {
                                                const count = chartData.counts[m.id as MoodType];
                                                let heightPercent = (count / chartData.maxVal) * 100;
                                                if (count > 0 && heightPercent < 15) heightPercent = 15;
                                                if (count === 0) heightPercent = 4;

                                                return (
                                                    <div key={m.id} className="flex flex-col items-center gap-3 w-full group">
                                                        <div className="relative w-full h-full flex items-end justify-center">
                                                            <motion.div
                                                                initial={{ height: 0 }}
                                                                animate={{ height: `${heightPercent}%` }}
                                                                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                                                                className="w-full rounded-t-lg relative z-10"
                                                                style={{ backgroundColor: count > 0 ? m.color : '#e2e8f0' }}
                                                            />
                                                        </div>
                                                        <span className="text-[9px] text-slate-400 font-bold truncate w-full text-center">{m.label}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Line Chart */}
                                    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mb-6">
                                        <h3 className="text-base font-bold text-slate-900 mb-6">{t.simulator.chart_timeline}</h3>
                                        <div className="relative h-40 w-full">
                                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="gradientGreen" x1="0" x2="0" y1="0" y2="1">
                                                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2"/>
                                                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                                                    </linearGradient>
                                                </defs>
                                                <path d="M0,100 C60,100 90,30 150,30 S240,110 300,60" fill="url(#gradientGreen)" stroke="none"/>
                                                <path d="M0,100 C60,100 90,30 150,30 S240,110 300,60" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round"/>
                                            </svg>
                                            <div className="absolute top-[20%] left-[45%] bg-white p-1 rounded-full shadow-md text-xs -translate-x-1/2 -translate-y-1/2">🤩</div>
                                            <div className="absolute top-[65%] left-[10%] bg-white p-1 rounded-full shadow-md text-xs -translate-x-1/2 -translate-y-1/2">😊</div>
                                            <div className="absolute top-[40%] right-[5%] bg-white p-1 rounded-full shadow-md text-xs -translate-x-1/2 -translate-y-1/2">😐</div>
                                        </div>
                                    </div>

                                    {/* Influences */}
                                    <div className="mb-6">
                                        <h3 className="text-sm font-bold text-slate-900 mb-4 px-1">{t.simulator.section_influences}</h3>
                                        <div className="space-y-3">
                                            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <Dumbbell size={18} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700 flex-1">{t.simulator.inf_exercise}</span>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-[10px] font-bold text-yellow-500">{t.simulator.mood_happy}</span>
                                                    <span className="text-sm">😊</span>
                                                </div>
                                            </div>
                                            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                                    <Briefcase size={18} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700 flex-1">{t.simulator.inf_work}</span>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-[10px] font-bold text-blue-500">{t.simulator.mood_sad}</span>
                                                    <span className="text-sm">😓</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* AI Insights */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-4 px-1">
                                            <Sparkles size={16} className="text-purple-500"/>
                                            <h3 className="text-sm font-bold text-slate-900">{t.simulator.section_ai}</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                                            <TrendingUp className="text-blue-500 shrink-0 mt-1" size={20} />
                                            <p className="text-xs text-slate-500 leading-relaxed">
                                                {t.simulator.ai_text}
                                            </p>
                                        </div>
                                    </div>

                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>

                    {/* --- TABBAR (SABİT) --- */}
                    <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-100 px-6 py-4 flex justify-between items-center z-10 pb-8">
                        <TabItem
                            icon={<Smile size={26}/>}
                            label={t.simulator.tab_home}
                            active={activeTab === 'home'}
                            onClick={() => setActiveTab('home')}
                        />
                        <TabItem
                            icon={<Library size={26}/>}
                            label={t.simulator.tab_archive}
                            active={false}
                        />
                        <TabItem
                            icon={<Users size={26}/>}
                            label={t.simulator.tab_friends}
                            active={false}
                        />
                        <TabItem
                            icon={<BarChart2 size={26}/>}
                            label={t.simulator.tab_stats}
                            active={activeTab === 'stats'}
                            onClick={() => setActiveTab('stats')}
                        />
                        <TabItem
                            icon={<User size={26}/>}
                            label={t.simulator.tab_profile}
                            active={false}
                        />
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-black/20 rounded-full z-[60]"></div>
                </div>
            </div>
        </section>
    );
}

// Tab Item Bileşeni
function TabItem({ icon, label, active, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center gap-1.5 transition-colors duration-300 ${active ? 'text-green-600 scale-105' : 'text-slate-300 hover:text-slate-400'}`}
        >
            {React.cloneElement(icon, { strokeWidth: active ? 3 : 2 })}
            <span className="text-[10px] font-bold tracking-wide">{label}</span>
        </button>
    );
}
