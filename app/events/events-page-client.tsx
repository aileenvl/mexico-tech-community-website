"use client";

import { useState, useMemo } from "react";
import { Calendar, MapPin, Users, Filter, Globe } from "lucide-react";
import type { Event } from "@/data/events";
import { EventsCalendar } from "@/components/events-calendar";

interface EventsPageClientProps {
  events: Event[];
}

function getSourceBadge(source?: string) {
  switch (source) {
    case "luma":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
          Luma
        </span>
      );
    case "meetup":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
          Meetup
        </span>
      );
    default:
      return null;
  }
}

export default function EventsPageClient({ events }: EventsPageClientProps) {
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [selectedCommunity, setSelectedCommunity] = useState("Todas");
  const [selectedCity, setSelectedCity] = useState("Todas");
  const [selectedCountry, setSelectedCountry] = useState("Todos");

  const communities = useMemo(() => {
    const unique = new Set(events.map((e) => e.community));
    return ["Todas", ...Array.from(unique).sort()];
  }, [events]);

  const cities = useMemo(() => {
    let filteredEvents = events;
    if (selectedCountry !== "Todos") {
      filteredEvents = events.filter((e) => e.country === selectedCountry);
    }
    const unique = new Set(filteredEvents.map((e) => e.city));
    return ["Todas", ...Array.from(unique).sort()];
  }, [events, selectedCountry]);

  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events
      .filter((e) => {
        const eventDate = new Date(e.date + "T00:00:00");
        return eventDate >= today;
      })
      .filter(
        (e) =>
          selectedCommunity === "Todas" || e.community === selectedCommunity
      )
      .filter((e) => selectedCity === "Todas" || e.city === selectedCity)
      .filter(
        (e) => selectedCountry === "Todos" || e.country === selectedCountry
      )
      .sort(
        (a, b) =>
          new Date(a.date + "T00:00:00").getTime() -
          new Date(b.date + "T00:00:00").getTime()
      );
  }, [events, selectedCommunity, selectedCity, selectedCountry]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calendario de Eventos
          </h1>
          <p className="text-lg text-foreground/70">
            Únete a eventos tecnológicos, workshops y meetups en México y USA
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4 mb-8">
          {/* View Mode */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("calendar")}
              className={`
                px-4 py-2 rounded-lg font-semibold transition-all
                ${
                  viewMode === "calendar"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/50"
                }
              `}
            >
              <Calendar className="inline mr-2" size={18} />
              Calendario
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`
                px-4 py-2 rounded-lg font-semibold transition-all
                ${
                  viewMode === "list"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/50"
                }
              `}
            >
              <Filter className="inline mr-2" size={18} />
              Lista
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Country Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-foreground/70">
                <Globe className="inline mr-1" size={16} />
                País
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedCity("Todas");
                }}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Todos">Todos</option>
                <option value="MX">México</option>
                <option value="US">USA</option>
              </select>
            </div>

            {/* City Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-foreground/70">
                <MapPin className="inline mr-1" size={16} />
                Ciudad
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Community Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-foreground/70">
                <Users className="inline mr-1" size={16} />
                Comunidad
              </label>
              <select
                value={selectedCommunity}
                onChange={(e) => setSelectedCommunity(e.target.value)}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {communities.map((community) => (
                  <option key={community} value={community}>
                    {community}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events */}
        {upcomingEvents.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-lg">
            <Calendar
              size={48}
              className="mx-auto text-muted-foreground mb-4"
            />
            <p className="text-foreground/70 mb-4">
              {selectedCity !== "Todas" ||
              selectedCommunity !== "Todas" ||
              selectedCountry !== "Todos"
                ? "No hay eventos que coincidan con los filtros seleccionados."
                : "Aún no hay eventos próximos. ¡Vuelve pronto!"}
            </p>
            <a
              href="https://github.com/aileenvl/mexico-tech-community-website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Enviar un Evento
            </a>
          </div>
        ) : viewMode === "calendar" ? (
          <EventsCalendar events={upcomingEvents} />
        ) : (
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <EventCardList key={event.id} event={event} />
            ))}
          </div>
        )}

        {/* CTA Section */}
        {upcomingEvents.length > 0 && (
          <div className="mt-16 bg-card border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Tienes un Evento para Compartir?
            </h2>
            <p className="text-foreground/70 mb-6">
              Agrega tu evento comunitario creando un PR en el archivo de datos
              de eventos en GitHub.
            </p>
            <a
              href="https://github.com/aileenvl/mexico-tech-community-website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Agregar Evento
            </a>
          </div>
        )}
      </section>
    </main>
  );
}

function EventCardList({ event }: { event: Event }) {
  const eventDate = new Date(event.date + "T00:00:00");
  const monthDay = eventDate.toLocaleDateString("es-MX", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-center justify-center bg-primary/20 rounded-lg p-4 md:w-24 md:h-24 flex-shrink-0">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {eventDate.getDate()}
            </div>
            <div className="text-xs text-primary/70">
              {eventDate.toLocaleDateString("es-MX", { month: "short" })}
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold">{event.title}</h3>
            {getSourceBadge(event.source)}
            {event.country && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                {event.country === "MX" ? "México" : "USA"}
              </span>
            )}
          </div>
          <p className="text-foreground/70 mb-4">{event.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-foreground/70">
              <Calendar size={16} className="text-primary" />
              <span>
                {monthDay} a las {event.time}
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin size={16} className="text-primary" />
              <span>{event.city}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Users size={16} className="text-primary" />
              <span>{event.community}</span>
            </div>
            {event.attendees > 0 && (
              <div className="flex items-center gap-2 text-foreground/70">
                <Users size={16} className="text-primary" />
                <span>{event.attendees} asistentes</span>
              </div>
            )}
          </div>

          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-semibold transition-colors"
            >
              Más Información
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
