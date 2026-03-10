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
