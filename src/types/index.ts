export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  description: string;
  image: any;
  date: string;
  featured: boolean;
}

export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  description: string;
  image: any;
  pdfFile?: { asset: { url: string } };
  featured: boolean;
}

export interface CompanyStat {
  label: string;
  value: number;
  unit: string;
}

export interface CompanyHistory {
  year: string;
  events: string[];
}

export interface Company {
  _id: string;
  vision: string;
  mission: string;
  intro: string;
  stats: CompanyStat[];
  history: CompanyHistory[];
}
