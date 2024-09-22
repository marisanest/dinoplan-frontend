import { useEffect, useState } from 'react';
import {WindowSizeType} from "@/lib/types/core";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeType | undefined>(
    undefined,
  );

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', windowSizeHandler);

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
