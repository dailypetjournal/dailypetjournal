import { NextResponse } from "next/server";

const FROM =
  process.env.CONTACT_EMAIL_FROM ??
  "Daily Pet Journal <onboarding@resend.dev>";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email is not configured." },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_EMAIL_TO;
  if (!to) {
    return NextResponse.json(
      { error: "Contact recipient not configured." },
      { status: 503 }
    );
  }

  // Dynamic import to avoid build-time evaluation
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }

  const subject = `Contact: ${name} <${email}>`;
  const html = `
    <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>
  `;

  const { error } = await resend.emails.send({
    from: FROM,
    to: to.split(",").map((e) => e.trim()).filter(Boolean),
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
