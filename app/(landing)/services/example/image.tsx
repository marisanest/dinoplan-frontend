import {ReactNodeProps, ServiceType} from "@/lib/types/core";
import {AdvancedImage} from "@cloudinary/react";
import cn from "clsx";
import {cloudinary} from "@/lib/cloudinary";

export type LandingServicesExampleImageProps = {
    service: ServiceType;
}

const segmentToImage = {
    'Sparen': 'dinoplan/Dinoplan_Final_Files_Dino_Savings_cropped_egaqfj_22f51c',
    'Ernstfallabsicherung': 'dinoplan/Dinoplan_Final_Files_Dino_Super_cropped_b87i7p_3b12e1',
    'Zusatzversicherungen': 'dinoplan/Dinoplan_Final_Files_Dino_Caring_cropped_iprhz3_90d2ee',
}

export default function LandingServicesExampleImage({service}: LandingServicesExampleImageProps) {
    const cldImg = cloudinary.image(segmentToImage[service.segment]);

    return (
        <LandingServicesExampleImageContainer>
            <AdvancedImage className={cn('w-full', 'max-w-[250px]')} cldImg={cldImg}/>
        </LandingServicesExampleImageContainer>
    );
}

function LandingServicesExampleImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full h-full flex justify-center items-center mt-2">
            {children}
        </div>
    );
}
