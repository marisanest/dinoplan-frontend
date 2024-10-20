import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import { useShallow } from "zustand/react/shallow";
import CalculatorServiceModule from "@/rechner/components/serviceModule";

export default function CalculatorServiceModules() {
  const { selectedServiceSegment } = useCalculatorStore(
    useShallow((state) => ({
      selectedServiceSegment: state.selectedServiceSegment,
    })),
  );

  if (!selectedServiceSegment) return null;

  return (
    <div className="bg-orange-300 px-x-sm py-y-sm w-sm max-w-sm flex flex-col justify-center items-center">
        <div className="w-fit flex flex-col gap-[0.75rem]">
            {selectedServiceSegment.serviceModules.map((serviceModule) => (
                <CalculatorServiceModule key={serviceModule.serviceModule._id} serviceModule={serviceModule.serviceModule} />
            ))}
        </div>
    </div>
  );
}
