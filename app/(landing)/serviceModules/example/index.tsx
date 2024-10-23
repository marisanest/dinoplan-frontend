"use client"

import {ReactNodeProps} from "@/lib/types/core";
import useServiceModulesStore from "@/lib/stores/useServiceModulesStore";
import {useShallow} from "zustand/react/shallow";
import LandingServiceModulesExampleText from "@/(landing)/serviceModules/example/text";
import Button from "@/components/buttons";
import LandingServiceModulesExampleImage from "@/(landing)/serviceModules/example/image";
import Text from "@/components/text/text";

export default function LandingServiceModulesExample() {
    const { selectedServiceModule } = useServiceModulesStore(
        useShallow((state) => ({
            selectedServiceModule: state.selectedServiceModule,
        })),
    );

    if (!selectedServiceModule) return null;

    return (
        <LandingServiceModulesExampleContainer>
            <div className="grid grid-cols-[3fr_2fr] gap-[1rem] sm:gap-[4rem] w-full">
                <LandingServiceModulesExampleText key="text" serviceModule={selectedServiceModule}/>
                <LandingServiceModulesExampleImage key="image" serviceModule={selectedServiceModule}/>
            </div>
            <div className="w-fit pt-y-s">
                <Button colors="red" link={{type: 'internal', url: '/rechner'}} unresponsive>
                    <Text color="yellow">Beitrag berechnen</Text>
                </Button>
            </div>
        </LandingServiceModulesExampleContainer>
);
}

function LandingServiceModulesExampleContainer({
    children}: ReactNodeProps) {
    return (
        <div className="w-full flex items-center flex-col pt-y-s px-x-xs">
            {children}
        </div>
    );
}
