export interface LocalProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
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
