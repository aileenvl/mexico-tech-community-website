import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { EVENTS_CACHE_TAG } from "@/lib/sync-events";

/**
 * Vercel Cron handler that revalidates the events cache.
 * Triggered automatically by Vercel Cron (configured in vercel.json)
 * or manually via GET request.
 *
 * Security: Validates CRON_SECRET in production to prevent unauthorized access.
 */
export async function GET(request: NextRequest) {
  // Verify cron secret in production
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    console.log("[Cron] Starting event sync...");
    const startTime = Date.now();

    // Revalidate the events cache tag, which forces getAllEvents()
    // to re-fetch from Luma and Meetup APIs on the next request
    revalidateTag(EVENTS_CACHE_TAG);

    const duration = Date.now() - startTime;
    console.log(`[Cron] Event cache revalidated in ${duration}ms`);

    return NextResponse.json({
      success: true,
      message: "Events cache revalidated",
      duration: `${duration}ms`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[Cron] Sync failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
