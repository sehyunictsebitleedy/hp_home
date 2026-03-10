import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, phone, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "이름, 이메일, 문의 내용은 필수 항목입니다." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "홈페이지 문의 <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "leedy@sehyunict.com",
      replyTo: email,
      subject: `[홈페이지 문의] ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d4ed8; border-bottom: 2px solid #1d4ed8; padding-bottom: 12px;">홈페이지 문의</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold; width: 120px;">이름</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">회사명</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${company}</td>
            </tr>` : ""}
            ${phone ? `
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">연락처</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">이메일</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold; vertical-align: top;">문의 내용</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "이메일 전송에 실패했습니다." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
