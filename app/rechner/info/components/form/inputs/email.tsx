import Text from "@/components/text/text";

export default function CalculatorInfoFormEmailInput({customer, state}) {
    return (
        <CalculatorInfoFormEmailInputContainer>
            <Text align="left" size="lg">
                E-Mail-Adresse
            </Text>

            <input type="text"
                   id="email"
                   name="email"
                   placeholder="E-Mail-Adresse"
                   defaultValue={customer.email}
                   className="h-[55px] w-full text-left px-[1rem] text-blue-600 border-[2px] border-blue-600-faded focus:border-blue bg-yellow-100" />

            {state?.errors?.email && (
                <>
                    <div/>
                    {
                        state?.errors?.email?.map((error) => (
                            <Text key={error} className="text-red-500" align="left" size="sm">
                                {error}
                            </Text>
                        ))
                    }
                </>
            )}

            <div/>

            <Text align="left" size="xs">
                Optional. Wenn du möchtest, dass wir deine Angaben bei einem Beratungsgespräch mit dir verbinden
                können, gebe bitte deine E-Mail Adresse an.
            </Text>
        </CalculatorInfoFormEmailInputContainer>
    );
}

function CalculatorInfoFormEmailInputContainer({children}) {
    return (
        <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
            {children}
        </div>
    );
}
