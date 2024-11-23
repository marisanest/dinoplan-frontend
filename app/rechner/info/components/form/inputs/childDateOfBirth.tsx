import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Text from "@/components/text/text";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorInfoFormChildDateOfBirthInput({customer, state}) {
    return (
        <CalculatorInfoFormChildDateOfBirthInputContainer>
            <Text className="pb-[8px] ss:pt-0" align="left" size="lg">
                Geburtsdatum
            </Text>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateField className="w-full"
                           name="childDateOfBirth"
                           label="Geburtsdatum des Kindes"
                           defaultValue={customer.childDateOfBirth ? new Date(customer.childDateOfBirth) : null}/>
            </LocalizationProvider>

            {state?.errors?.childDateOfBirth && <div className="pt-[8px] ss:pt-0"/>}
            {
                state?.errors?.childDateOfBirth?.map((error) => (
                    <Text key={error} className="text-red-500" align="left" size="sm">
                        {error}
                    </Text>
                ))
            }
        </CalculatorInfoFormChildDateOfBirthInputContainer>
    );
}

function CalculatorInfoFormChildDateOfBirthInputContainer({children}: ReactNodeProps) {
    return (
        <div className="ss:grid ss:grid-cols-[160px_1fr] ss:gap-x-[2rem] ss:gap-y-[0.4rem]">
            {children}
        </div>
    );
}