import Text from "@/components/text/text";
import InternalLink from "@/components/link/internal";

export default function CalculatorInfoFormConsentsToThePrivacyPolicyInput({customer}) {
    return (
        <div className="grid grid-cols-[160px_1fr] gap-x-[2rem] gap-y-[0.4rem] mb-y-xs">
            <div/>
            <div className="flex gap-[1rem]">
                <input type="checkbox"
                       id="consentsToThePrivacyPolicy"
                       name="consentsToThePrivacyPolicy" defaultChecked={customer.consentsToThePrivacyPolicy}/>
                <Text align="left" size="xs">
                    <div>
                        Hiermit bestätigst du, dass wir deine Angaben speichern und bei einem Beratungsgespräch
                        nutzen dürfen. Mehr dazu findest du unter <InternalLink className="underline" href="/datenschutz">Datenschutz</InternalLink>.
                    </div>
                </Text>
            </div>
        </div>
    );
}
