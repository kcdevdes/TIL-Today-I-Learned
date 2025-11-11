interface Props {
  query: string;
  total: number;
  loading: boolean;
  shown: number;
}

export function ResultSummary({ query, total, loading, shown }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm rounded-md border px-3 py-2 bg-card/60 backdrop-blur-sm">
      <div aria-live="polite" className="font-medium">
        {loading && query && 'Searching…'}
        {!loading && !query && 'Type a search to begin'}
        {!loading &&
          query &&
          total > 0 &&
          `${shown} of ${total.toLocaleString()} results for “${query}”`}
        {!loading && query && total === 0 && 'No results'}
      </div>
      {query && !loading && total > 0 && (
        <div className="text-[11px] text-muted-foreground hidden sm:block">
          Tip: Use more specific words to refine.
        </div>
      )}
    </div>
  );
}
