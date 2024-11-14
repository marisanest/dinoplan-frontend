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
        <main className="w-full min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image))] flex justify-center pt-[9rem] bg-orange-400">
            <div className="bg-orange-200 rounded-bl-[50px] rounded-tr-[50px] px-x-sm py-y-sm w-sm max-w-sm ">
                {children}
            </div>
        </main>
    );
}