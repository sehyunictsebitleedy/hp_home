export const productSchema = {
  name: "product",
  title: "제품",
  type: "document",
  fields: [
    {
      name: "name",
      title: "제품명",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "슬러그",
      type: "slug",
      options: { source: "name" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "설명",
      type: "text",
    },
    {
      name: "image",
      title: "제품 이미지",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "pdfFile",
      title: "PDF 파일",
      type: "file",
      options: { accept: ".pdf" },
    },
    {
      name: "featured",
      title: "홈 노출",
      type: "boolean",
      initialValue: false,
    },
  ],
};
