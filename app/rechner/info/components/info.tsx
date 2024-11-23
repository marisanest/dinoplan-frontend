import CalculatorInfoForm from "@/rechner/info/components/form";
import Title from "@/components/title";
import Text from "@/components/text/text";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorInfo({customer}: {customer: any}) {
    return (
        <CalculatorInfoContainer>
            <Title>Weitere Informationen</Title>
            <Text className="mb-y-xs mt-[0.5rem]" size="sm">
                Zu deinem Kind und dir
            </Text>

            <CalculatorInfoForm customer={customer}/>
        </CalculatorInfoContainer>
    );
}


function CalculatorInfoContainer({children}: ReactNodeProps) {
    return (
        <main className="w-full min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image)+var(--spacing-footer-image-currection))] flex flex-col items-center px-x-s xs:px-x-sm sm:px-0 pt-[calc(var(--height-banner)+var(--spacing-y-sm))] bg-orange-400">
            <div className="grow w-full max-w-sm px-x-xs ss:px-x-s s:px-x-sm py-y-sm bg-orange-200 rounded-bl-md rounded-tr-md">
                {children}
            </div>
        </main>
    );
}