"use client"
import {ServiceSegmentsProvider} from "@/lib/stores/serviceSegments/context";
import useScreenSizes from "@/lib/hooks/useScreenSizes";

export default function CalculatorCalculationProviderContainer({serviceSegments, children}: any) {
    const screenSizes = useScreenSizes()

    return (
        <ServiceSegmentsProvider showServiceSegmentDetails={screenSizes?.isXxs}
                                 serviceSegments={serviceSegments.map((s: any) => s.serviceSegment)}>
            {children}
        </ServiceSegmentsProvider>
    );
}

