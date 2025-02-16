import Text from "@/components/text/text";

export default function CalculatorInfoFormEmailInput({customer, state}) {
    return (
        <CalculatorInfoFormEmailInputContainer>
            <Text className="pb-[8px] ss:pt-0" align="left" size="lg">
                E-Mail-Adresse
            </Text>

            <input type="text"
                   id="email"
                   name="email"
                   placeholder="E-Mail-Adresse"
                   defaultValue={customer.email}
                   className="h-[55px] w-full text-left px-[1rem] !rounded-none text-blue-600 border-[2px] border-blue-600-faded focus:border-blue bg-yellow-100" />

            {state?.errors?.email && <div className="pt-[8px] ss:pt-0"/>}
            {
                state?.errors?.email?.map((error) => (
                    <Text key={error} className="text-red-500" align="left" size="sm">
                        {error}
                    </Text>
                ))
            }
        </CalculatorInfoFormEmailInputContainer>
    );
}

function CalculatorInfoFormEmailInputContainer({children}) {
    return (
        <div className="ss:grid ss:grid-cols-[160px_1fr] ss:gap-x-[2rem] ss:gap-y-[0.4rem] mb-y-xs">
            {children}
        </div>
    );
}
