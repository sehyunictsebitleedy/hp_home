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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const history = readHistory();
  const index = history.findIndex((h) => h.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  history[index] = { ...history[index], year: body.year ?? history[index].year, events: body.events ?? history[index].events };
  history.sort((a, b) => Number(b.year) - Number(a.year));
  writeHistory(history);

  return NextResponse.json(history[index]);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const history = readHistory();
  const filtered = history.filter((h) => h.id !== id);
  writeHistory(filtered);

  return NextResponse.json({ ok: true });
}
