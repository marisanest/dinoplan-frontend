"use client"

import LandingServiceModulesButton from "@/(landing)/serviceModules/buttons/button";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";
import {useMemo} from "react";

export default function LandingServiceModulesButtonsList() {
    const serviceModules = useAppContext(useShallow((s) => s.serviceModules));

    const groupedServiceModules = useMemo(() => {
        const _groupedServiceModules = {};

        serviceModules.forEach(serviceModule => {
            if (!(serviceModule.serviceSegment._id in _groupedServiceModules))
                _groupedServiceModules[serviceModule.serviceSegment._id] = []

            _groupedServiceModules[serviceModule.serviceSegment._id].push(serviceModule);
        })

        return _groupedServiceModules
    }, [serviceModules]);

    let index = -1;

    return (
        <div className="pt-y-s flex flex-wrap gap-y-[0.5rem] gap-x-[0.25rem] sm:gap-y-[0.65rem] sm:gap-x-[0.5rem] justify-center">
            {Object.entries(groupedServiceModules).map(([key, serviceModulesGroup]) => (
                <div key={key} className="flex flex-wrap gap-y-[0.5rem] gap-x-[0.25rem] sm:gap-y-[0.65rem] sm:gap-x-[0.5rem] justify-center">
                    {serviceModulesGroup.map((serviceModule) => {
                        index = index + 1;

                        return (
                            <LandingServiceModulesButton key={serviceModule._id}
                                                         serviceModule={serviceModule}
                                                         index={index}/>
                        )
                    })}
                </div>
            ))}
        </div>
    );
}