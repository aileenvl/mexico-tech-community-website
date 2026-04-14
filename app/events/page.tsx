import { getAllEvents } from "@/lib/sync-events";
import EventsPageClient from "./events-page-client";

export const revalidate = 21600; // Revalidate every 6 hours

export default async function EventsPage() {
  const events = await getAllEvents();
  return <EventsPageClient events={events} />;
}
