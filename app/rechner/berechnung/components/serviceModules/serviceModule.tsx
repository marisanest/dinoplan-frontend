import { useShallow } from "zustand/react/shallow";
import Text from "@/components/text/text";
import CheckmarkIcon from "@/components/icons/checkmark";
import {useCalculatorContext} from "@/lib/stores/calculator/context";

import InfoBoxToggle from "@/components/infoBox/toggle";

export default function CalculatorCalculationServiceModule({serviceModule}: any) {
  const { selectedServiceModules, selectServiceModule } = useCalculatorContext(
    useShallow((state) => ({
        selectedServiceModules: state.selectedServiceModules,
        selectServiceModule: state.selectServiceModule,
    })),
  );

  return (
      <div className="flex">
          <div className="flex justify-center items-center gap-[12px] cursor-pointer pt-[6px]"
               onClick={() => selectServiceModule(serviceModule)}
          >
              <div className="min-w-circle w-circle min-h-circle h-circle rounded-full p-[2px] xs:p-[3px] border-blue-600 border-[2px]">
                  {serviceModule._id in selectedServiceModules && <CheckmarkIcon strokeColor="#294290"/>}
              </div>
              <Text className="break-all" size="lg" align="left">{serviceModule.name}</Text>
          </div>
          {serviceModule.costCalculationDescription && <InfoBoxToggle text={serviceModule.costCalculationDescription} />}
      </div>
  );
}