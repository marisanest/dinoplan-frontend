import LandingServiceSegment from "@/(landing)/serviceSegments/grid/serviceSegment";
import {useServiceSegmentsContext} from "@/lib/stores/serviceSegments/context";
import {useShallow} from "zustand/react/shallow";
import useScreenSizes from "@/lib/hooks/useScreenSizes";

export default function LandingServiceSegmentsGrid() {
    const screenSizes = useScreenSizes()
    const {serviceSegments} = useServiceSegmentsContext(useShallow((s) => ({
        serviceSegments: s.serviceSegments,
    })))

    if (!screenSizes || screenSizes.isXxs) return null;

    return (
        <div className="w-full grid grid-cols-3 justify-between gap-[1.5rem] sm:gap-[4rem] mt-y-s px-[1rem]">
            {serviceSegments.map((serviceSegment, index) => (
                <LandingServiceSegment
                    key={serviceSegment._id}
                    className={index === 1 ? 'mx-auto' : (index === 2 ? 'ml-auto' : '')}
                    index={index}
                    serviceSegment={serviceSegment}/>
            ))}
        </div>
    );
}
