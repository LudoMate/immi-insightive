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
    ],
  },
  europe: {
    name: "Europe",
    description: "Experience rich history and modern opportunities",
    countries: [
      {
        name: "Germany",
        description: "Strong economy and excellent work opportunities",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Job contract", "Health insurance"],
        rating: 4.7,
        popularFor: ["Work", "Study", "Business"],
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
        name: "Netherlands",
        description: "Excellent quality of life and work opportunities",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "MVV", "Proof of income"],
        rating: 4.6,
        popularFor: ["Work", "Study", "Startup"],
      },
    ],
  },
  "north-america": {
    name: "North America",
    description: "Land of opportunities and diverse cultures",
    countries: [
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
      {
        name: "Costa Rica",
        description: "Popular for digital nomads and retirees",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Proof of income", "Background check"],
        rating: 4.4,
        popularFor: ["Digital Nomad", "Retirement", "Tourism"],
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
    ],
  },
}

export function generateStaticParams() {
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
