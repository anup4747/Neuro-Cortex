import { useEffect, useRef, useState } from 'react';

export const useCountUp = (
  end: number,
  duration: number = 2000,
  start: number = 0,
  shouldStart: boolean = true
) => {
  const [count, setCount] = useState(start);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!shouldStart) return;

    const countUp = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = (timestamp - startTimeRef.current) / duration;

      if (progress < 1) {
        const value = Math.floor(start + (end - start) * progress);
        setCount(value);
        requestRef.current = requestAnimationFrame(countUp);
      } else {
        setCount(end);
      }
    };

    requestRef.current = requestAnimationFrame(countUp);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [end, duration, start, shouldStart]);

  return count;
};
