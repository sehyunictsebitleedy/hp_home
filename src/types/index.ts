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

export interface ContactInfo {
  placeName: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  fax: string;
  email: string;
  hours: string;
}

export interface LocalProject {
  id: string;
  year: string;
  title: string;
  category: string;
  client: string;
  description: string;
  image?: string;
  featured: boolean;
}

export interface HistoryItem {
  id: string;
  year: string;
  events: string[];
}
