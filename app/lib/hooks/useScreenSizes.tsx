import { useEffect, useState } from 'react';
import {ScreenSizeType} from "@/lib/types/core";
import {useWindowSize} from "@uidotdev/usehooks";

const SS = 820

const useScreenSizes = () => {
  const windowSize = useWindowSize()
  const [screenSizes, setScreenSizes] = useState<ScreenSizeType | undefined>(undefined);

  useEffect(() => {
    if (windowSize) {
      if (windowSize?.width && windowSize?.width < SS) {
        setScreenSizes({isXs: true})
      } else {
        setScreenSizes({isXs: false})
      }
    }

  }, [windowSize]);

  return screenSizes;
};

export default useScreenSizes;
