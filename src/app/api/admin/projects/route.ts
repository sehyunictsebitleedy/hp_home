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

export async function GET() {
  return NextResponse.json(readProjects());
}

export async function POST(request: Request) {
  const body = await request.json();
  const projects = readProjects();

  const newProject: LocalProject = {
    id: Date.now().toString(),
    year: body.year || new Date().getFullYear().toString(),
    title: body.title,
    category: body.category || "",
    client: body.client || "",
    description: body.description || "",
    image: body.image || "",
<<<<<<< HEAD
    featured: body.featured ?? false,
=======
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
  };

  projects.push(newProject);
  writeProjects(projects);

  return NextResponse.json(newProject, { status: 201 });
}
