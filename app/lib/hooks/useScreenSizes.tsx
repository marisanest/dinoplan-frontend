import { useEffect, useState } from 'react';
import {ScreenSizeType} from "@/lib/types/core";
import useWindowSize from "@/lib/hooks/useWindowSize";

//    lg: '1245px',
//     md: '1150px',
//     sm: '1045px',
//     s: '980px',
//     ss: '820px',
//     xs: '470px',
//     xxs: '405px',

const SS = 820

const useScreenSizes = () => {
  const windowSize = useWindowSize()
  const [screenSizes, setScreenSizes] = useState<ScreenSizeType | undefined>(undefined);

  useEffect(() => {
    if (windowSize) {
      if (windowSize.width < SS) {
        setScreenSizes({isXs: true})
      } else {
        setScreenSizes({isXs: false})
      }
    }

  }, [windowSize]);

  return screenSizes;
};

export default useScreenSizes;
