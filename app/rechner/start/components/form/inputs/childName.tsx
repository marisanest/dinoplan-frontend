import Button from "@/components/buttons";
import Text from "@/components/text/text";
import {CreateCustomerState} from "@/rechner/start/actions/createCustomer";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorStartFormChildNameInput({state}: { state: CreateCustomerState }) {
    return (
        <CalculatorStartFormChildNameInputContainer>
            <Button className="!cursor-default hover:!bg-orange hover:!border-orange"
                    size="sm"
                    colors="orange">

                <Text color="yellow">Starte hier</Text>
            </Button>

            <input type="text"
                   id="childName"
                   name="childName"
                   placeholder="Name deines Kindes"
                   className="w-full text-left px-[1rem] text-blue-600 border-[2px] border-blue-600-faded focus:border-blue bg-yellow-100" />

            {state?.errors?.childName && (
                <>
                    <div/>
                    {
                        state?.errors?.childName?.map((error: string) => (
                            <Text key={error} className="text-red-500" align="left" size="sm">
                                {error}
                            </Text>
                        ))
                    }
                </>
            )}
        </CalculatorStartFormChildNameInputContainer>
    );
}

function CalculatorStartFormChildNameInputContainer({children}: ReactNodeProps) {
    return (
        <div className="grid grid-cols-[160px_3fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs min-w-full w-full">
            {children}
        </div>
    );
}
