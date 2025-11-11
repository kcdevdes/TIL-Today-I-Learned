// Open Library API service wrappers
// Docs: https://openlibrary.org/developers/api

export interface OpenLibraryDocRaw {
	key: string; // e.g. "/works/OL12345W"
	title?: string;
	author_name?: string[];
	cover_i?: number;
}

export interface OpenLibrarySearchResponseRaw {
	numFound: number;
	start: number;
	docs: OpenLibraryDocRaw[];
}

// Normalized shape used in the app (aligns with SearchBook in LibraryContext)
export interface SearchBookDTO {
	id: string; // derived from key
	title: string;
	authors: string[];
	coverId?: number;
}

export interface SearchBooksResult {
	total: number;
	start: number;
	books: SearchBookDTO[];
	query: string;
}

const BASE_URL = 'https://openlibrary.org';

function normalizeDoc(doc: OpenLibraryDocRaw): SearchBookDTO | null {
	const id = doc.key?.replace(/^\//, '');
	if (!id) return null;
	return {
		id,
		title: doc.title ?? '(No title)',
		authors: doc.author_name ?? [],
		coverId: doc.cover_i,
	};
}

export async function searchBooks(query: string, signal?: AbortSignal): Promise<SearchBooksResult> {
	const trimmed = query.trim();
	if (!trimmed) {
		return { total: 0, start: 0, books: [], query: trimmed };
	}
	const url = `${BASE_URL}/search.json?q=${encodeURIComponent(trimmed)}`;
	const res = await fetch(url, { signal });
	if (!res.ok) {
		throw new Error(`OpenLibrary search failed: ${res.status}`);
	}
	const json = (await res.json()) as OpenLibrarySearchResponseRaw;
	const books: SearchBookDTO[] = json.docs.map(normalizeDoc).filter(Boolean) as SearchBookDTO[];
	return { total: json.numFound, start: json.start, books, query: trimmed };
}

// Helper to build cover URL (Medium size by default)
export function buildCoverUrl(coverId?: number, size: 'S' | 'M' | 'L' = 'M'): string | undefined {
	if (!coverId) return undefined;
	return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
}

// React Query key factory (centralized to avoid typos)
export const openLibraryKeys = {
	all: ['openLibrary'] as const,
	search: (q: string) => [...openLibraryKeys.all, 'search', q] as const,
};

// (Optional) prefetch helper for integration convenience
export function getSearchQueryOptions(query: string) {
	return {
		queryKey: openLibraryKeys.search(query),
		queryFn: ({ signal }: { signal?: AbortSignal }) => searchBooks(query, signal),
		staleTime: 1000 * 60, // 1 min
		enabled: !!query.trim(),
	} as const;
}

// NOTE: Components should import getSearchQueryOptions or openLibraryKeys + searchBooks and use with useQuery.

