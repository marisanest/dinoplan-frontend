"use client"

import {ReactNodeProps} from "@/lib/types/core";
import useServicesStore from "@/lib/stores/useServicesStore";
import {useShallow} from "zustand/react/shallow";
import LandingServicesExampleImage from "@/(landing)/services/example/image";
import LandingServicesExampleText from "@/(landing)/services/example/text";
import Button from "@/components/buttons";

export default function LandingServicesExample() {
    const { selectedService } = useServicesStore(
        useShallow((state) => ({
            selectedService: state.selectedService,
        })),
    );

    if (!selectedService) return null;

    return (
        <LandingServicesExampleContainer>
            <div className="grid grid-cols-[2fr_1fr] gap-sm w-full">
                <LandingServicesExampleText key="text" service={selectedService}/>
                <LandingServicesExampleImage key="image" service={selectedService}/>
            </div>
            <div className="w-fit pt-y-s">
                <Button colors="red"
                        link={{type: 'internal', href: '/rechner'}}>
                    Beitrag berechnen
                </Button>
            </div>
        </LandingServicesExampleContainer>
);
}

function LandingServicesExampleContainer({
    children}: ReactNodeProps) {
    return (
        <div className="w-full flex items-center flex-col">
            {children}
        </div>
    );
}
