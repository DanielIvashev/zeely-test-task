import { useState, useCallback } from "react";

type UseHistoryReturn<T> = {
  state: T;
  push: (newState: T) => void;
  replace: (newState: T) => void;
  undo: () => void;
  redo: () => void;
  go: (index: number) => void;
  clear: () => void;
  canUndo: boolean;
  canRedo: boolean;
  history: T[];
  currentIndex: number;
};

export function useHistory<T>(initialState: T): UseHistoryReturn<T> {
  const [history, setHistory] = useState<T[]>([initialState]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = history[currentIndex];

  const push = useCallback(
    (newState: T) => {
      setHistory((prev) => {
        const before = prev.slice(0, currentIndex + 1);
        const after = prev.slice(currentIndex + 1);
        return [...before, newState, ...after];
      });
      setCurrentIndex((prev) => prev + 1);
    },
    [currentIndex],
  );

  const replace = useCallback(
    (newState: T) => {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory[currentIndex] = newState;
        return newHistory;
      });
    },
    [currentIndex],
  );

  const undo = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const redo = useCallback(() => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, history.length]);

  const go = useCallback(
    (index: number) => {
      if (index >= 0 && index < history.length) {
        setCurrentIndex(index);
      }
    },
    [history.length],
  );

  const clear = useCallback(() => {
    setHistory([initialState]);
    setCurrentIndex(0);
  }, [initialState]);

  return {
    state: current,
    push,
    replace,
    undo,
    redo,
    go,
    clear,
    canUndo: currentIndex > 0,
    canRedo: currentIndex < history.length - 1,
    history,
    currentIndex,
  };
}
