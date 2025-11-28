"use client"

import { MapPin, ChevronDown, Search } from "lucide-react"
import { MEXICAN_STATES } from "@/data/communities"
import { useState, useMemo } from "react"

interface LocationSelectorProps {
  selectedState: string
  onStateChange: (state: string) => void
  language: "en" | "es"
}

function LocationSelector({ selectedState, onStateChange, language }: LocationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const selectedStateObj = MEXICAN_STATES.find((s) => s.name === selectedState)
  const displayName = language === "es" ? selectedStateObj?.nameEs : selectedStateObj?.name

  const filteredStates = useMemo(() => {
    if (!searchTerm) return MEXICAN_STATES

    const query = searchTerm.toLowerCase()
    return MEXICAN_STATES.filter(
      (state) => state.name.toLowerCase().includes(query) || state.nameEs.toLowerCase().includes(query),
    )
  }, [searchTerm])

  const title = language === "es" ? "Ubicación" : "Location"
  const searchPlaceholder = language === "es" ? "Buscar estado..." : "Search state..."
  const noResults = language === "es" ? "No se encontraron estados" : "No states found"

  return (
    <div className="relative w-full md:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:w-auto flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border hover:bg-card/80 transition-all"
      >
        <MapPin size={20} className="text-primary flex-shrink-0" />
        <div className="text-left flex-1 md:flex-none">
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="text-sm font-medium truncate">{displayName}</p>
        </div>
        <ChevronDown size={16} className={`ml-auto flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute top-full left-0 right-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden md:w-auto md:left-auto md:right-auto">
            {/* Search Input */}
            <div className="p-3 border-b border-border">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* States List */}
            <div className="max-h-72 overflow-y-auto">
              {filteredStates.length > 0 ? (
                filteredStates.map((state) => (
                  <button
                    key={state.id}
                    onClick={() => {
                      onStateChange(state.name)
                      setIsOpen(false)
                      setSearchTerm("")
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors flex items-center justify-between group ${
                      selectedState === state.name ? "bg-primary/20 border-l-4 border-primary" : ""
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium">{language === "es" ? state.nameEs : state.name}</p>
                    </div>
                    {selectedState === state.name && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <p className="text-sm text-muted-foreground">{noResults}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default LocationSelector;
