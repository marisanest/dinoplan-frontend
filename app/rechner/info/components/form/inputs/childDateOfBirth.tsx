import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Text from "@/components/text/text";

export default function CalculatorInfoFormChildDateOfBirthInput({customer, state}) {
    return (
        <CalculatorInfoFormChildDateOfBirthInputContainer>
            <Text align="left" size="lg">
                Geburtsdatum
            </Text>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateField name="childDateOfBirth"
                           label="Geburtsdatum des Kindes"
                           defaultValue={new Date(customer.childDateOfBirth)}/>
            </LocalizationProvider>

            {state?.errors?.childDateOfBirth && (
                <>
                    <div/>
                    {
                        state?.errors?.childDateOfBirth?.map((error) => (
                            <Text key={error} className="text-red-500" align="left" size="sm">
                                {error}
                            </Text>
                        ))
                    }
                </>
            )}
        </CalculatorInfoFormChildDateOfBirthInputContainer>
    );
}

function CalculatorInfoFormChildDateOfBirthInputContainer({children}) {
    return (
        <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-[2rem]">
            {children}
        </div>
    );
}