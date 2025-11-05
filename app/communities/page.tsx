"use client"

import { useState, useMemo, useEffect } from "react"
import { Users } from "lucide-react"
import { communitiesData } from "@/data/communities"
import { CommunityCard } from "@/components/community-card"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { LocationSelector } from "@/components/location-selector"
import { useUserLocation } from "@/hooks/use-user-location"

const CATEGORIES = ["All", "Frontend", "Backend", "DevOps", "AI", "Mobile"]

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [language, setLanguage] = useState<"es" | "en">("es")
  const userLocation = useUserLocation()
  const [selectedState, setSelectedState] = useState<string>("All States")

  // Set selected state from detected location on first load
  useEffect(() => {
    if (!selectedState && userLocation.state) {
      setSelectedState(userLocation.state)
    }
  }, [userLocation.state, selectedState])

  const filteredCommunities = useMemo(() => {
    return communitiesData.filter((community) => {
      const searchTerm = searchQuery.toLowerCase()
      const matchesSearch =
        community.name.toLowerCase().includes(searchTerm) ||
        community.nameEs.toLowerCase().includes(searchTerm) ||
        community.description.toLowerCase().includes(searchTerm) ||
        community.descriptionEs.toLowerCase().includes(searchTerm)

      const matchesCategory = selectedCategory === "All" || community.category === selectedCategory

      const matchesState = !selectedState || selectedState === "All States" || selectedState === "Todos los Estados" || community.state === selectedState

      return matchesSearch && matchesCategory && matchesState
    })
  }, [searchQuery, selectedCategory, selectedState])

  const pageTitle = language === "es" ? "Comunidades Tech" : "Tech Communities"
  const pageDescription =
    language === "es"
      ? "Descubre y únete a comunidades tecnológicas locales. Conecta con desarrolladores, emprendedores y entusiastas de la tecnología."
      : "Discover and join local tech communities. Connect with developers, entrepreneurs, and tech enthusiasts."

  const resultsLabel =
    language === "es"
      ? `Mostrando ${filteredCommunities.length} de ${communitiesData.length} comunidades`
      : `Showing ${filteredCommunities.length} of ${communitiesData.length} communities`

  const noResultsTitle = language === "es" ? "No se encontraron comunidades" : "No communities found"
  const noResultsDescription =
    language === "es" ? "Intenta ajustar tu búsqueda o filtros" : "Try adjusting your search or filters"

  return (
    <main className="min-h-screen bg-background">
      {/* Language Toggle */}
      <div className="container mx-auto px-4 pt-4 flex justify-end gap-2">
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
            language === "en" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("es")}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
            language === "es" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
          }`}
        >
          Español
        </button>
      </div>

      {/* Header Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-lg text-foreground/70">{pageDescription}</p>
        </div>
      </section>

      {/* Location Detection Status - Show if location was detected */}
      {userLocation.detected && (
        <section className="container mx-auto px-4 mb-6">
          <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-3">
            <p className="text-sm text-foreground/70">
              {language === "es"
                ? `Mostrando comunidades en tu ubicación: ${selectedState}`
                : `Showing communities in your location: ${selectedState}`}
            </p>
          </div>
        </section>
      )}

      {/* Search, Filter and Location Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="space-y-6">
          <SearchBar
            placeholder={language === "es" ? "Buscar comunidades..." : "Search communities..."}
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <LocationSelector selectedState={selectedState} onStateChange={setSelectedState} language={language} />
            </div>
            <div className="flex-1">
              <CategoryFilter categories={CATEGORIES} selected={selectedCategory} onChange={setSelectedCategory} />
            </div>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <section className="container mx-auto px-4 mb-8">
        <p className="text-foreground/70">{resultsLabel}</p>
      </section>

      {/* Communities Grid */}
      <section className="container mx-auto px-4 pb-16">
        {filteredCommunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommunities.map((community) => (
              <CommunityCard key={community.id} community={community} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Users size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">{noResultsTitle}</h3>
            <p className="text-foreground/70">{noResultsDescription}</p>
          </div>
        )}
      </section>
    </main>
  )
}
