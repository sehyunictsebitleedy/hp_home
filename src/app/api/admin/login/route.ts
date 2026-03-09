import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "비밀번호가 틀렸습니다." },
      { status: 401 }
    );
  }

  const sessionToken = process.env.ADMIN_SESSION_TOKEN || "sehyunict_admin";
  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin_session", sessionToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: "/",
    sameSite: "lax",
  });

  return response;
}
