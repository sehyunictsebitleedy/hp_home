export const projectSchema = {
  name: "project",
  title: "프로젝트",
  type: "document",
  fields: [
    {
      name: "title",
      title: "제목",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "슬러그",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "분야",
      type: "string",
      options: {
        list: [
          { title: "스마트팩토리", value: "smart-factory" },
          { title: "IoT", value: "iot" },
          { title: "SI", value: "si" },
          { title: "기타", value: "other" },
        ],
      },
    },
    {
      name: "description",
      title: "설명",
      type: "text",
    },
    {
      name: "image",
      title: "대표 이미지",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "date",
      title: "완료일",
      type: "date",
    },
    {
      name: "featured",
      title: "홈 노출",
      type: "boolean",
      initialValue: false,
    },
  ],
};
