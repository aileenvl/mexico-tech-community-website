import { notFound } from "next/navigation"
import { ArrowLeft, Mail, Users } from "lucide-react"
import Link from "next/link"
import { communitiesData } from "@/data/communities"

export async function generateStaticParams() {
  return communitiesData.map((community) => ({
    id: community.id,
  }))
}

export default async function CommunityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const community = communitiesData.find((c) => c.id === id)

  if (!community) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6 pb-0">
        <Link href="/communities" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={20} />
          <span>Volver a Comunidades / Back to Communities</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="rounded-lg overflow-hidden h-96 bg-muted flex items-center justify-center">
            <img
              src={community.image || "/placeholder.svg?height=400&width=600"}
              alt={community.name}
              className="w-full h-full object-contain p-8"
            />
          </div>

          {/* Info */}
          <div>
            <div className="mb-4">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                {community.category || "Tech"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{community.name}</h1>
            <p className="text-xl text-foreground/70 mb-6">{community.nameEs}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Miembros / Members</p>
                <p className="text-2xl font-bold flex items-center gap-2">
                  <Users size={20} />
                  {community.members}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Reuniones / Meetups</p>
                <p className="text-2xl font-bold">{community.meetups || 0}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Focos / Focus Areas</p>
                <p className="text-2xl font-bold">{community.focus.length}</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">About / Acerca de</h2>
                <p className="text-foreground/70 mb-4">{community.description}</p>
                <p className="text-foreground/70">{community.descriptionEs}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="container mx-auto px-4 py-12 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Áreas de Enfoque / Focus Areas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {community.focus.map((focus, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="font-semibold text-primary mb-2">{focus}</p>
              <p className="text-sm text-foreground/70">{community.focusEs[idx]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts Section */}
      <section className="container mx-auto px-4 py-12 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Contactos / Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {community.contacts.map((contact, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
              <p className="text-primary font-semibold mb-1">{contact.role}</p>
              <p className="text-sm text-foreground/70 mb-4">{contact.roleEs}</p>

              {/* Bio */}
              {contact.bio && (
                <div className="mb-4">
                  <p className="text-sm text-foreground/70 mb-2">{contact.bio}</p>
                  <p className="text-sm text-foreground/70">{contact.bioEs}</p>
                </div>
              )}

              {/* Social Links */}
              <div className="space-y-2">
                {
                  Object.entries(contact.socials).map(([key, value]) =>
                    <a
                      key={key}
                      href={key == 'email' ? `mailto:${value}` : value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline text-sm"
                    >
                      <span className="capitalize">{key}</span>: {value}
                    </a>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Links */}
      {community.links && (
        <section className="container mx-auto px-4 py-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">Enlaces / Links</h2>
          <div className="flex flex-wrap gap-4">
            {
              Object.entries(community.links).map(([key, value]) =>
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border border-border rounded-lg font-medium hover:bg-muted transition-all"
                >
                  <span className="capitalize">{key}</span>
                </a>
              )
            }
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 border-t border-border mb-12">
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Interesado? / Interested?</h2>
          <p className="text-foreground/70 mb-6">Conecta con los organizadores / Connect with the organizers</p>
          {community.contacts.length > 0 && community.contacts[0].socials.email && (
            <a
              href={`mailto:${community.contacts[0].socials.email}`}
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
            >
              Enviar Email / Send Email
            </a>
          )}
        </div>
      </section>
    </main>
  )
}
