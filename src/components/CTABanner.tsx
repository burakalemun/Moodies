"use client";
import { useState, useEffect } from "react";
import { Star, ArrowRight, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MOODS = [
    { emoji: "😊", label: "Mutlu", color: "from-green-400 to-emerald-500" },
    { emoji: "🤩", label: "Coşkulu", color: "from-yellow-400 to-orange-500" },
    { emoji: "🧘", label: "Sakin", color: "from-blue-400 to-cyan-500" },
    { emoji: "🥰", label: "Neşeli", color: "from-pink-400 to-rose-500" },
    { emoji: "💪", label: "Güçlü", color: "from-purple-400 to-violet-500" },
    { emoji: "🌈", label: "Umutlu", color: "from-brand-400 to-brand-600" },
];

function FloatingCard({ emoji, label, color, style }: {
    emoji: string; label: string; color: string; style: React.CSSProperties
}) {
    return (
        <div
            className="absolute flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-white/60 select-none"
            style={style}
        >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-xl flex-shrink-0`}>
                {emoji}
            </div>
            <div>
                <p className="text-xs text-slate-400 font-medium leading-none mb-0.5">Mood</p>
                <p className="text-sm font-bold text-slate-800 leading-none">{label}</p>
            </div>
        </div>
    );
}

function MiniPhone() {
    const [activeMood, setActiveMood] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActiveMood(p => (p + 1) % MOODS.length), 2000);
        return () => clearInterval(t);
    }, []);

    const mood = MOODS[activeMood];

    return (
        <div className="relative w-[220px] h-[440px] flex-shrink-0">
            {/* Gölge */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black/20 rounded-full blur-xl" />

            {/* Telefon gövdesi */}
            <div className="relative w-full h-full bg-slate-900 rounded-[2.8rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

                {/* Ekran içeriği */}
                <div className="w-full h-full bg-slate-50 flex flex-col">
                    {/* App header */}
                    <div className="pt-10 px-4 pb-3 flex items-center justify-between">
                        <div>
                            <p className="text-[10px] text-slate-400 font-medium">Bugün, nasılsın?</p>
                            <p className="text-sm font-bold text-slate-900">Moodunu seç 👇</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                            <Heart size={14} className="text-brand-500 fill-brand-500" />
                        </div>
                    </div>

                    {/* Mood büyük gösterge */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
                        <div
                            key={activeMood}
                            className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${mood.color} flex items-center justify-center text-5xl shadow-lg transition-all duration-500`}
                            style={{ animation: "pop 0.4s ease" }}
                        >
                            {mood.emoji}
                        </div>
                        <div className="text-center">
                            <p className="font-extrabold text-slate-900 text-lg">{mood.label}</p>
                            <p className="text-xs text-slate-400 mt-0.5">Tap to record</p>
                        </div>

                        {/* Mood grid */}
                        <div className="grid grid-cols-3 gap-2 w-full mt-2">
                            {MOODS.map((m, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveMood(i)}
                                    className={`aspect-square rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${activeMood === i
                                            ? `bg-gradient-to-br ${m.color} shadow-md scale-110`
                                            : "bg-white border border-slate-100 hover:scale-105"
                                        }`}
                                >
                                    {m.emoji}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Log button */}
                    <div className="px-4 pb-6">
                        <div className={`w-full py-3 rounded-2xl bg-gradient-to-r ${mood.color} flex items-center justify-center gap-2 shadow-lg`}>
                            <span className="text-white font-bold text-sm">Kaydet</span>
                            <ArrowRight size={14} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes pop {
          0% { transform: scale(0.85); opacity: 0.6; }
          60% { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </div>
    );
}

export default function CTABanner() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-violet-700 shadow-2xl shadow-brand-500/30">

                    {/* Arka plan dekor */}
                    <div className="absolute inset-0 opacity-[0.06]"
                        style={{ backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-brand-400/15 rounded-full blur-3xl" />

                    {/* İçerik grid */}
                    <div className="relative z-10 grid lg:grid-cols-2 gap-0 items-center min-h-[520px]">

                        {/* Sol: Metin */}
                        <div className="px-10 py-16 lg:px-16 lg:py-20 flex flex-col gap-7">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full w-fit">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={11} className="fill-yellow-300 text-yellow-300" />
                                    ))}
                                </div>
                                <span className="text-white/90 text-sm font-semibold">{t.cta_banner.user_count}</span>
                                <Sparkles size={13} className="text-yellow-300" />
                            </div>

                            {/* Başlık */}
                            <div className="space-y-3">
                                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                                    {t.cta_banner.title_1}
                                    <br />
                                    <span className="text-brand-100">{t.cta_banner.title_2}</span>
                                </h2>
                                <p className="text-brand-100 text-base leading-relaxed max-w-md">
                                    {t.cta_banner.description}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col gap-3">
                                <button className="group inline-flex items-center gap-3 bg-white text-brand-600 px-7 py-4 rounded-2xl font-bold text-base hover:bg-brand-50 transition-all hover:-translate-y-1 active:translate-y-0 shadow-xl shadow-black/15 w-fit">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.23-3.14-2.47-1.72-2.48-2.92-6.52-1.22-9.45 1.07-1.87 2.96-2.95 5.06-2.95 1.54 0 2.87 1.05 3.75 1.05.88 0 2.53-1.28 4.25-1.09 1.45.06 2.57.59 3.29 1.63-2.65 1.57-2.18 5.76.62 6.95-.5 1.49-1.2 2.98-2.32 4.62zm-3.27-14.8c.68-1.2 1.14-2.86.99-4.52-1.46.12-3.23 1.03-4.29 2.29-.63.75-1.18 2.08-1.04 3.76 1.64.13 3.3-1.03 4.34-1.53z" />
                                    </svg>
                                    {t.cta_banner.button}
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-brand-200 text-xs font-medium pl-1">{t.cta_banner.subtext}</p>
                            </div>

                            {/* Sosyal kanıt avatarlar */}
                            <div className="flex items-center gap-3 pt-2">
                                <div className="flex -space-x-2.5">
                                    {["from-pink-400 to-rose-500", "from-blue-400 to-cyan-500", "from-green-400 to-emerald-500", "from-yellow-400 to-orange-500"].map((g, i) => (
                                        <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-white/30 flex items-center justify-center text-sm`}>
                                            {["😊", "🤩", "🧘", "🥰"][i]}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-white/80 text-sm font-medium">+{t.cta_banner.user_count}</p>
                            </div>
                        </div>

                        {/* Sağ: Telefon + Floating cards */}
                        <div className="relative hidden lg:flex items-center justify-center h-full min-h-[520px]">

                            {/* Floating mood kartları */}
                            <FloatingCard
                                emoji="🔔" label="Arkadaşın iyi!" color="from-yellow-400 to-orange-500"
                                style={{ top: "10%", left: "-5%", animation: "float1 5s ease-in-out infinite" }}
                            />
                            <FloatingCard
                                emoji="📊" label="Haftalık Rapor" color="from-blue-400 to-cyan-500"
                                style={{ bottom: "15%", left: "-10%", animation: "float2 6s ease-in-out infinite" }}
                            />
                            <FloatingCard
                                emoji="🤝" label="Ortak Anı" color="from-purple-400 to-violet-500"
                                style={{ top: "20%", right: "-8%", animation: "float1 7s ease-in-out infinite reverse" }}
                            />

                            {/* Telefon */}
                            <div style={{ animation: "float2 8s ease-in-out infinite" }}>
                                <MiniPhone />
                            </div>

                            <style jsx>{`
                @keyframes float1 {
                  0%, 100% { transform: translateY(0px) rotate(-2deg); }
                  50% { transform: translateY(-12px) rotate(1deg); }
                }
                @keyframes float2 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
              `}</style>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
