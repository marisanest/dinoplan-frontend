import Text from "@/components/text/text";
import { DateInput } from 'rsuite';

export default function CalculatorInfoFormChildDateOfBirthInput({customer, state}) {
    return (
        <div className="ss:grid ss:grid-cols-[160px_1fr] ss:gap-x-[2rem] ss:gap-y-[0.4rem]">
            <Text className="pb-[8px] ss:pt-0" align="left" size="lg">
                Geburtsdatum
            </Text>

            <DateInput name="childDateOfBirth" format="dd.MM.yyyy" defaultValue={new Date(customer.childDateOfBirth)} />

            {state?.errors?.childDateOfBirth && <div className="pt-[8px] ss:pt-0"/>}
            {
                state?.errors?.childDateOfBirth?.map((error) => (
                    <Text key={error} className="text-red-500" align="left" size="sm">
                        {error}
                    </Text>
                ))
            }
        </div>
    );
}
