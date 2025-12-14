"use server";
// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity/live";
import { client } from "./client";

const enableBrowserLive = process.env.ENABLE_SANITY_LIVE_BROWSER === "true";
const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_TOKEN,
  // Only enable browser live when explicitly set to avoid CDN timeouts
  browserToken: enableBrowserLive ? process.env.SANITY_VIEWER_TOKEN : undefined,
});

export { sanityFetch, SanityLive };
