import type { Book } from '@/lib/bookModel';
import ListCard from './ListCard';

interface Props {
  items: Book[];
  loading?: boolean;
  query?: string;
  total?: number;
}

const List = ({ items, loading }: Props) => {
  if (loading && items.length === 0) {
    return (
      <div className="grid gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-20 animate-pulse rounded bg-gray-100" />
        ))}
      </div>
    );
  }

  if (!loading && items.length === 0) {
    return (
      <div className="text-sm text-muted-foreground p-4 border rounded-md bg-card/30">
        No results
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {items.map((b) => (
        <ListCard key={b.id} book={b} />
      ))}
    </div>
  );
};

export default List;
