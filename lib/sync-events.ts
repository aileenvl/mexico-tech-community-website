import { unstable_cache } from "next/cache";
import { eventsData, type Event } from "@/data/events";
import { fetchLumaEvents } from "@/lib/luma";
import { fetchMeetupEvents } from "@/lib/meetup";

export const EVENTS_CACHE_TAG = "events-data";

/**
 * Fetches and combines events from all sources:
 * 1. Static manual events from data/events.ts
 * 2. Luma API events (if LUMA_API_KEY is configured)
 * 3. Meetup API events (if MEETUP_API_KEY is configured)
 *
 * Results are cached and revalidated by the cron job.
 */
export const getAllEvents = unstable_cache(
  async (): Promise<Event[]> => {
    console.log("[Sync] Fetching events from all sources...");

    const staticEvents: Event[] = eventsData.map((e) => ({
      ...e,
      source: "manual" as const,
      country: "MX" as const,
    }));

    const [lumaEvents, meetupEvents] = await Promise.allSettled([
      fetchLumaEvents(),
      fetchMeetupEvents(),
    ]);

    const luma =
      lumaEvents.status === "fulfilled" ? lumaEvents.value : [];
    const meetup =
      meetupEvents.status === "fulfilled" ? meetupEvents.value : [];

    if (lumaEvents.status === "rejected") {
      console.error("[Sync] Luma fetch failed:", lumaEvents.reason);
    }
    if (meetupEvents.status === "rejected") {
      console.error("[Sync] Meetup fetch failed:", meetupEvents.reason);
    }

    const allEvents = deduplicateEvents([
      ...staticEvents,
      ...luma,
      ...meetup,
    ]);

    console.log(
      `[Sync] Total events: ${allEvents.length} ` +
        `(${staticEvents.length} manual, ${luma.length} luma, ${meetup.length} meetup)`
    );

    return allEvents;
  },
  [EVENTS_CACHE_TAG],
  {
    revalidate: 21600, // 6 hours fallback
    tags: [EVENTS_CACHE_TAG],
  }
);

/**
 * Removes duplicate events based on similarity in title, date, and location.
 * Manual/static events take priority over API-fetched ones.
 */
function deduplicateEvents(events: Event[]): Event[] {
  const seen = new Map<string, Event>();

  const priorityOrder: Record<string, number> = {
    manual: 0,
    luma: 1,
    meetup: 2,
  };

  const sorted = [...events].sort((a, b) => {
    const priorityA = priorityOrder[a.source || "manual"] ?? 99;
    const priorityB = priorityOrder[b.source || "manual"] ?? 99;
    return priorityA - priorityB;
  });

  for (const event of sorted) {
    const key = generateDedupeKey(event);
    if (!seen.has(key)) {
      seen.set(key, event);
    }
  }

  return Array.from(seen.values());
}

/**
 * Generates a deduplication key based on event title similarity and date.
 */
function generateDedupeKey(event: Event): string {
  const normalizedTitle = event.title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .slice(0, 4)
    .join(" ");

  return `${event.date}-${normalizedTitle}`;
}
