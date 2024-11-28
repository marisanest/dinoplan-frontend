import Button from "@/components/buttons";
import Text from "@/components/text/text";
import {CreateCustomerState} from "@/rechner/start/actions/createCustomer";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorStartFormChildNameInput({state}: { state: CreateCustomerState }) {
    return (
        <CalculatorStartFormChildNameInputContainer>
            <Button className="hidden ss:inline-block !cursor-default hover:!bg-orange hover:!border-orange"
                    size="sm"
                    colors="orange">

                <Text color="yellow">Starte hier</Text>
            </Button>

            <input type="text"
                   id="childName"
                   name="childName"
                   placeholder="Name deines Kindes"
                   className="w-full h-[48px] text-left px-[1rem] text-blue-600 border-[2px] border-blue-600-faded focus:border-blue bg-yellow-100" />

            {state?.errors?.childName && <div className="pt-[8px] ss:pt-0"/>}
            {state?.errors?.childName && (
                state?.errors?.childName?.map((error: string) => (
                    <Text key={error} className="text-red-500" align="left" size="sm">
                        {error}
                    </Text>
                ))
            )}
        </CalculatorStartFormChildNameInputContainer>
    );
}

function CalculatorStartFormChildNameInputContainer({children}: ReactNodeProps) {
    return (
        <div className="ss:grid ss:grid-cols-[160px_3fr] ss:gap-x-[2rem] ss:gap-y-[0.4rem] pb-y-paragraph">
            {children}
        </div>
    );
}
