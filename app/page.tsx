"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Globe } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const countries = [
    {
      code: "MX",
      name: "Mexico",
      region: "North America",
      link: "/communities",
    },
    { code: "US", name: "United States", region: "North America", link: "#" },
    { code: "BR", name: "Brazil", region: "South America", link: "#" },
    { code: "CO", name: "Colombia", region: "South America", link: "#" },
  ];

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background flex flex-col items-center relative overflow-hidden">
      {/* Background Gradient/Effect - Moved to lowest index */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0 pointer-events-none" />

      {/* Globe Background Graphic - Positioned explicitly with positive z-index but lower than content */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-[800px] h-[800px] opacity-30 pointer-events-none">
        <Image
          src="/globe.png"
          alt="Global Network"
          fill
          className="object-contain dark:invert dark:hue-rotate-180"
          priority
        />
      </div>

      {/* Hero Section - Ensure z-index is higher than background */}
      <section className="container mx-auto px-4 pt-20 pb-12 flex flex-col items-center text-center max-w-4xl z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Global Network Active
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Connect with Tech <br />
          Communities Worldwide
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mb-12">
          Discover local developer groups, attend events, and build your
          network. Select your region to get started.
        </p>

        {/* Search */}
        <div className="relative w-full max-w-xl mb-16">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <input
              type="text"
              placeholder="Search country..."
              className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {filteredCountries.map((country) => (
            <Link
              key={country.code}
              href={country.link}
              className="group flex items-center justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all text-left relative z-20"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-foreground">
                  {country.code}
                </span>
                <div>
                  <div className="font-semibold">{country.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Globe size={10} /> {country.region}
                  </div>
                </div>
              </div>
              <ArrowRight
                className="text-muted-foreground group-hover:text-primary transition-colors"
                size={20}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
