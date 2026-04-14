export interface CityConfig {
  name: string;
  country: "MX" | "US";
  lat: number;
  lon: number;
  radiusMiles: number;
  searchTerms: string[];
}

export const CITIES: CityConfig[] = [
  // Mexico
  {
    name: "Ciudad de México",
    country: "MX",
    lat: 19.4326,
    lon: -99.1332,
    radiusMiles: 25,
    searchTerms: ["tech", "software", "developer", "programming", "AI"],
  },
  {
    name: "Monterrey",
    country: "MX",
    lat: 25.6866,
    lon: -100.3161,
    radiusMiles: 20,
    searchTerms: ["tech", "software", "developer", "programming", "AI"],
  },
  {
    name: "Guadalajara",
    country: "MX",
    lat: 20.6597,
    lon: -103.3496,
    radiusMiles: 20,
    searchTerms: ["tech", "software", "developer", "programming", "AI"],
  },
  {
    name: "Puebla",
    country: "MX",
    lat: 19.0414,
    lon: -98.2063,
    radiusMiles: 15,
    searchTerms: ["tech", "software", "developer", "programming"],
  },
  {
    name: "Tijuana",
    country: "MX",
    lat: 32.5149,
    lon: -117.0382,
    radiusMiles: 15,
    searchTerms: ["tech", "software", "developer", "programming"],
  },
  {
    name: "Querétaro",
    country: "MX",
    lat: 20.5888,
    lon: -100.3899,
    radiusMiles: 15,
    searchTerms: ["tech", "software", "developer", "programming"],
  },
  {
    name: "Villahermosa",
    country: "MX",
    lat: 17.9894,
    lon: -92.9475,
    radiusMiles: 15,
    searchTerms: ["tech", "software", "developer"],
  },
  {
    name: "Colima",
    country: "MX",
    lat: 19.2433,
    lon: -103.7250,
    radiusMiles: 15,
    searchTerms: ["tech", "software", "developer"],
  },
  {
    name: "Mérida",
    country: "MX",
    lat: 20.9674,
    lon: -89.5926,
    radiusMiles: 15,
    searchTerms: ["tech", "software", "developer"],
  },
  // USA
  {
    name: "San Francisco",
    country: "US",
    lat: 37.7749,
    lon: -122.4194,
    radiusMiles: 25,
    searchTerms: ["tech", "software", "developer", "AI", "startup"],
  },
  {
    name: "Austin",
    country: "US",
    lat: 30.2672,
    lon: -97.7431,
    radiusMiles: 25,
    searchTerms: ["tech", "software", "developer", "AI"],
  },
  {
    name: "New York",
    country: "US",
    lat: 40.7128,
    lon: -74.0060,
    radiusMiles: 20,
    searchTerms: ["tech", "software", "developer", "AI"],
  },
  {
    name: "Los Angeles",
    country: "US",
    lat: 34.0522,
    lon: -118.2437,
    radiusMiles: 25,
    searchTerms: ["tech", "software", "developer", "AI"],
  },
  {
    name: "Seattle",
    country: "US",
    lat: 47.6062,
    lon: -122.3321,
    radiusMiles: 20,
    searchTerms: ["tech", "software", "developer", "AI"],
  },
  {
    name: "Miami",
    country: "US",
    lat: 25.7617,
    lon: -80.1918,
    radiusMiles: 20,
    searchTerms: ["tech", "software", "developer", "AI", "startup"],
  },
];
