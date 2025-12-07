"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Bell, Users, Wifi, Brain } from "lucide-react"; // Gerekli ikonları import ediyoruz
import { motion } from "framer-motion";

// İkonları string'e göre getiren bir helper fonksiyon
const iconMap: { [key: string]: React.ElementType } = {
    Bell,
    Users,
    Wifi,
    Brain
};

export default function Features() {
    const { t } = useLanguage();

    // Çeviri dosyasındaki 'items' dizisi boşsa veya yoksa hata vermemesi için kontrol
    const featureItems = t.features?.items || [];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {t.features.title}
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                        {t.features.subtitle}
                    </p>
                </div>

                {/* 2x2 Bento Grid - Daha modern bir görünüm */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* features.items dizisindeki her bir eleman için bir kart oluşturuyoruz */}
                    {featureItems.map((item, index) => {
                        const IconComponent = iconMap[item.icon] || Brain; // İkon bulunamazsa varsayılan olarak Brain kullan
                        const colors = [
                            { bg: "bg-brand-50", text: "text-brand-600" },
                            { bg: "bg-purple-50", text: "text-purple-600" },
                            { bg: "bg-blue-50", text: "text-blue-600" },
                            { bg: "bg-orange-50", text: "text-orange-600" },
                        ];
                        const colorSet = colors[index % colors.length]; // Her kart için farklı renk seti

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colorSet.bg} border-slate-200/50`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm ${colorSet.text}`}>
                                        <IconComponent size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
