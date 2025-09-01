export interface Country {
  name: string;
  description: string;
  processingTime: string;
  requirements: string[];
  rating: number;
  popularFor: string[];
}

export interface ContinentInfo {
  name: string;
  description: string;
  countries: Country[];
}

export type ContinentId = 
  | "africa" 
  | "asia" 
  | "europe" 
  | "north-america" 
  | "oceania" 
  | "south-america";

export type ContinentData = {
  [K in ContinentId]: ContinentInfo;
}
