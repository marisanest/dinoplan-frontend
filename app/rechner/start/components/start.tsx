import CalculatorStartForm from "@/rechner/start/components/form";
import Title from "@/components/title";
import Text from "@/components/text/text";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorStart() {
    return (
       <CalculatorStartContainer>
           <Title>Jetzt Beitrag berechnen</Title>
           <Text className="pb-y-section pt-[0.5rem]" size="sm">
               <p className="ss:max-w-[65%]">
                   Mache eine Beispielrechnung, um zu sehen, wie viel dein individuelles Paket monatlich ungefähr kosten würde.
               </p>
           </Text>

           <CalculatorStartForm/>
       </CalculatorStartContainer>
    );
}

function CalculatorStartContainer({children}: ReactNodeProps) {
    return (
        <main className="min-w-[100dvw] w-[100dvw] max-w-[100dvw] overflow-x-hidden flex justify-center pt-banner bg-orange-400">
            <div className="w-full flex justify-center px-x-outer pt-y-block">
                <div className="w-full max-w-sm min-h-[calc(100dvh-var(--height-footer-image)-var(--height-banner)-var(--height-banner)-var(--spacing-y-block)+var(--spacing-footer-image-currection))] flex flex-col justify-center py-y-section px-x-s bg-orange-200 rounded-bl-md rounded-tr-md">
                    {children}
                </div>
            </div>
        </main>
    );
}