"use client"
import {ServiceSegmentsProvider} from "@/lib/stores/serviceSegments/context";

export default function ServiceSegmentsProviderContainer({serviceSegments, children}: any) {
    return (
        <ServiceSegmentsProvider serviceSegments={serviceSegments?.map((s: any) => s.serviceSegment)}>
            {children}
        </ServiceSegmentsProvider>
    );
}

