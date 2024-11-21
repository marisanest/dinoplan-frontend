"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {cloudinary} from "@/lib/cloudinary";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {AdvancedImage} from '@cloudinary/react';

const imagePath = 'dinoplan/Dinoplan_Final_Files_Footer_cropped_gcfull_pf7xn0';

export default function FooterImage() {
    return (
        <FooterImageContainer>
            <AdvancedImage className="min-w-footer-image w-footer-image h-footer-image pointer-events-none"
                           cldImg={cloudinary.image(imagePath).resize(scale().width(1150))} />
        </FooterImageContainer>
    );
}

function FooterImageContainer({children}: ReactNodeProps) {
    return (
        <div className="relative z-10 w-full h-footer-image flex justify-center mt-[calc(-1*var(--spacing-footer-image-currection))] pointer-events-none">
            {children}
        </div>
    );
}