"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function MoodDemo() {
    const { language } = useLanguage();
    const [selectedMood, setSelectedMood] = useState<string | null>(null);

    const moods = [
        { emoji: "😤", id: "angry", label: language === 'tr' ? "Sinirli" : "Angry", color: "bg-red-500", message: language === 'tr' ? "Derin bir nefes al. Seni sinirlendiren şeyi bir kağıda yazıp yırtmaya ne dersin?" : "Take a deep breath. How about writing down what angered you and tearing it up?" },
        { emoji: "😔", id: "sad", label: language === 'tr' ? "Üzgün" : "Sad", color: "bg-blue-500", message: language === 'tr' ? "Sarılmaya ihtiyacın var gibi. En yakın arkadaşına 'Sadece sesini duymak istedim' yaz." : "Looks like you need a hug. Text your bestie 'Just wanted to hear your voice'." },
        { emoji: "😐", id: "neutral", label: language === 'tr' ? "Nötr" : "Meh", color: "bg-gray-400", message: language === 'tr' ? "Sıradan bir gün mü? Bugün farklı bir yoldan eve gitmeyi dene, rutini kır." : "Just an ordinary day? Try walking home a different way, break the routine." },
        { emoji: "🙂", id: "good", label: language === 'tr' ? "İyi" : "Good", color: "bg-green-500", message: language === 'tr' ? "Harika! Bu enerjiyi sakla. Bugün seni gülümseten 3 şeyi not al." : "Great! Keep this energy. Note down 3 things that made you smile today." },
        { emoji: "🤩", id: "amazing", label: language === 'tr' ? "Harika" : "Amazing", color: "bg-orange-500", message: language === 'tr' ? "Yıldız gibisin! 🌟 Bu enerjiyi arkadaşlarına bulaştır, bu akşam plan yap!" : "You're a star! 🌟 Spread this energy to your friends, make plans tonight!" },
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
                    {language === 'tr' ? "Bugün Nasıl Hissediyorsun?" : "How are you feeling today?"}
                </h2>
                <p className="text-slate-500 mb-12">
                    {language === 'tr' ? "Bir emoji seç ve Moodies'in sana ne önereceğini gör." : "Pick an emoji and see what Moodies suggests."}
                </p>

                {/* EMOJI ROW */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                    {moods.map((mood) => (
                        <motion.button
                            key={mood.id}
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedMood(mood.id)}
                            className={`flex flex-col items-center gap-3 transition-all duration-300 ${selectedMood === mood.id ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-100'}`}
                        >
                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-xl ${selectedMood === mood.id ? 'bg-white ring-4 ring-brand-200' : 'bg-white'}`}>
                                {mood.emoji}
                            </div>
                            <span className="text-sm font-bold text-slate-600">{mood.label}</span>
                        </motion.button>
                    ))}
                </div>

                {/* CEVAP KUTUSU */}
                <div className="h-32 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {selectedMood ? (
                            <motion.div
                                key={selectedMood}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white px-8 py-6 rounded-2xl shadow-xl border border-slate-100 max-w-lg relative"
                            >
                                {/* Konuşma Balonu Ucu */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-t border-l border-slate-100"></div>

                                <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed">
                                    "{moods.find(m => m.id === selectedMood)?.message}"
                                </p>
                            </motion.div>
                        ) : (
                            <p className="text-slate-400 italic">
                                {language === 'tr' ? "(Bir seçim yapmanı bekliyorum...)" : "(Waiting for you to pick...)"}
                            </p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
