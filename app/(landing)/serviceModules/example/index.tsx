"use client"

import {useShallow} from "zustand/react/shallow";
import LandingServiceModulesExampleText from "@/(landing)/serviceModules/example/text";
import LandingServiceModulesExampleImage from "@/(landing)/serviceModules/example/image";
import cn from "clsx";
import {useAppContext} from "@/lib/stores/app/context";

export default function LandingServiceModulesExample() {
    const { serviceModules, selectedServiceModuleIndex, prevSelectedServiceModuleIndex } = useAppContext(
        useShallow((state) => ({
            serviceModules: state.serviceModules,
            selectedServiceModuleIndex: state.selectedServiceModuleIndex,
            prevSelectedServiceModuleIndex: state.prevSelectedServiceModuleIndex,
        })),
    );

    const selectedServiceModule = serviceModules[selectedServiceModuleIndex !== undefined ? selectedServiceModuleIndex : prevSelectedServiceModuleIndex];

    return (
        <div className={cn("w-full flex flex-col items-center pt-y-section transition-[height] duration-700 overflow-y-hidden", selectedServiceModuleIndex !== undefined ? 'h-[338px]' : 'h-0')}>
            <div className="w-full flex flex-col-reverse xs:grid xs:grid-cols-[4fr_2fr] gap-[1rem] ss:gap-[4rem] pb-y-paragraph">
                <LandingServiceModulesExampleText key="text" selectedServiceModule={selectedServiceModule}/>
                <LandingServiceModulesExampleImage key="image" selectedServiceModule={selectedServiceModule}/>
            </div>
        </div>
    );
}