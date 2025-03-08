import InfoIcon from "@/components/icons/info";
import {useWindowSize} from "@uidotdev/usehooks";
import {RESPONSIVE_SIZE_BREAKPOINT_SS} from "@/lib/utils";

export default function InfoBoxTrigger({setIsVisible}: {setIsVisible: (isVisible: any) => void}) {
    const {width} = useWindowSize()

    return (
        <div className="cursor-pointer px-[4px] pb-[4px]"
             onClick={() => setIsVisible(prevState => !prevState)}
             onMouseEnter={() => width && width > RESPONSIVE_SIZE_BREAKPOINT_SS && setIsVisible(true)}
             onMouseLeave={() => width && width > RESPONSIVE_SIZE_BREAKPOINT_SS && setIsVisible(false)}
        >
            <InfoIcon/>
        </div>
    );
}