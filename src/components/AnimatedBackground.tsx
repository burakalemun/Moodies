"use client";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/*
        Bu katman sayfanın en arkasında (z-[-10]) durur.
        Mouse etkileşimini engellemez (pointer-events-none).
      */}

            {/* BLOB 1: Yeşil (Ana Renk) - Sol Üstten Dolaşır */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

            {/* BLOB 2: Sarı (Mutlu) - Sağ Üstten Dolaşır */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            {/* BLOB 3: Mor (Sakin) - Aşağıdan Dolaşır */}
            <div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            {/* Noise Texture (Hafif kumlanma efekti - Kalite katar) */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* CSS Animasyonları (Tailwind Config'e eklemezsen buraya yazabilirsin) */}
            <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
}
