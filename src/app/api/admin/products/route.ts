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

export async function GET() {
  return NextResponse.json(readProducts());
}

export async function POST(request: Request) {
  const body = await request.json();
  const products = readProducts();

  const slug = body.name
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  const newProduct: LocalProduct = {
    id: Date.now().toString(),
    name: body.name,
    slug,
    description: body.description || "",
    image: body.image || "",
    featured: body.featured ?? false,
  };

  products.push(newProduct);
  writeProducts(products);

  return NextResponse.json(newProduct, { status: 201 });
}
