import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Props {
  onSearch: (query: string) => void;
  loading?: boolean;
  defaultQuery?: string;
}
const SUGGESTIONS = [
  'time management',
  'productivity',
  'self discipline',
  'education leadership',
  'ADHD',
];

const SearchBar = ({ onSearch, loading, defaultQuery }: Props) => {
  const [value, setValue] = useState(defaultQuery ?? '');
  const inputRef = useRef<HTMLInputElement | null>(null);

  function submit() {
    onSearch(value);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <form
      className="flex items-center space-x-2 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Input
        placeholder="Search for books..."
        className="flex-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
        aria-label="Search books"
        ref={inputRef}
      />
      <Button type="submit" disabled={loading || !value.trim()}>
        {loading ? 'Searching…' : 'Search'}
      </Button>
      {value && !loading && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          aria-label="Clear search"
          onClick={() => {
            setValue('');
            onSearch('');
            inputRef.current?.focus();
          }}
        >
          ✕
        </Button>
      )}
      {(!value || value.length < 3) && (
        <div className="w-full flex flex-wrap gap-2 mt-3 pl-1">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setValue(s);
                onSearch(s);
              }}
              className="text-[11px] px-2 py-1 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
