import { useCallback, useEffect, useRef, useState } from 'react';
import SearchBar from './components/SearchBar';
import List from './components/List';
import { cachedSearchBooks } from './service/searchService';
import type { Book } from './lib/bookModel';
import { ThemeToggle } from './components/ThemeToggle';
import { ResultSummary } from './components/ResultSummary';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const performSearch = useCallback(async (q: string) => {
    const trimmed = q.trim();
    setQuery(trimmed);
    if (!trimmed) {
      setBooks([]);
      setTotal(0);
      setError(null);
      return;
    }
    // Cancel previous
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);
    setError(null);
    try {
      const res = await cachedSearchBooks({
        query: trimmed,
        signal: controller.signal,
        timeoutMs: 8000,
      });
      setBooks(res.items);
      setTotal(res.total);
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return; // cancellation
      const msg = e instanceof Error ? e.message : 'Search failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  // Optional: auto search on initial mount with a default term
  useEffect(() => {
    // performSearch('time management');
  }, [performSearch]);

  return (
    <div className="min-h-dvh flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm"
      >
        Skip to content
      </a>
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur z-30">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2 gap-4">
          <h1 className="text-lg font-semibold tracking-tight">Book Search</h1>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-2 pb-2">
          <SearchBar
            onSearch={performSearch}
            loading={loading}
            defaultQuery={query}
          />
        </div>
      </header>
      <main
        id="main"
        className="flex-1 max-w-5xl mx-auto w-full px-4 py-4 space-y-4"
      >
        {error && (
          <div className="text-sm text-red-600 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded p-3 flex items-start justify-between gap-4">
            <span className="flex-1">{error}</span>
            <button
              className="underline text-xs"
              onClick={() => performSearch(query)}
            >
              Retry
            </button>
          </div>
        )}
        <ResultSummary
          query={query}
          total={total}
          loading={loading}
          shown={books.length}
        />
        <List items={books} loading={loading} query={query} total={total} />
      </main>
      <footer className="border-t mt-8">
        <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-muted-foreground flex flex-wrap items-center gap-3">
          <span>Data: Google Books</span>
          <span className="opacity-60">Press ⌘/Ctrl + K to focus search</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ml-auto hover:text-foreground"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
