/**
 * Core (minimal) subset of Google Books data we care about for the UI.
 * Keep this intentionally lean; add optional fields as the app grows.
 */
export interface Book {
  id: string;
  title: string; // Required normalized title
  authors: string[]; // Empty array if unknown
  description?: string | null; // Full description (may be long)
  thumbnail?: string | null; // HTTPS thumbnail URL
  infoUrl?: string | null; // External info / buy page
  publishedYear?: string | null; // First 4 chars of publishedDate if present
  pageCount?: number | null; // Page count if reported
  averageRating?: number | null; // Average rating (if present in response)
  ratingsCount?: number | null; // Number of ratings
}

/**
 * Minimal slices of the Google Books API response we access.
 * These interfaces purposefully ignore the majority of fields for simplicity.
 */
export interface GoogleVolumeInfo {
  title?: string;
  subtitle?: string;
  authors?: string[];
  description?: string;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  infoLink?: string;
  publishedDate?: string; // e.g. "2020-10-07" or just a year
  pageCount?: number;
  averageRating?: number;
  ratingsCount?: number;
}

export interface GoogleVolumeItem {
  id?: string;
  volumeInfo?: GoogleVolumeInfo;
}

export interface GoogleVolumesResponse {
  kind?: string;
  totalItems?: number;
  items?: GoogleVolumeItem[];
}

/**
 * Utility: ensure we always use https for images (Google sometimes returns http)
 */
function toHttps(url?: string | null): string | null {
  if (!url) return null;
  return url.replace(/^http:\/\//i, 'https://');
}

/**
 * Normalize a single Google Books volume item into our lean Book shape.
 */
export function normalizeGoogleVolume(item: GoogleVolumeItem): Book | null {
  if (!item) return null;
  const vi = item.volumeInfo || {};
  const titleRaw = vi.title?.trim();
  const title = titleRaw && titleRaw.length > 0 ? titleRaw : '(Untitled)';
  const publishedYear = vi.publishedDate ? vi.publishedDate.slice(0, 4) : null;
  const img = vi.imageLinks?.thumbnail || vi.imageLinks?.smallThumbnail || null;

  if (!item.id) {
    // Without an id it's harder to track; skip rather than generating a random one.
    return null;
  }

  return {
    id: item.id,
    title,
    authors: vi.authors ?? [],
    description: vi.description ?? null,
    thumbnail: toHttps(img),
    infoUrl: vi.infoLink ?? null,
    publishedYear,
    pageCount: vi.pageCount ?? null,
    averageRating: vi.averageRating ?? null,
    ratingsCount: vi.ratingsCount ?? null,
  };
}

/**
 * Transform an entire Google Books response into a normalized collection.
 * Filters out items we can't safely use (e.g., missing id or title data).
 */
export function parseGoogleBooksResponse(json: GoogleVolumesResponse) {
  const total = json?.totalItems ?? 0;
  const rawItems = json?.items ?? [];
  const items: Book[] = [];
  for (const it of rawItems) {
    const b = normalizeGoogleVolume(it);
    if (b) items.push(b);
  }
  return { total, items };
}

/**
 * Optional class wrapper if an OO style is preferred in components.
 * Provides simple static constructors that delegate to functions above.
 */
export class BookModel implements Book {
  id!: string;
  title!: string;
  authors!: string[];
  description?: string | null;
  thumbnail?: string | null;
  infoUrl?: string | null;
  publishedYear?: string | null;
  pageCount?: number | null;
  averageRating?: number | null;
  ratingsCount?: number | null;

  private constructor(data: Book) {
    Object.assign(this, data);
  }

  static fromGoogle(item: GoogleVolumeItem): BookModel | null {
    const normalized = normalizeGoogleVolume(item);
    return normalized ? new BookModel(normalized) : null;
  }

  static listFromGoogleResponse(resp: GoogleVolumesResponse): BookModel[] {
    return (resp.items ?? [])
      .map(BookModel.fromGoogle)
      .filter((b): b is BookModel => Boolean(b));
  }
}

// Convenience re-export for consumers wanting a single import path.
export type { Book as BookDTO };
