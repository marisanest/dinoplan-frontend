"use client"

import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import { useShallow } from "zustand/react/shallow";
import cn from "clsx";
import CalculatorCalculationServiceModule from "@/rechner/berechnung/components/serviceModules/serviceModule";

export default function CalculatorCalculationServiceModules() {
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
                          {selectedServiceSegment.serviceModules.map((serviceModule: any) => (
                              <CalculatorCalculationServiceModule key={serviceModule.serviceModule._id}
                                                                       serviceModule={serviceModule.serviceModule}/>
                          ))}
                      </div>
                  </div>
              )
          }
      </div>
  );
}
