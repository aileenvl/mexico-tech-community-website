import { NextResponse } from "next/server";
import { getAllEvents } from "@/lib/sync-events";

/**
 * Public API endpoint that returns all events from all sources.
 * Events are cached via unstable_cache and refreshed by the cron job.
 *
 * Supports query params:
 * - city: Filter by city name
 * - country: Filter by country code (MX, US)
 * - source: Filter by source (manual, luma, meetup)
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");
    const country = searchParams.get("country");
    const source = searchParams.get("source");

    let events = await getAllEvents();

    if (city) {
      events = events.filter(
        (e) => e.city.toLowerCase() === city.toLowerCase()
      );
    }

    if (country) {
      events = events.filter(
        (e) => e.country === country.toUpperCase()
      );
    }

    if (source) {
      events = events.filter((e) => e.source === source);
    }

    // Sort by date ascending
    events.sort(
      (a, b) =>
        new Date(a.date + "T" + a.time).getTime() -
        new Date(b.date + "T" + b.time).getTime()
    );

    return NextResponse.json({
      events,
      total: events.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[API] Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
