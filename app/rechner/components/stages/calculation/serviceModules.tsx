import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import { useShallow } from "zustand/react/shallow";
import CalculatorStageCalculationServiceModule from "@/rechner/components/stages/calculation/serviceModule";
import cn from "clsx";

export default function CalculatorStageCalculationServiceModules() {
  const { selectedServiceSegment } = useCalculatorStore(
    useShallow((state) => ({
      selectedServiceSegment: state.selectedServiceSegment,
    })),
  );

  if (!selectedServiceSegment) return null;

  return (
      <div className={cn("bg-orange-200", selectedServiceSegment ? "pb-y-sm" : "")}>
          {
              selectedServiceSegment && (
                  <div
                      className="bg-orange-300 px-x-sm pb-y-sm w-sm max-w-sm flex flex-col justify-center items-center rounded-bl-[50px] shadow-[0px_6px_10px_-10px_black]">
                      <div className="w-fit flex flex-col gap-[0.75rem]">
                          {selectedServiceSegment.serviceModules.map((serviceModule) => (
                              <CalculatorStageCalculationServiceModule key={serviceModule.serviceModule._id}
                                                                       serviceModule={serviceModule.serviceModule}/>
                          ))}
                      </div>
                  </div>
              )
          }
      </div>
  );
}
