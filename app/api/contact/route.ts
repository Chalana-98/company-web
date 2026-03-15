import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Re-use the transporter across invocations (warm lambda / long-lived server)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false, // STARTTLS on port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      name?: string;
      email?: string;
      phone?: string;
      service?: string;
      budget?: string;
      message?: string;
    };

    const { name, email, phone, service, budget, message } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // HTML email body
    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#f9f9f9;border-radius:12px;">
        <h2 style="color:#1d4ed8;margin-bottom:4px;">New Contact Request</h2>
        <p style="color:#6b7280;margin-top:0;font-size:13px;">Submitted via CoreDigit X website</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />

        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          <tr>
            <td style="padding:8px 0;color:#374151;font-weight:600;width:140px;">Full Name</td>
            <td style="padding:8px 0;color:#111827;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#374151;font-weight:600;">Email</td>
            <td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#1d4ed8;">${escapeHtml(email)}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding:8px 0;color:#374151;font-weight:600;">Phone</td>
            <td style="padding:8px 0;color:#111827;">${escapeHtml(phone)}</td>
          </tr>` : ""}
          ${service ? `
          <tr>
            <td style="padding:8px 0;color:#374151;font-weight:600;">Service</td>
            <td style="padding:8px 0;color:#111827;">${escapeHtml(service)}</td>
          </tr>` : ""}
          ${budget ? `
          <tr>
            <td style="padding:8px 0;color:#374151;font-weight:600;">Budget</td>
            <td style="padding:8px 0;color:#111827;">${escapeHtml(budget)}</td>
          </tr>` : ""}
        </table>

        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
        <p style="color:#374151;font-weight:600;margin-bottom:8px;">Message</p>
        <p style="color:#111827;background:#fff;padding:16px;border-radius:8px;border:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(message)}</p>

        <p style="margin-top:32px;font-size:12px;color:#9ca3af;text-align:center;">
          CoreDigit X · Contact Form
        </p>
      </div>
    `;

    // Plain-text fallback
    const text = [
      `New Contact Request — CoreDigit X`,
      ``,
      `Name:    ${name}`,
      `Email:   ${email}`,
      phone   ? `Phone:   ${phone}`   : null,
      service ? `Service: ${service}` : null,
      budget  ? `Budget:  ${budget}`  : null,
      ``,
      `Message:`,
      message,
    ].filter(Boolean).join("\n");

    const serviceSuffix = service ? ` \u2014 ${service}` : "";
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: `${name} <${email}>`,
      subject: `New contact from ${name}${serviceSuffix}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact/route] send error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
