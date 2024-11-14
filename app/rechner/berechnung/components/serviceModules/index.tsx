"use client"

import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import { useShallow } from "zustand/react/shallow";
import cn from "clsx";
import CalculatorCalculationServiceModule from "@/rechner/berechnung/components/serviceModules/serviceModule";

export default function CalculatorCalculationServiceModules({setHeight}) {
  const { selectedServiceSegment, prevSelectedServiceSegment } = useCalculatorStore(
    useShallow((state) => ({
        selectedServiceSegment: state.selectedServiceSegment,
        prevSelectedServiceSegment: state.prevSelectedServiceSegment,
    })),
  );

  const serviceSegment = selectedServiceSegment ?? prevSelectedServiceSegment;

  return (
      <CalculatorCalculationServiceModulesContainer setHeight={setHeight}>
          <div className="w-fit flex flex-col gap-[0.75rem]">
              {serviceSegment?.serviceModules.map((serviceModule: any) => (
                  <CalculatorCalculationServiceModule key={serviceModule.serviceModule._id}
                                                      serviceModule={serviceModule.serviceModule}/>
              ))}
          </div>
      </CalculatorCalculationServiceModulesContainer>
  );
}

function CalculatorCalculationServiceModulesContainer({children, setHeight}) {
    const {selectedServiceSegment} = useCalculatorStore(
        useShallow((state) => ({
            selectedServiceSegment: state.selectedServiceSegment,
        })),
    );

    return (
        <div ref={el => setHeight(el?.clientHeight)}
             className={cn(
                 "absolute z-1 left-0 right-0 bg-orange-300 pt-[calc(var(--dino-bottom-offset)+var(--spacing-y-s))] pb-y-s transition-[transform,border-radius] duration-1000 w-full flex justify-center",
                 selectedServiceSegment ? 'rounded-bl-md translate-y-[calc(-1*var(--dino-bottom-offset))] shadow-[0px_6px_10px_-10px_black]' : 'rounded-bl-0 translate-y-[-100%] shadow-[0px_0px_0px_0px_black]'
             )}>
            <div className="w-full px-x-s flex justify-center">
                {children}
            </div>
        </div>
    );
}
