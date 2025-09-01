export type Continent = {
  name: string
  countries: Country[]
}

export type Country = {
  name: string
  visaType: "visa" | "visa-on-arrival" | "e-visa" | "visa-free"
  requirements: string[]
  processingTime: string
  fee: string
}

export const continents: Continent[] = [
  {
    name: "Africa",
    countries: [
      {
        name: "South Africa",
        visaType: "visa",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Completed visa application form",
          "Two recent passport-sized photographs",
          "Proof of accommodation",
          "Return flight ticket",
          "Proof of sufficient funds",
        ],
        processingTime: "5-10 business days",
        fee: "$42",
      },
      {
        name: "Kenya",
        visaType: "e-visa",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Return flight ticket",
          "Hotel booking confirmation",
          "Passport-sized digital photograph",
        ],
        processingTime: "2-3 business days",
        fee: "$51",
      },
    ],
  },
  {
    name: "Asia",
    countries: [
      {
        name: "Thailand",
        visaType: "visa-on-arrival",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Return flight ticket",
          "Proof of accommodation",
          "Proof of funds (10,000 THB per person)",
        ],
        processingTime: "Immediate (at airport)",
        fee: "2,000 THB",
      },
      {
        name: "Japan",
        visaType: "visa",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Completed visa application form",
          "Recent passport-sized photograph",
          "Flight itinerary",
          "Hotel reservations",
          "Bank statements for the last 3 months",
        ],
        processingTime: "5-7 business days",
        fee: "3,000 JPY",
      },
    ],
  },
  {
    name: "Europe",
    countries: [
      {
        name: "France",
        visaType: "visa",
        requirements: [
          "Valid passport with at least 3 months validity beyond intended stay",
          "Completed Schengen visa application form",
          "Two recent passport-sized photographs",
          "Travel insurance with minimum coverage of €30,000",
          "Flight itinerary",
          "Hotel reservations",
          "Proof of sufficient funds",
        ],
        processingTime: "10-15 business days",
        fee: "€80",
      },
      {
        name: "United Kingdom",
        visaType: "visa",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Completed online application form",
          "Biometric information",
          "Proof of accommodation",
          "Return flight ticket",
          "Bank statements for the last 6 months",
        ],
        processingTime: "3-4 weeks",
        fee: "£95",
      },
    ],
  },
  {
    name: "North America",
    countries: [
      {
        name: "United States",
        visaType: "visa",
        requirements: [
          "Valid passport with at least 6 months validity",
          "DS-160 confirmation page",
          "One recent photograph",
          "Interview appointment letter",
          "Proof of ties to home country",
          "Proof of sufficient funds",
        ],
        processingTime: "2-3 months",
        fee: "$160",
      },
      {
        name: "Canada",
        visaType: "e-visa",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Digital photograph",
          "Proof of financial support",
          "Purpose of travel",
          "Travel history",
        ],
        processingTime: "2-4 weeks",
        fee: "CAD 100",
      },
    ],
  },
  {
    name: "Oceania (Australia)",
    countries: [
      {
        name: "Australia",
        visaType: "e-visa",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Completed online application",
          "Proof of sufficient funds",
          "Travel itinerary",
          "Health insurance",
        ],
        processingTime: "15-30 days",
        fee: "AUD 140",
      },
      {
        name: "New Zealand",
        visaType: "e-visa",
        requirements: [
          "Valid passport with at least 3 months validity beyond intended stay",
          "Completed online application",
          "Proof of onward travel",
          "Proof of sufficient funds",
          "Health and character requirements",
        ],
        processingTime: "20 days",
        fee: "NZD 211",
      },
    ],
  },
  {
    name: "South America",
    countries: [
      {
        name: "Brazil",
        visaType: "e-visa",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Digital photograph",
          "Proof of accommodation",
          "Return flight ticket",
          "Proof of sufficient funds",
        ],
        processingTime: "5 business days",
        fee: "$40",
      },
      {
        name: "Argentina",
        visaType: "visa-free",
        requirements: [
          "Valid passport with at least 6 months validity",
          "Return flight ticket",
          "Proof of accommodation",
        ],
        processingTime: "Immediate (at immigration)",
        fee: "Free",
      },
    ],
  },
]

export const getVisaRequirements = (countryName: string): Country | undefined => {
  for (const continent of continents) {
    const country = continent.countries.find((c) => c.name.toLowerCase() === countryName.toLowerCase())
    if (country) return country
  }
  return undefined
}

export const getCountriesByVisaType = (visaType: "visa" | "visa-on-arrival" | "e-visa" | "visa-free"): Country[] => {
  const countries: Country[] = []

  for (const continent of continents) {
    const matchingCountries = continent.countries.filter((c) => c.visaType === visaType)
    countries.push(...matchingCountries)
  }

  return countries
}
