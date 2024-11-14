"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {cloudinary} from "@/lib/cloudinary";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {AdvancedImage} from '@cloudinary/react';

const imagePath = 'dinoplan/Dinoplan_Final_Files_Footer_cropped_gcfull_pf7xn0';

export default function FooterImage() {
    return (
        <FooterImageContainer>
            <AdvancedImage className="w-[1150px] h-auto pointer-events-none mt-[calc(-1*var(--spacing-footer-image-currection))]"
                           cldImg={cloudinary.image(imagePath).resize(scale().width(1150))} />
        </FooterImageContainer>
    );
}

function FooterImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full h-[392px] flex justify-center">
            {children}
        </div>
    );
}