import { useShallow } from "zustand/react/shallow";
import Text from "@/components/text/text";
import CheckmarkIcon from "@/components/icons/checkmark";
import {useCalculatorContext} from "@/lib/stores/calculator/context";

import InfoBoxToggle from "@/components/infoBox/toggle";
import {updateServiceModules} from "@/rechner/berechnung/actions/updateServiceModules";

export default function CalculatorCalculationServiceModule({serviceModule}: {serviceModule: any}) {
  const {
      selectedServiceModules,
      selectServiceModule,
      customer,
      setCustomer,
  } = useCalculatorContext(
    useShallow((s) => ({
        selectedServiceModules: s.selectedServiceModules,
        selectServiceModule: s.selectServiceModule,
        customer: s.customer,
        setCustomer: s.setCustomer,
    })),
  );

  return (
      <div className="flex">
          <div className="flex justify-center items-center gap-[12px] cursor-pointer pt-[6px]"
               onClick={async () => {
                   const isSelected = !(serviceModule._id in selectedServiceModules)
                   selectServiceModule(serviceModule)
                   const res = await updateServiceModules(customer, serviceModule, isSelected)
                   res.status === 200 && res.customer && setCustomer(res.customer)
               }}>
              <div className="min-w-circle w-circle min-h-circle h-circle rounded-full p-[2px] xs:p-[3px] border-blue-600 border-[2px]">
                  {serviceModule._id in selectedServiceModules && <CheckmarkIcon strokeColor="#294290"/>}
              </div>
              <Text className="break-all" size="lg" align="left">{serviceModule.name}</Text>
          </div>
          {serviceModule.costCalculationDescription && <InfoBoxToggle key={serviceModule._id} text={serviceModule.costCalculationDescription} />}
      </div>
  );
}