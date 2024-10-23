"use client"

import Button from "@/app/components/buttons";
import {useShallow} from "zustand/react/shallow";
import useServiceModulesStore from "@/lib/stores/useServiceModulesStore";

export default function LandingServiceModulesButton({serviceModule}) {
    const { selectedServiceModule, selectServiceModule } = useServiceModulesStore(
        useShallow((state) => ({
            selectedServiceModule: state.selectedServiceModule,
            selectServiceModule: state.selectServiceModule,
        })),
    );

    return (
        <Button className={selectedServiceModule?._id === serviceModule._id ? '!border-red-200 !bg-red-200 !text-yellow-100' : ''}
                onClick={() => selectServiceModule(serviceModule)}>
            {serviceModule.name}
        </Button>
    )
}
