# Moodies Web — Roadmap

## 🔴 Phase 1 — Hemen (Bug & UX)

### Navigasyon
- [ ] Navbar linkleri fazla — Blog + Geri Bildirim'i "Daha Fazla" dropdown'a al ya da **footer'da bırak**
- [ ] Blog tekil yazıda "← Tüm Yazılar" breadcrumb ekle

### Mobil Sorunlar
- [ ] `AppSimulator` 375px sabit — mobilde taşıyor, `transform: scale()` ile responsive yap
- [ ] Navbar'ın mobil menüsü 7 link ile çok uzun, gözden geçir

### İçerik Hataları
- [ ] StickyStory Unsplash URL'lerini yerel görselle değiştir (dış bağımlılık riski)
- [ ] Footer sosyal medya ikonlarına gerçek linkler ekle (şu an `href="#"`)
- [ ] [LanguageContext](file:///Users/burakkaya/Desktop/Moodies/src/context/LanguageContext.tsx#9-14) hydration flash düzelt — başlangıç state tutarlı olsun

---

## 🟡 Phase 2 — SEO & Teknik Altyapı

### SEO
- [ ] `app/sitemap.ts` → blog yazıları otomatik dahil olsun
- [ ] `app/robots.txt` → Google bot'a izin ver
- [ ] Ana sayfa `metadata` objesine Open Graph image ekle (şu an yok)
- [ ] Blog yazılarına schema.org breadcrumb JSON-LD ekle
- [ ] Canonical URL tag'leri

### Email & Form
- [ ] Resend'de `moodies.app` domain'i doğrula → `noreply@moodies.app`'ten gönder
- [ ] Feedback formuna spam koruması ekle (honeypot ya da rate limiting)
- [ ] Form gönderiminde kullanıcıya otomatik teşekkür maili

### Performans
- [ ] `AppSimulator` lazy load et (büyük bileşen, ilk yüklemeye ekleniyor)
- [ ] Blog görselleri için `next/image` placeholder blur ekle
- [ ] `next.config.js`'te `images.qualities` uyarısını gider (şu an console'da var)

---

## 🟢 Phase 3 — Yeni Sayfalar & İçerik

### Pricing Sayfası
- [ ] `/pricing` sayfası: Free / Plus / Premium / Lifetime
- [ ] Türkiye / EU / USA bölge bazlı fiyatlandırma toggle'ı
- [ ] Feature karşılaştırma tablosu
- [ ] FAQ (fiyatlandırmaya özel)

### Ana Sayfa Yeni Section'lar
- [ ] **Son Blog Yazıları** section'ı → `/blog`'a trafiği yönlendir
- [ ] **Ülkelere Göre İndirme** istatistikleri (sosyal kanıt)
- [ ] **Press / Medyada Biz** logoları

### Blog
- [ ] Daha fazla yazı ekle (hedef: ayda 4)
- [ ] Kategori sayfaları: `/blog/psikoloji`, `/blog/ozellikler`
- [ ] Okuma progress bar (yazı içinde ilerledikçe üstte çubuk dolar)
- [ ] Sosyal medyada paylaş butonları (Twitter/X, WhatsApp)

---

## 🔵 Phase 4 — Tasarım & Dark Mode

### Dark Mode
- [ ] `next-themes` entegrasyonu
- [ ] Navbar'a ☀️/🌙 toggle ekle
- [ ] Tüm bileşenlerde `dark:` class'larını ekle
  - Navbar, Hero, BentoFeatures, Testimonials, FAQ, CTABanner, Footer
  - Blog ve Feedback sayfaları
- [ ] [globals.css](file:///Users/burakkaya/Desktop/Moodies/src/app/globals.css)'e dark tema değişkenleri ekle

### Tasarım İyileştirmeleri
- [ ] Hero section'a **video arka plan** seçeneği (Framer Motion ile geçiş)
- [ ] BentoFeatures hover animasyonlarını zenginleştir
- [ ] Scroll progress indicator (sayfanın sağında ince çubuk)
- [ ] Sayfa geçiş animasyonu (route değişiminde fade)
- [ ] [Marquee](file:///Users/burakkaya/Desktop/Moodies/src/components/Marquee.tsx#4-51) bileşenine daha fazla mood emoji ekle + ikinci satır ters yönde

### Micro-interactions
- [ ] Butonlara ripple effect ekle
- [ ] FAQ açılırken animasyon ekle (şu an HTML `<details>` ile çalışıyor, Framer Motion'a geç)
- [ ] Testimonials'a carousel/slider ekle (6 kart grid yerine)

---

## ⚡ Phase 5 — Analitik & Büyüme

- [ ] **Vercel Analytics** entegrasyonu (ücretsiz, 0 kod)
- [ ] **Google Analytics 4** ya da Plausible (daha gizlilik dostu)
- [ ] **Cookie Consent Banner** (GDPR/KVKK zorunluluğu — şu an hiç yok!)
- [ ] **waitlist/email capture** formu → App Store çıkınca bildirim gönder
- [ ] A/B test için hero başlık varyantları
- [ ] Heatmap entegrasyonu (Microsoft Clarity — ücretsiz)

---

## 💬 Phase 6 — Topluluk & Sosyal

- [ ] App Store linki canlıya alınınca [config.ts](file:///Users/burakkaya/Desktop/Moodies/next.config.ts)'i güncelle (tek satır)
- [ ] Press/medya sayfası (`/press`) — logo, ekran görüntüleri, basın bülteni
- [ ] Changelog sayfası (`/changelog`) — sürüm notları
- [ ] Discord/Topluluk linki (ileride)

---

## Öncelik Özeti

| Faz | Ne | Tahmini Efor |
|---|---|---|
| 1 | Bug & UX fix | 1-2 gün |
| 2 | SEO & teknik altyapı | 2-3 gün |
| 3 | Yeni sayfalar & içerik | 1 hafta |
| 4 | Dark mode & tasarım | 1-2 hafta |
| 5 | Analitik & büyüme | 1 gün |
| 6 | Topluluk & sosyal | Devam eden |
