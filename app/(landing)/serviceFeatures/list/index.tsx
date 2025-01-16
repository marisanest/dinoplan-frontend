"use client"

import LandingServiceFeature from "@/(landing)/serviceFeatures/serviceFeature";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingServiceFeaturesList() {
    const serviceFeatures = useAppContext(useShallow((s) => s.serviceFeatures));

    return (
        <div key="features"
             className="grid grid-cols-2 ss:grid-cols-3 px-x-xs ss:px-0 py-y-section gap-x-[1.5rem] gap-y-paragraph ss:gap-x-[1.5rem] ss:gap-y-paragraph">
            {serviceFeatures.map((serviceFeature) => <LandingServiceFeature key={serviceFeature._id} serviceFeature={serviceFeature}/>)}
        </div>
    );
}