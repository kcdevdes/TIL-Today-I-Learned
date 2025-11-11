import { parseGoogleBooksResponse } from '@/lib/bookModel';
import type { Book } from '@/lib/bookModel';

export interface SearchBooksParams {
  query: string;
  startIndex?: number; // pagination offset
  maxResults?: number; // default 20 (Google allows up to 40)
  signal?: AbortSignal; // for cancellation
  timeoutMs?: number; // optional manual timeout
}

export interface SearchBooksResult {
  total: number;
  items: Book[];
}

const GOOGLE_BOOKS_BASE = 'https://www.googleapis.com/books/v1/volumes';

/**
 * Low-level fetch wrapper with optional timeout support.
 */
async function fetchJson(
  url: string,
  opts: { signal?: AbortSignal; timeoutMs?: number } = {}
) {
  const { signal, timeoutMs } = opts;
  if (!timeoutMs) {
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: mergeSignals(signal, controller.signal),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

/** Merge two AbortSignals into one (simple approach). */
function mergeSignals(
  a?: AbortSignal,
  b?: AbortSignal
): AbortSignal | undefined {
  if (!a) return b;
  if (!b) return a;
  const controller = new AbortController();
  const abort = () => controller.abort();
  if (a.aborted || b.aborted) {
    controller.abort();
  } else {
    a.addEventListener('abort', abort);
    b.addEventListener('abort', abort);
  }
  return controller.signal;
}

/**
 * Perform a book search against Google Books, returning a normalized result set.
 */
export async function searchBooks(
  params: SearchBooksParams
): Promise<SearchBooksResult> {
  const { query, startIndex = 0, maxResults = 20, signal, timeoutMs } = params;
  const q = query.trim();
  if (!q) return { total: 0, items: [] };

  const key = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
  const url = new URL(GOOGLE_BOOKS_BASE);
  url.searchParams.set('q', q);
  url.searchParams.set('startIndex', String(startIndex));
  url.searchParams.set('maxResults', String(Math.min(maxResults, 40)));
  if (key) url.searchParams.set('key', key);

  const json = await fetchJson(url.toString(), { signal, timeoutMs });
  return parseGoogleBooksResponse(json);
}

/**
 * Simple in-memory cache keyed by query+startIndex+maxResults.
 * (Lightweight; can be replaced with more robust solution later.)
 */
const cache = new Map<string, SearchBooksResult>();

export async function cachedSearchBooks(
  params: SearchBooksParams
): Promise<SearchBooksResult> {
  const { query, startIndex = 0, maxResults = 20 } = params;
  const key = `${query.trim()}::${startIndex}::${maxResults}`;
  if (cache.has(key)) return cache.get(key)!;
  const result = await searchBooks(params);
  cache.set(key, result);
  return result;
}

export function clearSearchCache() {
  cache.clear();
}
