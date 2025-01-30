"use client"

import {useShallow} from "zustand/react/shallow";
import LandingServiceModulesExampleText from "@/(landing)/serviceModules/example/text";
import LandingServiceModulesExampleImage from "@/(landing)/serviceModules/example/image";
import {useAppContext} from "@/lib/stores/app/context";
import {useState} from "react";

export default function LandingServiceModulesExample() {
    const { serviceModules, selectedServiceModuleIndex, prevSelectedServiceModuleIndex } = useAppContext(
        useShallow((state) => ({
            serviceModules: state.serviceModules,
            selectedServiceModuleIndex: state.selectedServiceModuleIndex,
            prevSelectedServiceModuleIndex: state.prevSelectedServiceModuleIndex,
        })),
    );

    const selectedServiceModule = serviceModules[selectedServiceModuleIndex !== undefined ? selectedServiceModuleIndex : prevSelectedServiceModuleIndex];
    const [height, setHeight] = useState<number>(0)

    return (
        <div className="pt-y-section">
            <div className="w-full flex flex-col items-center transition-[height] duration-700 overflow-y-hidden"
                 style={{ height: selectedServiceModuleIndex !== undefined ? `${height}px` : '0px' }}
            >
                <div ref={el => setHeight(el?.clientHeight ?? 0)}
                     className="w-full flex flex-col-reverse xs:grid xs:grid-cols-[4fr_2fr] gap-[1rem] ss:gap-[4rem] pb-y-paragraph">
                    <LandingServiceModulesExampleText key="text" selectedServiceModule={selectedServiceModule}/>
                    <LandingServiceModulesExampleImage key="image" selectedServiceModule={selectedServiceModule}/>
                </div>
            </div>
        </div>
    );
}