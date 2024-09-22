"use client";

import {ReactNodeProps} from "@/lib/types/core";
import {LandingKeyPointsPointProps} from "@/app/(landing)/keyPoints/point/index";
import {cloudinary} from "@/lib/cloudinary";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {AdvancedImage} from "@cloudinary/react";

export default function LandingKeyPointsPointImage({point}: LandingKeyPointsPointProps) {
    const myImage = cloudinary.image(point.image);
    myImage.resize(scale().width(2833)); // todo

    return (
        <LandingKeyPointsPointImageContainer>
            <AdvancedImage cldImg={myImage}/>
        </LandingKeyPointsPointImageContainer>
    );
}

function LandingKeyPointsPointImageContainer({children}: ReactNodeProps) {
    return (
        <div className="px-x-xs">
            {children}
        </div>
    );
}
