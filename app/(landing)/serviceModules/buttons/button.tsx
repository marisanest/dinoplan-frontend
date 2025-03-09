import Button from "@/app/components/buttons/new";
import {useShallow} from "zustand/react/shallow";
import Text from "@/components/text/text";
import {useAppContext} from "@/lib/stores/app/context";

export default function LandingServiceModulesButton({serviceModule, index}: {serviceModule: any, index: number}) {
    const {
        selectedServiceModuleIndex,
        selectServiceModule,
    } = useAppContext(
        useShallow((state) => ({
            selectedServiceModuleIndex: state.selectedServiceModuleIndex,
            selectServiceModule: state.selectServiceModule,
        })),
    );

    return (
        <Button theme="module"
                size="sm"
                selected={selectedServiceModuleIndex === index}
                onClick={() => selectServiceModule(index)}
        >
            <Text className="" size="lg" color="none">{serviceModule.name}</Text>
        </Button>
    )
}