import Link from "next/link"
import { ExternalLink } from "lucide-react"
import type { Community } from "@/data/communities"

interface CommunityCardProps {
  community: Community
  language: "es" | "en"
}

export function CommunityCard({ community, language }: CommunityCardProps) {
  const isSpanish = language === "es"
  const name = isSpanish ? community.nameEs : community.name
  const category = community.category || "Tech"
  const description = isSpanish ? community.descriptionEs : community.description
  const buttonLabel = isSpanish ? "Ver Detalles" : "View Details"

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg">
      {/* Community Image */}
      <div className="relative h-40 bg-gray overflow-hidden">
        <img
          src={community.image || "/placeholder.svg?height=160&width=400"}
          alt={name}
          className="w-full h-full object-contain p-4"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Community Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-border">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">
              {isSpanish ? "Miembros" : "Members"}
            </p>
            <p className="text-lg font-semibold">{community.members}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">
              {isSpanish ? "Reuniones" : "Meetups"}
            </p>
            <p className="text-lg font-semibold">{community.meetups || 0}</p>
          </div>
        </div>

        {/* Links - Updated to use Link for detail view and added social links */}
        <div className="flex gap-3">
          <Link
            href={`/communities/${community.id}`}
            className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all text-center text-sm"
          >
            {buttonLabel}
          </Link>
          {community.links?.website && (
            <a
              href={community.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-border rounded-lg hover:bg-muted transition-all"
              aria-label="Visit website"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
