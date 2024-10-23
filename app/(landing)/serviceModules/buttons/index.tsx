import {ReactNodeProps} from "@/lib/types/core";
import LandingServiceModulesButton from "@/(landing)/serviceModules/buttons/button";
import {LandingProps} from "@/(landing)/landing";

export default function LandingServiceModulesButtons({serviceModulesPageSection}: Pick<LandingProps, 'serviceModulesPageSection'>) {
    return (
        <LandingServiceModulesButtonsContainer>
            {serviceModulesPageSection.serviceModules?.map((serviceModule) => (
                <LandingServiceModulesButton key={serviceModule.serviceModule._id} serviceModule={serviceModule.serviceModule} />
            ))}
        </LandingServiceModulesButtonsContainer>
    );
}

function LandingServiceModulesButtonsContainer({children}: ReactNodeProps) {
    return (
        <div className="pt-y-s flex flex-wrap gap-y-[0.5rem] gap-x-[0.25rem] sm:gap-[0.8rem] justify-center">
            {children}
        </div>
    );
}
