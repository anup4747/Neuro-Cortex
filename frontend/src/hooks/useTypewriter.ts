import { useEffect, useRef, useState } from 'react';

export const useTypewriter = (
  text: string,
  speed: number = 30,
  shouldStart: boolean = true
) => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    if (!shouldStart) {
      setDisplayedText('');
      indexRef.current = 0;
      return;
    }

    const type = () => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
        timeoutRef.current = window.setTimeout(type, speed);
      }
    };

    type();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, shouldStart]);

  return displayedText;
};
