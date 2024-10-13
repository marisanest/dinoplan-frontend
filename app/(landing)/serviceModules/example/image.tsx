import {ArrayElement, ReactNodeProps, ServiceType} from "@/lib/types/core";
import {AdvancedImage} from "@cloudinary/react";
import cn from "clsx";
import {cloudinary} from "@/lib/cloudinary";
import {SERVICE_MODULES_QUERYResult} from "@/lib/types/sanity-types";

export type LandingServiceModulesExampleImageProps = {
    serviceModule: ArrayElement<SERVICE_MODULES_QUERYResult>;
}

const serviceModuleTypeToIllustration = {
    'Sparen': 'dinoplan/Dinoplan_Final_Files_Dino_Savings_cropped_egaqfj_22f51c',
    'Ernstfallabsicherung': 'dinoplan/Dinoplan_Final_Files_Dino_Super_cropped_b87i7p_3b12e1',
    'Zusatzversicherungen': 'dinoplan/Dinoplan_Final_Files_Dino_Caring_cropped_iprhz3_90d2ee',
}

export default function LandingServiceModulesExampleImage({serviceModule}: LandingServiceModulesExampleImageProps) {
    const cldImg = cloudinary.image(serviceModuleTypeToIllustration[serviceModule.type]);

    return (
        <LandingServiceModulesExampleImageContainer>
            <AdvancedImage className={cn('w-full', 'max-w-[250px]')} cldImg={cldImg}/>
        </LandingServiceModulesExampleImageContainer>
    );
}

function LandingServiceModulesExampleImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full h-full flex justify-center items-center mt-2">
            {children}
        </div>
    );
}
