"use client"

import LandingServiceModulesButton from "@/(landing)/serviceModules/buttons/button";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingServiceModulesButtonsList() {
    const serviceModules = useAppContext(useShallow((s) => s.serviceModules));

    return (
        <>
            {serviceModules.map((serviceModule, index) => <LandingServiceModulesButton key={serviceModule._id} serviceModule={serviceModule} index={index}/>)}
        </>
    );
}
