#!/usr/bin/env bash
#
# Publish blog post(s) from content/blogs (MDX) into Sanity.
#
# Usage:
#   ./scripts/publish-blog.sh <SANITY_WRITE_TOKEN> [slug ...]
#
# Examples:
#   ./scripts/publish-blog.sh sk_live_xxx
#       → publishes the default post (dashboards-on-a-spreadsheet)
#   ./scripts/publish-blog.sh sk_live_xxx doctor-scheduling payment-flow
#       → publishes the given slugs
#   ./scripts/publish-blog.sh sk_live_xxx all
#       → publishes every post in content/blogs
#
# Get a write token at: https://www.sanity.io/manage/project/2a5ceujm/api#tokens

set -euo pipefail

# ── Token: first arg, or fall back to env var ──────────────────────────
if [ -n "${1:-}" ]; then
  TOKEN="$1"
  shift
else
  TOKEN="${SANITY_WRITE_TOKEN:-}"
fi

if [ -z "$TOKEN" ]; then
  echo "Error: no Sanity write token provided."
  echo "Usage: ./scripts/publish-blog.sh <SANITY_WRITE_TOKEN> [slug ...]"
  exit 1
fi

# ── Resolve repo root (this script lives in scripts/) ──────────────────
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# ── Slugs: remaining args, default to the dashboards post ──────────────
# No args (or "all") → publish everything in content/blogs.
# Pass one or more slugs to publish only those.
SLUGS=("$@")
if [ "${SLUGS[*]:-}" = "all" ] || [ ${#SLUGS[@]} -eq 0 ]; then
  SLUGS=()
fi

echo "Publishing to Sanity..."
if [ ${#SLUGS[@]} -gt 0 ]; then
  echo "  Posts: ${SLUGS[*]}"
else
  echo "  Posts: (all in content/blogs)"
fi

SANITY_WRITE_TOKEN="$TOKEN" node "$ROOT/scripts/publish-to-sanity.mjs" "${SLUGS[@]}"

echo "Done. The post updates on the live site within ~60s (ISR revalidate)."
