import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getPostBySlug, getAllPosts, BlogPost } from "@/lib/blog";

// Statik parametre üretimi (SSG)
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map(post => ({ slug: post.slug }));
}

// Dinamik SEO meta
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Yazı Bulunamadı | Moodies Blog" };

    return {
        title: `${post.title} | Moodies Blog`,
        description: post.description,
        keywords: post.tags.join(", "),
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
    };
}

// Markdown-benzeri içeriği basit HTML'e çevir
function renderContent(content: string) {
    return content
        .split("\n")
        .map((line, i) => {
            if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-extrabold text-slate-900 mt-10 mb-4 leading-tight">{line.slice(3)}</h2>;
            if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold text-slate-800 mt-6 mb-3">{line.slice(4)}</h3>;
            if (line.startsWith("> ")) return <blockquote key={i} className="border-l-4 border-brand-400 bg-brand-50 px-5 py-3 rounded-r-2xl my-4 text-slate-700 font-medium italic text-sm">{line.slice(2)}</blockquote>;
            if (line.startsWith("- ")) return <li key={i} className="ml-4 text-slate-600 leading-relaxed list-disc">{line.slice(2)}</li>;
            if (line.match(/^\d+\./)) return <li key={i} className="ml-4 text-slate-600 leading-relaxed list-decimal">{line.replace(/^\d+\.\s/, "")}</li>;
            if (line.trim() === "") return <div key={i} className="h-2" />;
            // Bold inline
            const parts = line.split(/\*\*(.*?)\*\*/g);
            const rendered = parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="font-bold text-slate-900">{part}</strong> : part);
            return <p key={i} className="text-slate-600 leading-relaxed text-base">{rendered}</p>;
        });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const allPosts = getAllPosts().filter(p => p.slug !== slug).slice(0, 2);

    // JSON-LD (Google için yapılandırılmış veri)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        author: { "@type": "Organization", name: post.author },
        datePublished: post.date,
        keywords: post.tags.join(", "),
        publisher: {
            "@type": "Organization",
            name: "Moodies",
            logo: { "@type": "ImageObject", url: "https://moodies.app/Moodies-logo.png" },
        },
    };

    return (
        <main className="min-h-screen bg-slate-50 pt-24">
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Breadcrumb */}
            <div className="max-w-3xl mx-auto px-4 pt-6 pb-2">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-600 transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Tüm Yazılar
                </Link>
            </div>

            {/* Hero Kapak */}
            <div className={`bg-gradient-to-br ${post.coverColor} py-20 px-4 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-white/70 text-xs font-medium">
                            <Clock size={12} />
                            <span>{post.readingTime} dk okuma</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/70 text-xs font-medium">
                            <Calendar size={12} />
                            <span>{new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                        {post.title}
                    </h1>
                    <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                        {post.description}
                    </p>
                </div>
            </div>

            {/* İçerik */}
            <div className="max-w-3xl mx-auto px-4 py-12">
                <article className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-1">
                    {renderContent(post.content)}
                </article>

                {/* Taglar */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {post.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-xs font-semibold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full border border-slate-200">
                            <Tag size={10} />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA Block */}
                <div className="mt-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-8 text-center relative overflow-hidden shadow-xl shadow-brand-500/20">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    <div className="relative z-10">
                        <div className="text-4xl mb-3">😊</div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">Moodies'i Dene</h3>
                        <p className="text-brand-100 mb-6 text-sm">Temel özellikler sonsuza kadar ücretsiz.</p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-white text-brand-600 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-brand-50 transition-colors shadow-lg"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.23-3.14-2.47-1.72-2.48-2.92-6.52-1.22-9.45 1.07-1.87 2.96-2.95 5.06-2.95 1.54 0 2.87 1.05 3.75 1.05.88 0 2.53-1.28 4.25-1.09 1.45.06 2.57.59 3.29 1.63-2.65 1.57-2.18 5.76.62 6.95-.5 1.49-1.2 2.98-2.32 4.62zm-3.27-14.8c.68-1.2 1.14-2.86.99-4.52-1.46.12-3.23 1.03-4.29 2.29-.63.75-1.18 2.08-1.04 3.76 1.64.13 3.3-1.03 4.34-1.53z" /></svg>
                            App Store&apos;dan İndir
                        </a>
                        <p className="text-brand-200 text-xs mt-3 font-medium">*Yakında yayınlanacak</p>
                    </div>
                </div>

                {/* İlgili Yazılar */}
                {allPosts.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-xl font-extrabold text-slate-900 mb-5">İlgili Yazılar</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {allPosts.map(p => (
                                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                                    <div className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition-all">
                                        <div className="text-3xl mb-3">{p.coverEmoji}</div>
                                        <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">{p.title}</h3>
                                        <p className="text-slate-400 text-xs mt-2 font-medium">{p.readingTime} dk okuma</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
