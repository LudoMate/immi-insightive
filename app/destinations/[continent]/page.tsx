import { notFound } from "next/navigation"
import ContinentClient from "./continent-client"
import type { ContinentData, ContinentId } from "../types"

// Sample data - In a real app, this would come from an API or database
const continentData: ContinentData = {
  africa: {
    name: "Africa",
    description: "Explore vibrant cultures and diverse landscapes",
    countries: [
      {
        name: "South Africa",
        description: "Popular for work-holiday visas and tourism opportunities",
        processingTime: "15-20 days",
        requirements: ["Valid passport", "Proof of funds", "Return ticket"],
        rating: 4.5,
        popularFor: ["Working Holiday", "Tourism", "Study"],
      },
      {
        name: "Morocco",
        description: "Rich cultural heritage and growing digital nomad destination",
        processingTime: "10-15 days",
        requirements: ["Passport", "Hotel booking", "Bank statements"],
        rating: 4.2,
        popularFor: ["Digital Nomad", "Tourism", "Cultural Exchange"],
      },
      {
        name: "Egypt",
        description: "Historical sites and tourism opportunities",
        processingTime: "7-14 days",
        requirements: ["Valid passport", "Tourist visa", "Travel insurance"],
        rating: 4.3,
        popularFor: ["Tourism", "Study", "Business"],
      },
      {
        name: "Kenya",
        description: "Safari destination and growing tech hub",
        processingTime: "5-10 days",
        requirements: ["Valid passport", "E-visa", "Yellow fever certificate"],
        rating: 4.4,
        popularFor: ["Tourism", "Business", "Volunteer Work"],
      },
      {
        name: "Ghana",
        description: "Stable democracy with growing opportunities",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Visa application", "Proof of funds"],
        rating: 4.1,
        popularFor: ["Business", "Cultural Exchange", "Tourism"],
      },
    ],
  },
  asia: {
    name: "Asia",
    description: "Discover ancient traditions and modern innovation",
    countries: [
      {
        name: "Japan",
        description: "Leading destination for work and cultural exchange",
        processingTime: "5-10 days",
        requirements: ["Valid passport", "CoE", "Health insurance"],
        rating: 4.8,
        popularFor: ["Working Holiday", "Study", "Cultural Exchange"],
      },
      {
        name: "Singapore",
        description: "Global business hub with excellent quality of life",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Employment pass", "Proof of qualification"],
        rating: 4.7,
        popularFor: ["Work", "Business", "Education"],
      },
      {
        name: "South Korea",
        description: "Popular for working holiday and cultural experiences",
        processingTime: "7-14 days",
        requirements: ["Valid passport", "Proof of funds", "Health check"],
        rating: 4.6,
        popularFor: ["Working Holiday", "Study", "Tourism"],
      },
      {
        name: "Thailand",
        description: "Digital nomad paradise with rich culture",
        processingTime: "3-7 days",
        requirements: ["Valid passport", "Proof of funds", "Return ticket"],
        rating: 4.5,
        popularFor: ["Digital Nomad", "Tourism", "Retirement"],
      },
      {
        name: "Malaysia",
        description: "Multicultural hub with growing tech scene",
        processingTime: "5-10 days",
        requirements: ["Valid passport", "Proof of accommodation", "Return ticket"],
        rating: 4.3,
        popularFor: ["Digital Nomad", "Business", "Tourism"],
      },
      {
        name: "Vietnam",
        description: "Emerging destination for digital nomads",
        processingTime: "3-5 days",
        requirements: ["Valid passport", "E-visa", "Proof of funds"],
        rating: 4.2,
        popularFor: ["Digital Nomad", "Tourism", "Business"],
      },
    ],
  },
  europe: {
    name: "Europe",
    description: "Experience rich history and modern opportunities",
    countries: [
      {
        name: "United Kingdom",
        description: "Global financial center with diverse opportunities",
        processingTime: "15-20 days",
        requirements: ["Valid passport", "Visa application", "Financial proof"],
        rating: 4.6,
        popularFor: ["Work", "Study", "Business"],
      },
      {
        name: "Germany",
        description: "Strong economy and excellent work opportunities",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Job contract", "Health insurance"],
        rating: 4.7,
        popularFor: ["Work", "Study", "Business"],
      },
      {
        name: "France",
        description: "Cultural capital with diverse visa programs",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Schengen visa", "Travel insurance"],
        rating: 4.5,
        popularFor: ["Tourism", "Study", "Work"],
      },
      {
        name: "Spain",
        description: "Popular for digital nomads and cultural experiences",
        processingTime: "15-20 days",
        requirements: ["Valid passport", "Proof of income", "Health insurance"],
        rating: 4.5,
        popularFor: ["Digital Nomad", "Tourism", "Retirement"],
      },
      {
        name: "Italy",
        description: "Rich culture and growing startup ecosystem",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Schengen visa", "Proof of funds"],
        rating: 4.4,
        popularFor: ["Tourism", "Study", "Cultural Exchange"],
      },
      {
        name: "Netherlands",
        description: "Excellent quality of life and work opportunities",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "MVV", "Proof of income"],
        rating: 4.6,
        popularFor: ["Work", "Study", "Startup"],
      },
      {
        name: "Switzerland",
        description: "High quality of life and business opportunities",
        processingTime: "15-25 days",
        requirements: ["Valid passport", "Work permit", "Health insurance"],
        rating: 4.8,
        popularFor: ["Work", "Business", "Study"],
      },
    ],
  },
  "north-america": {
    name: "North America",
    description: "Land of opportunities and diverse cultures",
    countries: [
      {
        name: "United States",
        description: "Global leader in innovation and opportunities",
        processingTime: "30-60 days",
        requirements: ["Valid passport", "Visa interview", "Financial proof"],
        rating: 4.7,
        popularFor: ["Work", "Study", "Business"],
      },
      {
        name: "Canada",
        description: "Excellent quality of life and immigration programs",
        processingTime: "20-30 days",
        requirements: ["Valid passport", "LMIA", "Education credentials"],
        rating: 4.8,
        popularFor: ["Work", "Study", "Immigration"],
      },
      {
        name: "Mexico",
        description: "Growing digital nomad hub with rich culture",
        processingTime: "5-10 days",
        requirements: ["Valid passport", "Proof of income", "FMM form"],
        rating: 4.3,
        popularFor: ["Digital Nomad", "Tourism", "Retirement"],
      },
    ],
  },
  oceania: {
    name: "Oceania",
    description: "Paradise for working holiday and adventure",
    countries: [
      {
        name: "Australia",
        description: "Popular working holiday destination",
        processingTime: "15-20 days",
        requirements: ["Valid passport", "WHV requirements", "Health check"],
        rating: 4.8,
        popularFor: ["Working Holiday", "Study", "Skilled Work"],
      },
      {
        name: "New Zealand",
        description: "Beautiful landscapes and work opportunities",
        processingTime: "15-25 days",
        requirements: ["Valid passport", "Proof of funds", "Return ticket"],
        rating: 4.7,
        popularFor: ["Working Holiday", "Study", "Skilled Work"],
      },
      {
        name: "Fiji",
        description: "Growing digital nomad destination",
        processingTime: "5-10 days",
        requirements: ["Valid passport", "Return ticket", "Hotel booking"],
        rating: 4.2,
        popularFor: ["Tourism", "Digital Nomad", "Retirement"],
      },
    ],
  },
  "south-america": {
    name: "South America",
    description: "Vibrant cultures and emerging opportunities",
    countries: [
      {
        name: "Brazil",
        description: "Largest economy in South America",
        processingTime: "15-20 days",
        requirements: ["Valid passport", "Proof of funds", "Health insurance"],
        rating: 4.3,
        popularFor: ["Work", "Study", "Tourism"],
      },
      {
        name: "Argentina",
        description: "Popular for digital nomads and students",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Proof of income", "Health insurance"],
        rating: 4.2,
        popularFor: ["Digital Nomad", "Study", "Tourism"],
      },
      {
        name: "Chile",
        description: "Strong economy and natural beauty",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Proof of funds", "Health insurance"],
        rating: 4.4,
        popularFor: ["Work", "Study", "Tourism"],
      },
      {
        name: "Colombia",
        description: "Emerging digital nomad destination",
        processingTime: "5-10 days",
        requirements: ["Valid passport", "Proof of income", "Return ticket"],
        rating: 4.1,
        popularFor: ["Digital Nomad", "Tourism", "Business"],
      },
      {
        name: "Peru",
        description: "Rich cultural heritage and growing tourism",
        processingTime: "7-14 days",
        requirements: ["Valid passport", "Tourist visa", "Proof of funds"],
        rating: 4.2,
        popularFor: ["Tourism", "Cultural Exchange", "Study"],
      },
    ],
  },
}

export const dynamicParams = false

export async function generateStaticParams(): Promise<{ continent: ContinentId }[]> {
  const continents = Object.keys(continentData) as ContinentId[]
  return continents.map((continent) => ({ continent }))
}

interface PageProps {
  params: { continent: string }
}

export default function ContinentPage({ params }: PageProps) {
  const continent = params.continent as ContinentId
  const data = continentData[continent]

  if (!data) {
    // Unknown continents shouldn't be generated; ensure 404 for safety
    notFound()
  }

  return <ContinentClient data={data} />
}
