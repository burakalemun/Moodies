import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    // Vercel build esnasında patlamaması için (API key env variable eksikliği)
    // objeyi sadece POST isteği geldiğinde (runtime'da) oluşturuyoruz.
    const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");
    const TO_EMAIL = process.env.FEEDBACK_TO_EMAIL || "destek@moodies.app";

    const body = await req.json();
    const { type, name, email, subject, message, priority, appVersion, device } = body;

    if (!type || !message) {
      return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
    }

    // Form tipine göre konu ve içerik
    const typeLabels: Record<string, string> = {
      request: "💬 İstek / Görüş",
      feature: "✨ Özellik İsteği",
      bug: "🐛 Hata Bildirimi",
    };

    const subjectLine = `[Moodies ${typeLabels[type] || "Bildirim"}] ${subject || "Yeni mesaj"}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fafaf9; border-radius: 16px;">
        <div style="background: #22c55e; padding: 20px 24px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: white; margin: 0; font-size: 20px;">${typeLabels[type] || "Yeni Bildirim"}</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">Moodies Feedback Sistemi</p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          ${name ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #64748b; width: 130px;">Ad</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; font-weight: 600;">${name}</td></tr>` : ""}
          ${email ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #64748b;">E-posta</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; font-weight: 600;">${email}</td></tr>` : ""}
          ${priority ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #64748b;">Öncelik</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; font-weight: 600;">${priority}</td></tr>` : ""}
          ${appVersion ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #64748b;">Uygulama Versiyonu</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; font-weight: 600;">${appVersion}</td></tr>` : ""}
          ${device ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #64748b;">Cihaz</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e293b; font-weight: 600;">${device}</td></tr>` : ""}
        </table>

        <div style="margin-top: 20px; background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <p style="font-size: 13px; color: #64748b; margin: 0 0 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Mesaj</p>
          <p style="font-size: 15px; color: #1e293b; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
          Bu e-posta Moodies Feedback Sistemi tarafından otomatik olarak gönderilmiştir.
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Moodies Feedback <onboarding@resend.dev>",
      to: [TO_EMAIL],
      subject: subjectLine,
      html: htmlContent,
      replyTo: email || undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
