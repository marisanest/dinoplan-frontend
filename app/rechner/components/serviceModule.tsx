import useCalculatorStore from "@/lib/stores/useCalculatorStore";
import { useShallow } from "zustand/react/shallow";
import RichText from "@/components/text";
import cn from "clsx";
import CheckmarkIcon from "@/components/icons/checkmark";

export default function CalculatorServiceModule({serviceModule}) {
  const { selectedServiceModules, selectServiceModule } = useCalculatorStore(
    useShallow((state) => ({
        selectedServiceModules: state.selectedServiceModules,
        selectServiceModule: state.selectServiceModule,
    })),
  );

  return (
      <div className="flex justify-center items-center gap-[0.75rem] cursor-pointer" onClick={() => selectServiceModule(serviceModule)}>
          <div
              className={cn("min-w-[2rem] w-[2rem] min-h-[2rem] h-[2rem] rounded-full p-[0.2rem] border-blue-600 border-[2px]")}>
              {serviceModule._id in selectedServiceModules && <CheckmarkIcon strokeColor="#294290"/>}
          </div>
          <RichText align="left" trustedHtml={serviceModule.name}/>
      </div>
  );
}
