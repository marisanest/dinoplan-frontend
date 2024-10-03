"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {AdvancedImage} from "@cloudinary/react";
import cn from "clsx";
import {cloudinary} from "@/lib/cloudinary";

export default function LandingAboutBoxImage() {
    const cldImg = cloudinary.image('dinoplan/Dinoplan_Final_Files_buvcau');

    return (
        <LandingAboutBoxImageContainer>
            <AdvancedImage className={cn('w-full h-auto')} cldImg={cldImg} />
        </LandingAboutBoxImageContainer>
    );
}

function LandingAboutBoxImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            {children}
        </div>
    );
}