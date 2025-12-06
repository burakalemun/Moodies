"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Marquee() {
    const { t } = useLanguage();

    // Mood listesi artık dil dosyasından geliyor
    const moods = [
        { icon: "😊", text: t.marquee.happy },
        { icon: "😴", text: t.marquee.tired },
        { icon: "🤩", text: t.marquee.great },
        { icon: "😢", text: t.marquee.sad },
        { icon: "😡", text: t.marquee.angry },
        { icon: "🧘", text: t.marquee.calm },
        { icon: "🤔", text: t.marquee.thoughtful },
        { icon: "🥳", text: t.marquee.fun },
        { icon: "🤒", text: t.marquee.sick },
        { icon: "🥰", text: t.marquee.love },
    ];

    return (
        <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex gap-12 animate-marquee whitespace-nowrap">
                {/* Sonsuz döngü */}
                {[...moods, ...moods, ...moods, ...moods].map((mood, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                        <span className="text-4xl">{mood.icon}</span>
                        <span className="text-lg font-bold text-slate-400">{mood.text}</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
