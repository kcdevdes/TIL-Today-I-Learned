import { useState } from 'react';
import type { Book } from '@/lib/bookModel';

interface Props {
  book: Book;
}

function ratingStars(r?: number | null) {
  if (!r) return null;
  const full = Math.round(r);
  return '★★★★★'.slice(0, full) + '☆☆☆☆☆'.slice(0, 5 - full);
}

const ListCard = ({ book }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const stars = ratingStars(book.averageRating);
  const showDesc = book.description?.trim();
  const short =
    showDesc && showDesc.length > 260 && !expanded
      ? showDesc.slice(0, 260) + '…'
      : showDesc;
  return (
    <article className="group flex gap-4 rounded-xl border bg-card text-card-foreground p-3 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-ring outline-none">
      {book.thumbnail && (
        <div className="relative shrink-0">
          <img
            src={book.thumbnail}
            alt={book.title}
            className="w-16 h-24 md:w-20 md:h-28 object-cover rounded-md bg-muted"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.visibility = 'hidden';
            }}
          />
        </div>
      )}
      <div className="flex-1 min-w-0 space-y-1">
        <h3 className="font-semibold text-sm md:text-base leading-snug line-clamp-2 pr-6">
          {book.title}
        </h3>
        {book.authors.length > 0 && (
          <p className="text-[11px] md:text-xs text-muted-foreground truncate">
            {book.authors.join(', ')}
          </p>
        )}
        <div className="flex items-center gap-2 text-[11px] md:text-[12px] text-muted-foreground">
          {book.publishedYear && <span>{book.publishedYear}</span>}
          {stars && (
            <span
              aria-label={`Rated ${book.averageRating} out of 5`}
              className="tracking-tight text-yellow-500/90 dark:text-yellow-400/80"
            >
              {stars}
            </span>
          )}
          {book.pageCount && <span>{book.pageCount}p</span>}
        </div>
        {short && (
          <p className="text-xs md:text-[13px] text-foreground/80 leading-relaxed">
            {short}{' '}
            {showDesc && showDesc.length > 260 && (
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                className="text-primary hover:underline font-medium ml-1"
              >
                {expanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </p>
        )}
        <div className="pt-1 flex items-center gap-3">
          {book.infoUrl && (
            <a
              href={book.infoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline font-medium"
            >
              Details ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ListCard;
