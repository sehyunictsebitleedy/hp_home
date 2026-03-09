import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { productSchema } from "./src/sanity/schemas/product";
import { projectSchema } from "./src/sanity/schemas/project";
import { companySchema } from "./src/sanity/schemas/company";

export default defineConfig({
  name: "sehyunict",
  title: "세현아이씨티 CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: [productSchema, projectSchema, companySchema],
  },
});
