// Blog sisteminin veri katmanı
// Her yazı bu tip ile temsil edilir

export interface BlogPost {
    slug: string;
    title: string;
    description: string; // SEO meta description
    category: "Hakkında" | "Psikoloji" | "Özellikler" | "Güncellemeler";
    date: string; // "2025-12-10" formatında
    readingTime: number; // dakika
    author: string;
    coverEmoji: string; // Kapak görsel yerine büyük emoji
    coverColor: string; // Tailwind gradient class
    content: string; // Markdown/HTML içerik
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "moodies-nedir",
        title: "Moodies Nedir? Duygu Takibinin Yeni Nesil Hali",
        description: "Moodies, sadece bir duygu günlüğü değil. Arkadaşlarınla etkileşime geçtiğin, yapay zeka destekli analizlerle kendini keşfettiğin yeni nesil bir sosyal deneyim.",
        category: "Hakkında",
        date: "2025-12-10",
        readingTime: 4,
        author: "Moodies Ekibi",
        coverEmoji: "😊",
        coverColor: "from-brand-400 to-brand-600",
        tags: ["mood tracker", "duygu günlüğü", "mental sağlık", "iOS uygulaması"],
        content: `
## Moodies Nedir?

Hepimiz bazen neden öyle hissettiğimizi bilemeyiz. Günün sonunda "bugün kötüydüm ama neden?" sorusuyla yatağa gireriz. Moodies tam bu noktada devreye giriyor.

Moodies, iOS için tasarlanmış bir **duygu takip ve sosyal günlük uygulamasıdır**. Ama sıradan bir günlük değil — arkadaşlarınla bağlantı kurduğun, yapay zekanın seni analiz ettiği ve zamanla kendini gerçekten tanıdığın bir deneyim.

## Ne İşe Yarar?

### 1. Günlük Duygu Kaydı
Her gün birkaç saniyeni ayır: Nasıl hissediyorsun? 5 temel duygu kategorisi (Harika, Mutlu, Normal, Üzgün, Sinirli) arasından seçim yap. İstersen bir başlık ve not da ekle. Emoji ya da sesli not bile kullanabilirsin.

### 2. Yapay Zeka Analizi
Moodies, geçmiş kayıtlarını analiz ederek sana özel ipuçları sunar. "Salı günleri stres seviyeniz artıyor" ya da "Bu hafta çok daha iyisin, geçen haftaya göre" gibi. Fark edemediğin kalıpları fark ettirir.

### 3. Arkadaş Bildirimleri
3 gün üst üste düşük mod girişi yaptıysan, Moodies en yakın arkadaşına otomatik bir bildirim gönderir: *"Can'ın sana ihtiyacı olabilir."* Yalnız hissettiren dönemlerde gerçek bağlantı.

### 4. Ortak Anı Defteri
O anı sadece sen yaşamadın. Arkadaşını etiketle, fotoğraf ekle, o anı ikinizin dijital günlüğünde sonsuza sakla.

## Kimler İçin?

- Kendini daha iyi anlamak isteyenler
- Arkadaşlarıyla duygusal bağı güçlendirmek isteyenler
- Terapistlerin önerdiği duygu günlüğü tutmak isteyenler ama "daha eğlenceli şekilde"
- Mental sağlığına önem veren herkes

## Nasıl İndirilir?

Moodies şu an **iOS** için mevcut. App Store'dan ücretsiz indirebilirsin. Temel özellikler sonsuza kadar ücretsiz — söz.
        `.trim(),
    },
    {
        slug: "duygu-takibi-neden-onemli",
        title: "Duygu Takibi Neden Bu Kadar Önemli?",
        description: "Duygularını fark etmek ve kayıt altına almak, psikolojik sağlık için kanıtlanmış bir yöntemdir. Araştırmalar ne diyor, pratik faydaları neler?",
        category: "Psikoloji",
        date: "2025-12-18",
        readingTime: 5,
        author: "Moodies Ekibi",
        coverEmoji: "🧠",
        coverColor: "from-purple-400 to-purple-600",
        tags: ["psikoloji", "mental sağlık", "duygu farkındalığı", "mindfulness"],
        content: `
## Duyguların Farkında Olmak Neden Zor?

Koşuşturmacalı bir gün sonunda kendinize "nasıl hissettim?" diye sorduğunuzda çoğu zaman net bir cevap bulamazsınız. "Normal" ya da "bilmiyorum" diyoruz. Bu, duygu körleşmesi olarak da bilinen bir fenomendir ve modern hayatın kaçınılmaz bir yan etkisidir.

## Araştırmalar Ne Söylüyor?

University of California'da yapılan bir araştırmaya göre, duygularını düzenli olarak yazan kişiler:

- **%25 daha az stres** hissettiklerini bildiriyor
- Çatışmalarda daha **yapıcı tepkiler** veriyor
- Kendi güçlü ve zayıf yönlerini daha **net fark ediyor**

"Expressive writing" yani duygu yazısı, bugün psikoterapide aktif olarak kullanılan kanıtlanmış bir tekniktir.

## Duygu Günlüğü Pratik Faydaları

### Kalıpları Görürsün
"Pazartesi günleri neden hep kötü hissediyorum?" sorusunun cevabını ancak verilere bakarak bulabilirsin. Haftalık grafik sana bunu gösterir.

### Sabahın Öngörülebilir Olur
Dün akşam ne yediğinde, kiminle vakit geçirdiğinde, ne kadar uyuduğunda - bunlar mood'unu etkiler. Moodies bu bağlantıları kurar.

### Destek İstemeyi Kolaylaştırır
"Kötü hissediyorum" demek zordur. Ama "bak, son 10 günde 7'sinde düşük mod girişi yaptım" demek hem daha kolaydır hem de daha anlayışla karşılanır.

## Nasıl Başlamalı?

Günde 30 saniye ayırman yeterli. Küçük adımlar, büyük farkındalıklar yaratır. Moodies tam olarak bunu kolaylaştırmak için tasarlandı — kompleks değil, sade ve keyifli.

Başlamak için hiçbir zaman "doğru an" yoktur. Bugün başla.
        `.trim(),
    },
    {
        slug: "ios-widget-nasil-kullanilir",
        title: "Moodies iOS Widget'ını Nasıl Kullanırsın?",
        description: "iOS 18 ile gelen Moodies widget'ları ana ekranına arkadaşlarını taşıyor. Kurulum rehberi ve ipuçları burada.",
        category: "Özellikler",
        date: "2025-12-25",
        readingTime: 3,
        author: "Moodies Ekibi",
        coverEmoji: "📱",
        coverColor: "from-orange-400 to-pink-500",
        tags: ["iOS widget", "iOS 18", "ana ekran", "nasıl yapılır"],
        content: `
## Moodies Widget Nedir?

iOS 18 ile birlikte ana ekranınız artık sadece uygulama simgelerinden ibaret değil. Moodies widget'ları sayesinde, telefonu açmadan arkadaşlarının o anki ruh halini görebilirsin.

## Widget Tipleri

### 1. Arkadaş Durumu Widget'ı (2x2)
En sık kullanılan widget. Seçtiğin bir arkadaşının güncel moodunu, ne zaman güncellendiğini gösterir. "Burak Uykulu • 5dk önce güncellendi" gibi.

### 2. Haftalık Mood Grafiği Widget'ı (4x2)
Son 7 günün mood dağılımını çubuk grafikle gösterir. Genel gidişatı hızlıca değerlendirmeni sağlar.

### 3. Çizim Widget'ı (2x2)
Arkadaşından gelen son çizim notu burada görünür. Sürpriz mesaj aldığında ise widget titreşir!

## Nasıl Kurulur?

1. Ana ekranda boş bir alana **uzun bas**
2. Sol üstteki **"+"** simgesine dokun
3. Arama kutusuna **"Moodies"** yaz
4. Widget tipini seç, boyutunu ayarla
5. **"Ekle"** butonuna bas

## İpuçları

- Widget'ı kilitli ekranda da kullanabilirsin (iOS 16+)
- Arkadaşın moodunu görmek için onun sana izin vermesi gerekiyor
- Çizim widget'ı için **Moodies Pro** gereklidir

## Sorun Mu Var?

Widget güncellenmiyorsa: Ayarlar → Moodies → Arka Plan Uygulama Yenileme'nin **açık** olduğundan emin ol.

Başka bir sorunla karşılaşırsan [Hata Bildir](/feedback) sayfasını kullanabilirsin!
        `.trim(),
    },
    {
        slug: "arkadas-bildirimi-ozelligi",
        title: "Arkadaş Bildirimi: Yalnızlığı Fark Eden Teknoloji",
        description: "Moodies'in en benzersiz özelliği — arkadaşların kötü hissettiğinde seni haberdar eden akıllı bildirim sistemi nasıl çalışıyor?",
        category: "Özellikler",
        date: "2026-01-05",
        readingTime: 4,
        author: "Moodies Ekibi",
        coverEmoji: "🔔",
        coverColor: "from-yellow-400 to-orange-500",
        tags: ["arkadaş bildirimi", "yapay zeka", "sosyal özellikler", "yalnızlık"],
        content: `
## Fikir Nereden Çıktı?

Herkesin bir arkadaşı vardır — sürekli iyi görünen, "iyiyim" diyen ama aslında içinden geçen zorlu dönemleri kimseyle paylaşmayan. Biz de şunu sorduk: *Teknoloji bu boşluğu kapanyabilir mi?*

Cevap: Evet, ama dikkatli tasarlandığında.

## Nasıl Çalışır?

### 1. Desen Tespiti
Moodies, günlük mood girişlerini takip eder. Bir kullanıcı art arda 3+ gün düşük mod (Üzgün veya Sinirli) girişi yaparsa, sistem bu "negatif döngüyü" tespit eder.

### 2. Bildirim Gönderimi
Kullanıcının önceden seçtiği **güvenilir arkadaşlara** otomatik bir bildirim gönderilir:

> *"Can'ın sana ihtiyacı olabilir. Son 3 gündür modu biraz düşük görünüyor. Onu arayıp bir kahveye çıkarmaya ne dersin?"*

### 3. Gizlilik Korunur
Bildirim alan kişi, özel notları ya da mood detaylarını **asla göremez**. Sadece genel bir "ihtiyacı var" sinyali alır. Paylaşmak istemediğin hiçbir şey paylaşılmaz.

## Neden Bu Kadar Önemli?

Araştırmalar, yalnızlığın uzun vadede fiziksel sağlık üzerinde sigara içmekle eşdeğer etkisi olduğunu gösteriyor. Ama yardım istemek zor — sosyal baskı, "zayıf görünmek istemem" hissi devreye giriyor.

Bu özellik, o eşiği kaldırıyor. Yardım istemek zorunda kalmıyorsun. Sistem, arkadaşını haberdar ediyor.

## Ayarları Nasıl Yapılır?

1. Moodies uygulamasını aç
2. Profil → Güvenilir Arkadaşlar
3. En fazla **3 kişi** ekleyebilirsin
4. Bildirim eşiğini ayarla (2 gün / 3 gün / 5 gün)
5. Dilersen bu özelliği tamamen kapatabilirsin

## Kullanıcı Yorumları

> *"Arkadaşım beni aradı ve 'iyi misin?' dedi. Sormamıştım ama ihtiyacım vardı. Bu özellik gerçekten işe yarıyor."* — Elif Ç.

Teknolojiyi insanları birbirine yaklaştırmak için kullanmak — Moodies'in özü bu.
        `.trim(),
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(p => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
    return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
    return getAllPosts().filter(p => p.category === category);
}
