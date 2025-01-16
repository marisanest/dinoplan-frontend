import LandingServiceModulesExample from "@/(landing)/serviceModules/example";
import LandingServiceModulesButtons from "@/(landing)/serviceModules/buttons";
import LandingServiceModulesTitle from "@/(landing)/serviceModules/title";
import LandingServiceModulesCalculateButton from "@/(landing)/serviceModules/calculateButton";

export default function LandingServiceModules() {
    return (
        <div className="w-full flex justify-center px-x-outer pb-y-block">
            <div className="w-full max-w-sm flex flex-col items-center">
                <LandingServiceModulesTitle key="title"/>
                <LandingServiceModulesButtons key="buttons"/>
                <LandingServiceModulesExample key="example"/>
                <LandingServiceModulesCalculateButton key="calculate-button" />
            </div>
        </div>
    );
}