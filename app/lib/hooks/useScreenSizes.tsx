import { useEffect, useState } from 'react';
import {ScreenSizeType} from "@/lib/types/core";
import useWindowSize from "@/lib/hooks/useWindowSize";

const XXS = 470

const useScreenSizes = () => {
  const windowSize = useWindowSize()
  const [screenSizes, setScreenSizes] = useState<ScreenSizeType | undefined>(undefined);

  // lg: '1245px',
  // sm: '1045px',
  // xs: '470px',
  // xxs: '405px',

  useEffect(() => {
    if (windowSize) {
      if (windowSize.width < XXS) {
        setScreenSizes({isXxs: true})
      } else {
        setScreenSizes({isXxs: false})
      }
    }

  }, [windowSize]);

  return screenSizes;
};

export default useScreenSizes;
