"use client"

import Button from "@/app/components/buttons";
import {ServiceType} from "@/lib/types/core";
import {useShallow} from "zustand/react/shallow";
import useServicesStore from "@/lib/stores/useServicesStore";

export type LandingServicesButtonProps = {
    service: ServiceType;
}

export default function LandingServicesButton({service}: LandingServicesButtonProps) {
    const { selectedService, selectService } = useServicesStore(
        useShallow((state) => ({
            selectedService: state.selectedService,
            selectService: state.selectService,
        })),
    );

    return (
        <Button
            className={selectedService?.id === service.id ? '!border-red-200 !bg-red-200 !text-yellow-100' : ''}
            onClick={() => selectService(service)}>
            {service.title}
        </Button>
    )
}
