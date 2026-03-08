export const companySchema = {
  name: "company",
  title: "회사 정보",
  type: "document",
  fields: [
    {
      name: "vision",
      title: "비전",
      type: "string",
    },
    {
      name: "mission",
      title: "미션",
      type: "text",
    },
    {
      name: "intro",
      title: "회사 소개",
      type: "text",
    },
    {
      name: "stats",
      title: "주요 수치",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "항목명", type: "string" },
            { name: "value", title: "수치", type: "number" },
            { name: "unit", title: "단위 (예: 개, 년)", type: "string" },
          ],
        },
      ],
    },
    {
      name: "history",
      title: "연혁",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "year", title: "연도", type: "string" },
            { name: "events", title: "주요 사건", type: "array", of: [{ type: "string" }] },
          ],
        },
      ],
    },
  ],
};
