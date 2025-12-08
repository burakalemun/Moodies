"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutGrid, BarChart2, User, Calendar,
    ListFilter, ArrowUpDown
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// --- TİP TANIMLARI ---
type TabType = "home" | "stats" | "archive" | "profile" | "friends";
type MoodType = "great" | "happy" | "normal" | "sad" | "angry";

interface Entry {
    id: number;
    mood: MoodType;
    title: string;
    note: string;
    date: string;
    time: string;
}

// --- TIP TANIMLAMASI (Bunu importların altına ekle) ---
interface SimulatorData {
    label: string;
    title: string;
    // Tablar
    tab_home: string;
    tab_archive: string;
    tab_friends: string;
    tab_stats: string;
    tab_profile: string;
    // Home
    greeting: string;
    placeholder_title: string;
    placeholder_note: string;
    btn_save: string;
    // Moodlar
    mood_great: string;
    mood_happy: string;
    mood_normal: string;
    mood_sad: string;
    mood_angry: string;
    // İstatistikler
    stats_title: string;
    filter_week: string;
    filter_month: string;
    filter_all: string;
    filter_custom: string;
    stat_avg: string;
    stat_freq: string;
    chart_breakdown: string;
    chart_subtitle: string;
    chart_timeline: string;
    chart_timeline_sub: string;
    section_influences: string;
    inf_exercise: string;
    unit_times: string;
    // Tarih ve Mock Data (Hata verenler buradaydı)
    time_today: string;
    time_yesterday: string;
    mock_title_1: string;
    mock_note_1: string;
    mock_title_2: string;
    mock_note_2: string;
    mock_title_3: string;
    mock_note_3: string;
    mock_title_4: string;
    mock_note_4: string;
    mock_title_5: string;
    mock_note_5: string;
    mock_title_6: string;
    mock_note_6: string;
    // Diğer
    soon_title: string;
    soon_desc: string;
}

// --- KONFİGÜRASYON ---
const moodConfig: Record<MoodType, { color: string; emoji: string; dictKey: string }> = {
    great:  { color: "#A855F7", emoji: "🤩", dictKey: "mood_great" },
    happy:  { color: "#FBBF24", emoji: "😊", dictKey: "mood_happy" },
    normal: { color: "#9CA3AF", emoji: "😐", dictKey: "mood_normal" },
    sad:    { color: "#3B82F6", emoji: "😢", dictKey: "mood_sad" },
    angry:  { color: "#EF4444", emoji: "😠", dictKey: "mood_angry" },
};

export default function MoodiesFinal() {
    const { t } = useLanguage();

    // KRİTİK DÜZELTME: Verilerin 'simulator' objesi altında.
    // Eğer t yüklenmediyse patlamasın diye boş obje fallback'i veriyoruz.
    const sim = (t.simulator || {}) as unknown as SimulatorData;

    // --- MOCK DATA ---
    const initialData = useMemo<Entry[]>(() => {
        // Veriler yüklenmediyse boş dizi döndür
        if (!t.simulator) return [];

        return [
            { id: 1, mood: "great", title: sim.mock_title_1, note: sim.mock_note_1, date: sim.time_today, time: "14:30" },
            { id: 2, mood: "happy", title: sim.mock_title_2, note: sim.mock_note_2, date: sim.time_yesterday, time: "09:15" },
            { id: 3, mood: "angry", title: sim.mock_title_3, note: sim.mock_note_3, date: "6 Ara", time: "19:45" },
            { id: 4, mood: "normal", title: sim.mock_title_4, note: sim.mock_note_4, date: "5 Ara", time: "17:20" },
            { id: 5, mood: "sad", title: sim.mock_title_5, note: sim.mock_note_5, date: "4 Ara", time: "23:10" },
            { id: 6, mood: "happy", title: sim.mock_title_6, note: sim.mock_note_6, date: "3 Ara", time: "20:00" },
        ];
    }, [t]); // t değiştiğinde (dil değiştiğinde) burası tetiklenir

    const [activeTab, setActiveTab] = useState<TabType>("stats");
    const [entries, setEntries] = useState<Entry[]>([]);

    // Initial data hesaplandığında state'i güncelle
    useEffect(() => {
        if (initialData.length > 0) {
            setEntries(initialData);
        }
    }, [initialData]);

    const [selectedInputMood, setSelectedInputMood] = useState<MoodType | null>(null);
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [statPeriod, setStatPeriod] = useState<"week" | "month" | "all">("week");

    // --- HESAPLAMALAR ---
    const moodCounts = useMemo(() => {
        const counts = { great: 0, happy: 0, normal: 0, sad: 0, angry: 0 };
        entries.forEach(e => {
            if (counts[e.mood] !== undefined) counts[e.mood]++;
        });
        return counts;
    }, [entries]);

    const mostFrequentMood = useMemo(() => {
        // Eğer entry yoksa default 'happy' dön
        if (entries.length === 0) return "happy";

        return Object.keys(moodCounts).reduce((a, b) =>
            moodCounts[a as MoodType] > moodCounts[b as MoodType] ? a : b
        ) as MoodType;
    }, [moodCounts, entries]);

    const handleSave = () => {
        if (!selectedInputMood) return;
        const now = new Date();
        const newEntry: Entry = {
            id: Date.now(),
            mood: selectedInputMood,
            title: title || sim.placeholder_title, // sim. kullanıyoruz
            note: note,
            date: sim.time_today, // sim. kullanıyoruz
            time: now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        };
        setEntries([newEntry, ...entries]);
        setTitle(""); setNote(""); setSelectedInputMood(null);
        setActiveTab("archive");
    };

    // Dil yüklenene kadar veya simülatör verisi yoksa boş dönebiliriz veya loading gösterebiliriz
    if (!t.simulator) return null;

    return (
        <section className="py-12 bg-zinc-100 min-h-screen flex flex-col items-center justify-center font-sans gap-8">

            {/* BAŞLIK ALANI */}
            <div className="text-center space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold uppercase tracking-wider">
                    {sim.label}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {sim.title}
                </h2>
            </div>

            {/* SİMÜLATÖR */}
            <div className="relative w-[375px] h-[812px] bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] border-zinc-900 overflow-hidden ring-4 ring-zinc-900/10">

                {/* Status Bar */}
                <div className="absolute top-0 w-full h-12 z-10 flex justify-between items-end px-7 pb-2 text-black font-semibold text-xs pointer-events-none">
                    <span>09:41</span>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-[18px] flex items-center justify-center gap-3 shadow-sm">
                        <div className="w-10 h-1 bg-[#1a1a1a] rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full ring-1 ring-white/10 shadow-inner"></div>
                    </div>
                    <div className="flex gap-1.5 items-center">
                        <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor" className="text-black"><path d="M1 10h2v2H1zM5 7h2v5H5zM9 4h2v8H9zM13 1h2v11h-2z" /></svg>
                        <div className="w-5 h-2.5 border border-black/30 rounded-[3px] relative flex items-center p-0.5"><div className="w-full h-full bg-black rounded-[1px]" /><div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-1 bg-black/30 rounded-r-sm" /></div>
                    </div>
                </div>

                <div className="w-full h-full overflow-y-auto bg-[#FAFAFA] pt-16 pb-24 scrollbar-hide">
                    <AnimatePresence mode="wait">

                        {/* === HOME TAB === */}
                        {activeTab === "home" && (
                            <motion.div key="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="px-5 pt-2">
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Moodies</h1>
                                    <button className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600"><Calendar size={20}/></button>
                                </div>
                                <div className="bg-gradient-to-b from-[#4ADE80] to-[#22C55E] rounded-[2rem] p-6 text-white shadow-xl shadow-green-500/20 mb-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                    <h2 className="text-lg font-bold text-center mb-6 relative z-10">{sim.greeting}</h2>
                                    <div className="flex justify-between items-start relative z-10">
                                        {Object.entries(moodConfig).map(([key, m]) => (
                                            <button key={key} onClick={() => setSelectedInputMood(key as MoodType)} className="flex flex-col items-center gap-2 group">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-200 ${selectedInputMood === key ? 'bg-white scale-110 shadow-lg ring-4 ring-white/30' : 'bg-white/20 hover:bg-white/30'}`}>{m.emoji}</div>
                                                {/* DÜZELTME: sim[...] kullanıyoruz */}
                                                <span className="text-[10px] font-bold opacity-90">{sim[m.dictKey as keyof typeof sim]}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <input type="text" placeholder={sim.placeholder_title} value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-white p-4 rounded-2xl text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500/20 border border-slate-100 shadow-sm"/>
                                    <textarea placeholder={sim.placeholder_note} value={note} onChange={(e) => setNote(e.target.value)} className="w-full h-32 bg-white p-4 rounded-2xl text-slate-800 font-medium resize-none focus:outline-none focus:ring-2 focus:ring-green-500/20 border border-slate-100 shadow-sm"/>
                                </div>
                                <button onClick={handleSave} className="w-full bg-[#22C55E] text-white font-bold text-lg py-4 rounded-full mt-6 shadow-lg shadow-green-500/30 active:scale-95 transition-transform">{sim.btn_save}</button>
                            </motion.div>
                        )}

                        {/* === ARCHIVE TAB === */}
                        {activeTab === "archive" && (
                            <motion.div key="archive" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="px-5 pt-2">
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-3xl font-extrabold text-slate-900">{sim.tab_archive}</h1>
                                    <div className="flex gap-2">
                                        <button className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400"><Calendar size={18}/></button>
                                        <button className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400"><ListFilter size={18}/></button>
                                        <button className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400"><ArrowUpDown size={18}/></button>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {entries.map((entry) => {
                                        const m = moodConfig[entry.mood];
                                        let bgClass = "bg-gray-100 text-gray-600";
                                        if(entry.mood === 'great') bgClass = "bg-purple-100 text-purple-600";
                                        if(entry.mood === 'happy') bgClass = "bg-yellow-100 text-yellow-600";
                                        if(entry.mood === 'normal') bgClass = "bg-gray-100 text-gray-600";
                                        if(entry.mood === 'sad') bgClass = "bg-blue-100 text-blue-600";
                                        if(entry.mood === 'angry') bgClass = "bg-red-100 text-red-600";

                                        return (
                                            <div key={entry.id} className="bg-[#F0FDF4] p-5 rounded-[1.8rem] flex flex-col gap-2 relative overflow-hidden">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex items-center gap-3 overflow-hidden">
                                                        <div className={`w-11 h-11 rounded-full ${bgClass} flex items-center justify-center text-xl shrink-0`}>{m.emoji}</div>
                                                        <h3 className="font-bold text-slate-900 text-[15px] truncate pr-2">{entry.title}</h3>
                                                    </div>
                                                    <div className="flex flex-col items-end shrink-0">
                                                        <span className="text-[11px] font-bold text-[#4ADE80]">{entry.date}</span>
                                                        <span className="text-[10px] font-medium text-[#4ADE80] opacity-80">{entry.time}</span>
                                                    </div>
                                                </div>
                                                <p className="text-slate-500 text-[12px] font-medium pl-1 leading-snug line-clamp-2">{entry.note}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}

                        {/* === STATS TAB === */}
                        {activeTab === "stats" && (
                            <motion.div key="stats" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="px-5 pt-2">
                                <h1 className="text-3xl font-extrabold text-slate-900 mb-6">{sim.stats_title}</h1>

                                <div className="bg-slate-100 p-1 rounded-[14px] flex mb-6">
                                    {(['week', 'month', 'all'] as const).map(periodKey => (
                                        <button
                                            key={periodKey}
                                            onClick={() => setStatPeriod(periodKey)}
                                            // Dinamik key erişimi: sim[`filter_week`] gibi
                                            className={`flex-1 py-1.5 text-[11px] font-bold rounded-[10px] transition-all capitalize ${statPeriod === periodKey ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`}
                                        >
                                            {sim[`filter_${periodKey}` as keyof typeof sim]}
                                        </button>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-white p-5 rounded-[24px] border border-slate-50 shadow-sm flex flex-col justify-between h-28">
                                        <p className="text-[11px] text-slate-400 font-bold tracking-wide">{sim.stat_avg}</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center text-xl">😊</div>
                                            <span className="text-lg font-bold text-slate-900">{sim.mood_happy}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white p-5 rounded-[24px] border border-slate-50 shadow-sm flex flex-col justify-between h-28">
                                        <p className="text-[11px] text-slate-400 font-bold tracking-wide">{sim.stat_freq}</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xl">
                                                {moodConfig[mostFrequentMood].emoji}
                                            </div>
                                            <span className="text-lg font-bold text-slate-900">
                                                {sim[moodConfig[mostFrequentMood].dictKey as keyof typeof sim]}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-200 mb-6">
                                    <h3 className="text-[15px] font-bold text-slate-900 mb-1">{sim.chart_breakdown}</h3>
                                    <p className="text-[11px] text-slate-500 mb-8">{sim.chart_subtitle}</p>

                                    <div className="flex items-end justify-between h-48 px-2 gap-3">
                                        {Object.keys(moodConfig).map((key) => {
                                            const mood = key as MoodType;
                                            const cfg = moodConfig[mood];
                                            const count = entries.filter(e => e.mood === mood).length;
                                            const allCounts = Object.keys(moodConfig).map(k => entries.filter(e => e.mood === k as MoodType).length);
                                            const maxCount = Math.max(...allCounts, 1);
                                            const heightPercent = (count / maxCount) * 100;

                                            return (
                                                <div key={mood} className="flex flex-col items-center justify-end gap-3 w-full h-full group cursor-pointer relative">
                                                    <div className="w-full relative flex items-end justify-center rounded-t-[10px] transition-all duration-500 hover:brightness-90"
                                                         style={{
                                                             height: count > 0 ? `${heightPercent}%` : '4px',
                                                             backgroundColor: count > 0 ? cfg.color : '#F3F4F6',
                                                             minHeight: count > 0 ? '20px' : '4px'
                                                         }}
                                                    >
                                                        {count > 0 && (
                                                            <div className="absolute -top-10 mb-2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                                                {count} {sim.unit_times}
                                                                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-lg mb-1 filter grayscale group-hover:grayscale-0 transition-all">{cfg.emoji}</div>
                                                        <span className={`text-[10px] font-bold transition-colors ${count > 0 ? 'text-slate-600' : 'text-slate-300'}`}>
                                                            {sim[cfg.dictKey as keyof typeof sim]}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-50 mb-6 pb-12">
                                    <h3 className="text-[15px] font-bold text-slate-900 mb-1">{sim.chart_timeline}</h3>
                                    <p className="text-[11px] text-slate-400 mb-8">{sim.chart_timeline_sub}</p>
                                    <div className="relative w-full h-40">
                                        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 150" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#22C55E" stopOpacity="0.2"/>
                                                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0"/>
                                                </linearGradient>
                                            </defs>
                                            <path d="M0,80 C40,80 60,80 80,80 C110,80 130,130 140,130 C150,130 160,50 170,50 C180,50 190,140 200,140 C210,140 220,60 230,60 C250,60 280,110 300,110 L300,180 L0,180 Z" fill="url(#curveGradient)" stroke="none"/>
                                            <path d="M0,80 C40,80 60,80 80,80 C110,80 130,130 140,130 C150,130 160,50 170,50 C180,50 190,140 200,140 C210,140 220,60 230,60 C250,60 280,110 300,110" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className="mb-4 px-1">
                                    <h3 className="text-[15px] font-bold text-slate-900 mb-4">{sim.section_influences}</h3>
                                    <div className="bg-white p-4 rounded-[24px] shadow-sm border border-slate-50 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-11 h-11 rounded-full bg-[#f0fdf4] flex items-center justify-center text-green-600">
                                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14l-2.5-3.5L12 18l-3-7-3 3"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                                            </div>
                                            <span className="text-sm font-bold text-slate-900">{sim.inf_exercise}</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-yellow-600 bg-yellow-100/80 px-3 py-1.5 rounded-full">{sim.mood_happy}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {(activeTab === 'friends' || activeTab === 'profile') && (
                            <div className="flex flex-col items-center justify-center h-64 text-slate-400 font-bold">
                                <span>{sim.soon_title}</span>
                                <span className="text-xs font-normal mt-1">{sim.soon_desc}</span>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* === TAB BAR === */}
                <div className="absolute bottom-0 w-full bg-white border-t border-slate-100 pb-8 pt-3 px-6 flex justify-between items-center z-40">
                    <TabItem icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>} label={sim.tab_home} active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
                    <TabItem icon={<LayoutGrid size={24} />} label={sim.tab_archive} active={activeTab === 'archive'} onClick={() => setActiveTab('archive')} />
                    <TabItem icon={<User size={24} />} label={sim.tab_friends} active={activeTab === 'friends'} onClick={() => setActiveTab('friends')} />
                    <TabItem icon={<BarChart2 size={24} />} label={sim.tab_stats} active={activeTab === 'stats'} onClick={() => setActiveTab('stats')} />
                    <TabItem icon={<User size={24} />} label={sim.tab_profile} active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/80 rounded-full z-50"></div>
            </div>
        </section>
    );
}

function TabItem({ icon, label, active, onClick }: any) {
    return (
        <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all duration-300 relative group ${active ? 'text-green-500 scale-105' : 'text-slate-300 hover:text-slate-400'}`}>
            {active && <motion.div layoutId="activeTab" className="absolute -top-3 w-8 h-1 bg-green-500 rounded-b-full shadow-[0_2px_8px_rgba(34,197,94,0.4)]" />}
            <div className="w-6 h-6 flex items-center justify-center">{React.cloneElement(icon, { strokeWidth: active ? 2.5 : 2 })}</div>
            <span className="text-[10px] font-bold">{label}</span>
        </button>
    );
}
