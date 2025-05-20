"use client"

import {useShallow} from "zustand/react/shallow";
import useScreenSizes from "@/lib/hooks/useScreenSizes";
import ServiceSegment from "@/components/serviceSegments/serviceSegment";
import {useAppContext} from "@/lib/stores/app/context";

export default function ServiceSegmentsGrid() {
    const screenSizes = useScreenSizes()

    const {serviceSegments} = useAppContext(useShallow((s) => ({
        serviceSegments: s.serviceSegments,
    })))

    if (screenSizes?.isXs) return null;

    return (
      <div className="w-full hidden ss:grid ss:grid-cols-3 ss:justify-between ss:gap-[1.5rem] sm:gap-[4rem]">
            {serviceSegments.map((serviceSegment, index) => (
                <ServiceSegment
                    key={serviceSegment._id}
                    className={index === 1 ? 'mx-auto' : (index === 2 ? 'ml-auto' : '')}
                    index={index}
                    serviceSegment={serviceSegment}/>
            ))}
        </div>
    );
}
