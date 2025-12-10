import { useState, useCallback } from "react";

export function useFakeProgress(duration = 3000) {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const start = useCallback(
    (onComplete?: () => void) => {
      setProgress(0);
      setIsRunning(true);
      const startTime = Date.now();

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);

        setProgress(newProgress);

        if (newProgress >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          onComplete?.();
        }
      }, 50);

      return () => clearInterval(interval);
    },
    [duration],
  );

  return { progress, isRunning, start };
}
