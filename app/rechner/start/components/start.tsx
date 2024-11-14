import CalculatorStartForm from "@/rechner/start/components/form";
import Title from "@/components/title";
import Text from "@/components/text/text";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorStart() {
    return (
       <CalculatorStartContainer>
           <Title>Jetzt Beitrag berechnen</Title>
           <Text className="pt-[0.5rem]"
                 size="sm">
               Mache eine Beispielrechnung, um zu sehen, wie viel dein
           </Text>
           <Text className="pb-y-xs"
                 size="sm">
               individuelles Paket monatlich ungefähr kosten würde.
           </Text>

           <CalculatorStartForm/>
       </CalculatorStartContainer>
    );
}

function CalculatorStartContainer({children}: ReactNodeProps) {
    return (
        <main className="w-full min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image))] flex justify-center pt-[9rem] bg-orange-400">
            <div className="w-sm max-w-sm min-h-[calc(100dvh-var(--height-footer-image)-var(--height-banner)-var(--height-banner)-var(--spacing-y-m)+var(--spacing-footer-image-currection))] flex flex-col items-center justify-center px-x-sm py-y-sm bg-orange-200 rounded-bl-[50px] rounded-tr-[50px]">
                {children}
            </div>
        </main>
    );
}