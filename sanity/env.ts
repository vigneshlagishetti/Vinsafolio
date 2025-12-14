// Centralized Sanity environment configuration used by Studio and tooling
// Reads from public env vars with sensible fallbacks for local development

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-12-10";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

 export const basePath = "/studio";
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}







// export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
// export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

// // Keep apiVersion explicit; adjust if you use features tied to newer dates
// export const apiVersion = "2024-05-01";

// // Optional: base path for the embedded Studio (referenced by app routing)
// export const basePath = "/studio";
