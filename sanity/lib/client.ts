import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled for development - CDN may be blocked by firewall/VPN
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
  apiHost: "https://api.sanity.io",
});

// import { createClient } from "next-sanity";
// import { dataset, projectId, apiVersion } from "../../sanity/env";

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false,
//   // Enable stega for preview mode to decode draft content
//   // See https://github.com/sanity-io/next-sanity#stega
//   stega: {
//     enabled: true,
//     // Optionally set studio URL for links back to Studio
//     studioUrl: process.env.SANITY_STUDIO_PREVIEW_ORIGIN || "",
//   },
// });
