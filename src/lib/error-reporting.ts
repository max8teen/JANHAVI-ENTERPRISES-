// Generic error reporting utility (no third-party dependency)
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // Log to console in development; plug in Sentry/LogRocket here if needed later
  console.error("[ErrorBoundary]", error, context);
}
