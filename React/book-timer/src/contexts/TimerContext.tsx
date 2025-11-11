// Placeholder: TimerContext - no implementation.
// 타임 세션
type ReadingSession = {
  id: string;
  bookId: string;
  startAt: number;
  endAt: number; // 진행중이면 null 가능
  durationMs: number; // endAt - startAt
};

export type { ReadingSession };
