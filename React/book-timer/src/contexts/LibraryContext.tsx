// 서버(검색) 응답 일부
type SearchBook = {
  id: string; // openlibrary key 변형
  title: string;
  authors: string[];
  coverId?: number; // covers API용
};

// 로컬 서재
type LibraryBook = {
  id: string; // SearchBook.id
  title: string;
  authors: string[];
  coverId?: number;
  status: 'reading' | 'completed' | 'on_hold';
  favorite: boolean;
  memo?: string;
  addedAt: number; // timestamp
};

export type { SearchBook, LibraryBook };
