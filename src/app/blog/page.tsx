import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { getAllPosts, BlogPost } from "@/lib/blog";

export const metadata: Metadata = {
    title: "Blog | Moodies — Duygu, Psikoloji & Uygulama Haberleri",
    description: "Duygu takibi, mental sağlık, psikoloji ve Moodies güncellemeleri hakkında yazılar. Kendini daha iyi anlamak için okumaya değer içerikler.",
    openGraph: {
        title: "Moodies Blog",
        description: "Duygu, psikoloji ve uygulama haberleri",
        type: "website",
    },
};

const categoryColors: Record<string, string> = {
    "Hakkında": "bg-brand-50 text-brand-600 border-brand-200",
    "Psikoloji": "bg-purple-50 text-purple-600 border-purple-200",
    "Özellikler": "bg-orange-50 text-orange-600 border-orange-200",
    "Güncellemeler": "bg-blue-50 text-blue-600 border-blue-200",
};

function PostCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1">
                {/* Kapak */}
                <div className={`h-48 bg-gradient-to-br ${post.coverColor} flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-7xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{post.coverEmoji}</span>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* İçerik */}
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[post.category] || "bg-slate-50 text-slate-600 border-slate-200"}`}>
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                            <Clock size={12} />
                            <span>{post.readingTime} dk okuma</span>
                        </div>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
                        {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">
                        {post.description}
                    </p>

                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                        <span className="text-xs text-slate-400 font-medium">
                            {new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                        </span>
                        <span className="text-xs font-bold text-brand-500 group-hover:gap-2 flex items-center gap-1">
                            Oku →
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default function BlogPage() {
    const posts = getAllPosts();
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <main className="min-h-screen bg-slate-50 pt-28">

            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* Başlık */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                        <Tag size={12} />
                        Moodies Blog
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Duygu, Psikoloji &<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Uygulama Haberleri</span>
                    </h1>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        Kendini daha iyi anlamana yardımcı olacak içerikler ve Moodies'teki yenilikler.
                    </p>
                </div>

                {/* Öne Çıkan Yazı */}
                {featuredPost && (
                    <Link href={`/blog/${featuredPost.slug}`} className="group block mb-12">
                        <article className={`bg-gradient-to-br ${featuredPost.coverColor} rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300`}>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
                            <div className="absolute bottom-0 left-0 text-[10rem] leading-none opacity-20 select-none -mb-6 -ml-4 group-hover:opacity-30 transition-opacity">
                                {featuredPost.coverEmoji}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                                        ⭐ Öne Çıkan
                                    </span>
                                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                                        {featuredPost.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-white/70 text-xs font-medium">
                                        <Clock size={12} />
                                        <span>{featuredPost.readingTime} dk</span>
                                    </div>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight max-w-2xl">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-white/80 text-base leading-relaxed max-w-xl">
                                    {featuredPost.description}
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-50 transition-colors">
                                    Oku →
                                </div>
                            </div>
                        </article>
                    </Link>
                )}

                {/* Diğer Yazılar */}
                {otherPosts.length > 0 && (
                    <>
                        <h2 className="text-xl font-extrabold text-slate-900 mb-6">Tüm Yazılar</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherPosts.map(post => (
                                <PostCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
