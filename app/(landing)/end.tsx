"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {AdvancedImage} from "@cloudinary/react";
import {cloudinary} from "@/lib/cloudinary";

const imagePath = 'dinoplan/Dinoplan_Final_Files_Footer_cropped_gcfull_pf7xn0';

export default function LandingEnd() {
    return (
        <LandingEndContainer>
            <AdvancedImage className="w-full max-w-[1500px] h-auto pointer-events-none mt-[-50px]"
                           cldImg={cloudinary.image(imagePath)} />
        </LandingEndContainer>
    );
}

function LandingEndContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center items-center pointer-events-none">
            {children}
        </div>
    );
}