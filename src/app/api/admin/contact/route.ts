import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { cookies } from "next/headers";
import { ContactInfo } from "@/types";

const filePath = path.join(process.cwd(), "src/data/contact.json");

function readContact(): ContactInfo {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeContact(data: ContactInfo) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

function isAuthorized(): boolean {
  const cookieStore = cookies();
  const session = cookieStore.get("admin_session");
  return session?.value === (process.env.ADMIN_SESSION_TOKEN || "sehyunict_admin");
}

export async function GET() {
  return NextResponse.json(readContact());
}

export async function PUT(request: Request) {
  if (!isAuthorized()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const current = readContact();

  const updated: ContactInfo = {
    placeName: body.placeName ?? current.placeName,
    address: body.address ?? current.address,
    lat: typeof body.lat === "number" ? body.lat : parseFloat(body.lat) || current.lat,
    lng: typeof body.lng === "number" ? body.lng : parseFloat(body.lng) || current.lng,
    phone: body.phone ?? current.phone,
    fax: body.fax ?? current.fax,
    email: body.email ?? current.email,
    hours: body.hours ?? current.hours,
  };

  writeContact(updated);
  return NextResponse.json(updated);
}
