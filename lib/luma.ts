import type { Event } from "@/data/events";

const LUMA_API_BASE = "https://public-api.luma.com";

interface LumaEvent {
  api_id: string;
  name: string;
  description?: string;
  start_at: string;
  end_at?: string;
  timezone?: string;
  url?: string;
  geo_address_json?: {
    city?: string;
    region?: string;
    country?: string;
    full_address?: string;
    description?: string;
  };
  geo_latitude?: number;
  geo_longitude?: number;
  meeting_url?: string;
  cover_url?: string;
}

interface LumaCalendarEntry {
  event: LumaEvent;
}

interface LumaListEventsResponse {
  entries: LumaCalendarEntry[];
  has_more: boolean;
  next_cursor?: string;
}

/**
 * Fetches upcoming events from a Luma calendar using the API.
 * Requires LUMA_API_KEY env var (Luma Plus subscription needed).
 */
export async function fetchLumaEvents(): Promise<Event[]> {
  const apiKey = process.env.LUMA_API_KEY;
  if (!apiKey) {
    console.log("[Luma] No LUMA_API_KEY configured, skipping Luma sync");
    return [];
  }

  try {
    const now = new Date().toISOString();
    const threeMonthsFromNow = new Date(
      Date.now() + 90 * 24 * 60 * 60 * 1000
    ).toISOString();

    const allEvents: Event[] = [];
    let cursor: string | undefined;
    let hasMore = true;

    while (hasMore) {
      const params = new URLSearchParams({
        after: now,
        before: threeMonthsFromNow,
        pagination_limit: "50",
        sort_column: "start_at",
        sort_direction: "asc",
      });

      if (cursor) {
        params.set("pagination_cursor", cursor);
      }

      const response = await fetch(
        `${LUMA_API_BASE}/v1/calendar/list-events?${params.toString()}`,
        {
          headers: {
            "x-luma-api-key": apiKey,
            Accept: "application/json",
          },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        console.error(
          `[Luma] API error: ${response.status} ${response.statusText}`
        );
        break;
      }

      const data: LumaListEventsResponse = await response.json();

      for (const entry of data.entries) {
        const normalized = normalizeLumaEvent(entry.event);
        if (normalized) {
          allEvents.push(normalized);
        }
      }

      hasMore = data.has_more;
      cursor = data.next_cursor;
    }

    console.log(`[Luma] Fetched ${allEvents.length} events`);
    return allEvents;
  } catch (error) {
    console.error("[Luma] Error fetching events:", error);
    return [];
  }
}

function normalizeLumaEvent(lumaEvent: LumaEvent): Event | null {
  try {
    const startDate = new Date(lumaEvent.start_at);
    const date = startDate.toISOString().split("T")[0];
    const time = startDate.toISOString().split("T")[1].slice(0, 5);

    const city = lumaEvent.geo_address_json?.city || "Online";
    const country = detectCountry(lumaEvent.geo_address_json);
    const location =
      lumaEvent.geo_address_json?.full_address ||
      lumaEvent.geo_address_json?.description ||
      "Online";

    const lumaUrl = lumaEvent.url
      ? `https://lu.ma/${lumaEvent.url}`
      : undefined;

    return {
      id: `luma-${lumaEvent.api_id}`,
      title: lumaEvent.name,
      description: lumaEvent.description?.slice(0, 300) || "",
      date,
      time,
      location,
      city,
      community: "Luma Event",
      attendees: 0,
      link: lumaUrl,
      source: "luma",
      country: country,
    };
  } catch {
    console.error(
      `[Luma] Error normalizing event: ${lumaEvent.name}`
    );
    return null;
  }
}

function detectCountry(
  geo?: LumaEvent["geo_address_json"]
): "MX" | "US" | undefined {
  if (!geo?.country) return undefined;
  const country = geo.country.toLowerCase();
  if (country.includes("mexico") || country.includes("méxico") || country === "mx") {
    return "MX";
  }
  if (
    country.includes("united states") ||
    country.includes("usa") ||
    country === "us"
  ) {
    return "US";
  }
  return undefined;
}
