"use client"

import {useShallow} from "zustand/react/shallow";
import LandingServiceModulesExampleText from "@/(landing)/serviceModules/example/text";
import LandingServiceModulesExampleImage from "@/(landing)/serviceModules/example/image";
import {useAppContext} from "@/lib/stores/app/context";
import {useEffect, useState} from "react";
import {delay} from "@/lib/utils";
import cn from "clsx";

export default function LandingServiceModulesExample() {
    const { serviceModules, selectedServiceModuleIndex, prevSelectedServiceModuleIndex } = useAppContext(
        useShallow((state) => ({
            serviceModules: state.serviceModules,
            selectedServiceModuleIndex: state.selectedServiceModuleIndex,
            prevSelectedServiceModuleIndex: state.prevSelectedServiceModuleIndex,
        })),
    );

    const [overflowClass, setOverflowClass] = useState('overflow-y-hidden')

    useEffect(() => {
        const handleOverflowClass = async () => {
            await delay(700)
            setOverflowClass('')
        }

        if (selectedServiceModuleIndex === undefined) {
            setOverflowClass('overflow-y-hidden')
        } else if (overflowClass === 'overflow-y-hidden') {
            handleOverflowClass()
        }
    }, [selectedServiceModuleIndex])

    const selectedServiceModule = serviceModules[selectedServiceModuleIndex !== undefined ? selectedServiceModuleIndex : prevSelectedServiceModuleIndex];
    const [height, setHeight] = useState<number>(0)

    return (
        <div className="pt-y-section">
            <div className={cn("w-full flex flex-col items-center transition-[height] duration-700", overflowClass)}
                 style={{ height: selectedServiceModuleIndex === undefined ? '0px' : `${height}px`}}>
                <div ref={el => setHeight(el?.clientHeight ?? 0)}
                     className="w-full flex flex-col-reverse xs:grid xs:grid-cols-[4fr_2fr] gap-y-[16px] ss:gap-x-[48px] pb-y-paragraph">
                    <LandingServiceModulesExampleText key="text" selectedServiceModule={selectedServiceModule}/>
                    <LandingServiceModulesExampleImage key="image" selectedServiceModule={selectedServiceModule}/>
                </div>
            </div>
        </div>
    );
}