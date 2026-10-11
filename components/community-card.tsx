import Link from "next/link"
import { ArrowUpRight, MapPin, Users } from "lucide-react"
import type { Community } from "@/data/communities"

interface CommunityCardProps {
  community: Community
  language: "es" | "en"
}

export function CommunityCard({ community, language }: CommunityCardProps) {
  const isSpanish = language === "es"
  const name = isSpanish ? community.nameEs : community.name
  const description = isSpanish ? community.descriptionEs : community.description
  
  // Use focus areas as tags, limit to 2
  const tags = community.focus.slice(0, 2)

  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full hover:border-primary/50 hover:shadow-md transition-all">
      {/* Top Section: Logo/Initial and Tags */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-xl font-bold overflow-hidden">
           {community.image ? (
             <img src={community.image} alt={name} className="w-full h-full object-cover dark:bg-white" />
           ) : (
             <span>{name.charAt(0)}</span>
           )}
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="mb-auto">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <MapPin size={14} className="mr-1" />
          <span>{community.city}, {community.state}</span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
          {description}
        </p>
      </div>

      {/* Footer Section */}
      <div className="pt-4 border-t border-border flex justify-between items-center mt-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Users size={16} className="mr-2" />
          <span>{community.members} members</span>
        </div>
        <Link
          href={`/communities/${community.id}`}
          className="text-sm font-medium flex items-center hover:text-primary transition-colors"
        >
          View Details <ArrowUpRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}
