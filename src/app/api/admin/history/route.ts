import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { HistoryItem } from "@/types";

const filePath = path.join(process.cwd(), "src/data/history.json");

function readHistory(): HistoryItem[] {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeHistory(data: HistoryItem[]) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  return NextResponse.json(readHistory());
}

export async function POST(request: Request) {
  const body = await request.json();
  const history = readHistory();

  if (history.find((h) => h.year === body.year)) {
    return NextResponse.json({ error: "해당 연도가 이미 존재합니다." }, { status: 400 });
  }

  const newItem: HistoryItem = {
    id: body.year,
    year: body.year,
    events: body.events ?? [],
  };

  history.push(newItem);
  history.sort((a, b) => Number(b.year) - Number(a.year));
  writeHistory(history);

  return NextResponse.json(newItem, { status: 201 });
}
