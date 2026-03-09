import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { LocalProduct } from "@/types";

const filePath = path.join(process.cwd(), "src/data/products.json");

function readProducts(): LocalProduct[] {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeProducts(products: LocalProduct[]) {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf-8");
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const products = readProducts();
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  products[index] = { ...products[index], ...body };
  writeProducts(products);

  return NextResponse.json(products[index]);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const products = readProducts();
  const filtered = products.filter((p) => p.id !== id);
  writeProducts(filtered);

  return NextResponse.json({ ok: true });
}
