export interface LocalProject {
  id: string;
  year: string;
  title: string;
  category: string;
  client: string;
  description: string;
  image: string;
}

export interface LocalProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  pdfUrl?: string;
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
