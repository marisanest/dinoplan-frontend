"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {AdvancedImage} from "@cloudinary/react";
import cn from "clsx";
import {cloudinary} from "@/lib/cloudinary";

const imagePath = 'dinoplan/Dinoplan_Final_Files_Footer_gcfull';

export default function FooterImage() {
    return (
        <LandingFaqImageContainer>
            <AdvancedImage className={cn('w-[100%] max-w-[2000px] h-auto')} cldImg={cloudinary.image(imagePath)} />
        </LandingFaqImageContainer>
    );
}

function LandingFaqImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center items-center pointer-events-none">
            <div className="w-[100dvw-16rem] max-w-[1100px]">{children}</div>
        </div>
    );
}