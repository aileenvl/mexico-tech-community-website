import type { Event } from "@/data/events";
import { CITIES, type CityConfig } from "@/lib/cities";

const MEETUP_GRAPHQL_URL = "https://api.meetup.com/gql";

interface MeetupEventNode {
  id: string;
  title: string;
  description?: string;
  dateTime: string;
  endTime?: string;
  eventUrl: string;
  going: number;
  venue?: {
    name?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    lat?: number;
    lng?: number;
  };
  group?: {
    name?: string;
    urlname?: string;
    city?: string;
    country?: string;
  };
  eventType?: string;
  isOnline?: boolean;
}

interface MeetupSearchResponse {
  data?: {
    keywordSearch?: {
      count: number;
      edges: Array<{
        node: MeetupEventNode;
      }>;
    };
  };
  errors?: Array<{ message: string }>;
}

const SEARCH_EVENTS_QUERY = `
  query SearchEvents($filter: SearchConnectionFilter!) {
    keywordSearch(filter: $filter) {
      count
      edges {
        node {
          id
          result {
            ... on Event {
              id
              title
              description
              dateTime
              endTime
              eventUrl
              going
              venue {
                name
                address
                city
                state
                country
                lat
                lng
              }
              group {
                name
                urlname
                city
                country
              }
              eventType
              isOnline
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetches tech events from Meetup for configured cities.
 * Requires MEETUP_API_KEY env var (OAuth token).
 */
export async function fetchMeetupEvents(): Promise<Event[]> {
  const apiKey = process.env.MEETUP_API_KEY;
  if (!apiKey) {
    console.log("[Meetup] No MEETUP_API_KEY configured, skipping Meetup sync");
    return [];
  }

  const allEvents: Event[] = [];
  const seenIds = new Set<string>();

  for (const city of CITIES) {
    try {
      const events = await fetchEventsForCity(city, apiKey);
      for (const event of events) {
        if (!seenIds.has(event.id)) {
          seenIds.add(event.id);
          allEvents.push(event);
        }
      }
      // Small delay between cities to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`[Meetup] Error fetching events for ${city.name}:`, error);
    }
  }

  console.log(`[Meetup] Fetched ${allEvents.length} events across all cities`);
  return allEvents;
}

async function fetchEventsForCity(
  city: CityConfig,
  apiKey: string
): Promise<Event[]> {
  const events: Event[] = [];

  for (const term of city.searchTerms.slice(0, 2)) {
    try {
      const response = await fetch(MEETUP_GRAPHQL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          query: SEARCH_EVENTS_QUERY,
          variables: {
            filter: {
              query: term,
              lat: city.lat,
              lon: city.lon,
              radius: city.radiusMiles,
              source: "EVENTS",
              startDateRange: new Date().toISOString(),
              endDateRange: new Date(
                Date.now() + 90 * 24 * 60 * 60 * 1000
              ).toISOString(),
            },
          },
        }),
        cache: "no-store",
      });

      if (!response.ok) {
        console.error(
          `[Meetup] API error for ${city.name}/${term}: ${response.status}`
        );
        continue;
      }

      const data: MeetupSearchResponse = await response.json();

      if (data.errors) {
        console.error(
          `[Meetup] GraphQL errors for ${city.name}/${term}:`,
          data.errors
        );
        continue;
      }

      const edges = data.data?.keywordSearch?.edges || [];
      for (const edge of edges) {
        const node = edge.node as unknown as { result: MeetupEventNode };
        const eventData = node.result;
        if (eventData) {
          const normalized = normalizeMeetupEvent(eventData, city);
          if (normalized) {
            events.push(normalized);
          }
        }
      }
    } catch (error) {
      console.error(
        `[Meetup] Error searching ${city.name} for "${term}":`,
        error
      );
    }
  }

  return events;
}

function normalizeMeetupEvent(
  meetupEvent: MeetupEventNode,
  city: CityConfig
): Event | null {
  try {
    const startDate = new Date(meetupEvent.dateTime);
    const date = startDate.toISOString().split("T")[0];
    const hours = String(startDate.getHours()).padStart(2, "0");
    const minutes = String(startDate.getMinutes()).padStart(2, "0");
    const time = `${hours}:${minutes}`;

    const eventCity =
      meetupEvent.venue?.city || meetupEvent.group?.city || city.name;

    const location = meetupEvent.venue
      ? [meetupEvent.venue.name, meetupEvent.venue.address, meetupEvent.venue.city]
          .filter(Boolean)
          .join(", ")
      : meetupEvent.isOnline
      ? "Online"
      : city.name;

    const communityName = meetupEvent.group?.name || "Meetup Event";
    const description = meetupEvent.description
      ? stripHtml(meetupEvent.description).slice(0, 300)
      : "";

    return {
      id: `meetup-${meetupEvent.id}`,
      title: meetupEvent.title,
      description,
      date,
      time,
      location,
      city: eventCity,
      community: communityName,
      attendees: meetupEvent.going || 0,
      link: meetupEvent.eventUrl,
      source: "meetup",
      country: city.country,
    };
  } catch {
    console.error(
      `[Meetup] Error normalizing event: ${meetupEvent.title}`
    );
    return null;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}
