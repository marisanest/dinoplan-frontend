"use client"
import {ReactNodeProps} from "@/lib/types/core";

import {AdvancedImage} from '@cloudinary/react';
import {cloudinary} from "@/lib/cloudinary";
import {scale} from "@cloudinary/url-gen/actions/resize";

export default function LandingStartBackground() {
    const myImage = cloudinary.image('dinoplan/Dinoplan_Final_Files_Header_cropped_n7ud0a_434a17');
    myImage.resize(scale().width(2833));

    return (
        <LandingStartBackgroundContainer>
            <AdvancedImage className="ml-auto max-h-[75vh] w-auto" cldImg={myImage}/>
        </LandingStartBackgroundContainer>
    );
}

function LandingStartBackgroundContainer({children}: ReactNodeProps) {
    return (
        <div className="absolute right-0 left-0 top-0 bottom-0 px-20 pt-20 flex flex-col items-center">
            {children}
        </div>
    );
}
