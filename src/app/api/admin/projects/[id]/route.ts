import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { LocalProject } from "@/types";

const filePath = path.join(process.cwd(), "src/data/projects.json");

function readProjects(): LocalProject[] {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeProjects(projects: LocalProject[]) {
  fs.writeFileSync(filePath, JSON.stringify(projects, null, 2), "utf-8");
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const projects = readProjects();
  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  projects[index] = { ...projects[index], ...body };
  writeProjects(projects);

  return NextResponse.json(projects[index]);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const projects = readProjects();
  const filtered = projects.filter((p) => p.id !== id);
  writeProjects(filtered);

  return NextResponse.json({ ok: true });
}
