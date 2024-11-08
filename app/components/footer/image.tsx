"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {AdvancedImage} from "@cloudinary/react";
import {cloudinary} from "@/lib/cloudinary";
import {scale} from "@cloudinary/url-gen/actions/resize";

const imagePath = 'dinoplan/Dinoplan_Final_Files_Footer_cropped_gcfull_pf7xn0';

export default function FooterImage() {
    return (
        <FooterImageContainer>
            <AdvancedImage className="w-full max-w-[1150px] h-auto pointer-events-none mt-[-95px] sm:mt-[calc(-1*var(--spacing-footer-image-currection))]"
                           cldImg={cloudinary.image(imagePath).resize(scale().width(1150))} />
        </FooterImageContainer>
    );
}

function FooterImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-[200%] sm:w-full ml-[-50%] sm:ml-0 flex justify-center items-center pointer-events-none">
            {children}
        </div>
    );
}