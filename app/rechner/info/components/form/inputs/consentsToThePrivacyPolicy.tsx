import Text from "@/components/text/text";
import InternalLink from "@/components/link/internal";
import {ReactNodeProps} from "@/lib/types/core";

export default function CalculatorInfoFormConsentsToThePrivacyPolicyInput({customer}) {
    return (
        <CalculatorInfoFormConsentsToThePrivacyPolicyInputContainer>
            <div/>
            <div className="flex gap-[1rem]">
                <input type="checkbox"
                       id="consentsToThePrivacyPolicy"
                       className="!rounded-none"
                       name="consentsToThePrivacyPolicy"
                       defaultChecked={customer.consentsToThePrivacyPolicy}/>

                <Text align="left" size="xs">
                    <div>
                        Hiermit bestätigst du, dass wir deine Angaben speichern und bei einem Beratungsgespräch
                        nutzen dürfen. Mehr dazu findest du unter <InternalLink className="underline" href="/datenschutz">Datenschutz</InternalLink>.
                    </div>
                </Text>
            </div>
        </CalculatorInfoFormConsentsToThePrivacyPolicyInputContainer>
    );
}

function CalculatorInfoFormConsentsToThePrivacyPolicyInputContainer({children}: ReactNodeProps) {
    return (
        <div className="ss:grid ss:grid-cols-[160px_1fr] ss:gap-x-[2rem] ss:gap-y-[0.4rem] mb-y-xs">
            {children}
        </div>
    );
}