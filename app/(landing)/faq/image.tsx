"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {AdvancedImage} from "@cloudinary/react";
import cn from "clsx";
import {cloudinary} from "@/lib/cloudinary";
import {LandingProps} from "@/(landing)/landing";

const imagePath = 'dinoplan/Dinoplan_Final_Files_Questions_People_Have_qmn1ep';

export default function LandingFaqImage({faqPageSection}: Pick<LandingProps, 'faqPageSection'>) {
    return (
        <LandingFaqImageContainer>
            <AdvancedImage className={cn('w-[45%] h-auto')} cldImg={cloudinary.image(imagePath)} />
        </LandingFaqImageContainer>
    );
}

function LandingFaqImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center items-center">
            {children}
        </div>
    );
}