"use client";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
    const { t } = useLanguage();

    // Dinamik hale getirdik
    const reviews = [
        { name: "Elif Y.", role: t.testimonials.review_role_1, content: t.testimonials.review_1, stars: 5, avatarBg: "bg-purple-100", avatarColor: "text-purple-600", initial: "E" },
        { name: "Burak K.", role: t.testimonials.review_role_2, content: t.testimonials.review_2, stars: 5, avatarBg: "bg-blue-100", avatarColor: "text-blue-600", initial: "B" },
        { name: "Selin A.", role: t.testimonials.review_role_3, content: t.testimonials.review_3, stars: 5, avatarBg: "bg-yellow-100", avatarColor: "text-yellow-600", initial: "S" },
        { name: "Mert D.", role: t.testimonials.review_role_4, content: t.testimonials.review_4, stars: 4, avatarBg: "bg-green-100", avatarColor: "text-green-600", initial: "M" },
        { name: "Zeynep T.", role: t.testimonials.review_role_5, content: t.testimonials.review_5, stars: 5, avatarBg: "bg-red-100", avatarColor: "text-red-600", initial: "Z" },
        { name: "Caner Ö.", role: t.testimonials.review_role_6, content: t.testimonials.review_6, stars: 5, avatarBg: "bg-orange-100", avatarColor: "text-orange-600", initial: "C" },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
                        {t.testimonials.title}
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg">
                        {t.testimonials.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, starIndex) => (
                                    <Star key={starIndex} size={16} className={`${starIndex < review.stars ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200"}`} />
                                ))}
                            </div>
                            <div className="relative">
                                <Quote className="absolute -top-2 -left-2 text-brand-100 w-8 h-8 -z-10 transform -scale-x-100" />
                                <p className="text-slate-600 leading-relaxed font-medium">"{review.content}"</p>
                            </div>
                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50">
                                <div className={`w-10 h-10 rounded-full ${review.avatarBg} ${review.avatarColor} flex items-center justify-center font-bold text-lg`}>{review.initial}</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                                    <p className="text-slate-400 text-xs">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
