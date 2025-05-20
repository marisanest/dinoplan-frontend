"use client"

import LandingServiceFeature from "@/(landing)/serviceFeatures/serviceFeature";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingServiceFeaturesList() {
    const serviceFeatures = useAppContext(useShallow((s) => s.serviceFeatures));

    return (
        <div key="features"
             className="grid grid-cols-2 ss:grid-cols-3 px-x-xs ss:px-[32px] py-y-section gap-x-[12px] gap-y-paragraph ss:gap-x-[0px] ss:gap-y-paragraph">
            {serviceFeatures.map((serviceFeature) => <LandingServiceFeature key={serviceFeature._id} serviceFeature={serviceFeature}/>)}
        </div>
    );
}