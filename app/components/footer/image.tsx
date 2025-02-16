"use client"

import {cloudinary} from "@/lib/cloudinary";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {AdvancedImage} from '@cloudinary/react';

export const FOOTER_IMAGE_PATH = 'dinoplan/Dinoplan_Final_Files_Footer_cropped_gcfull_pf7xn0';

export default function FooterImage() {
    return (
        <div className="relative z-10 max-w-[100dvw] max-h-footer-image overflow-hidden flex justify-center mt-[calc(-1*var(--spacing-footer-image-correction))] pointer-events-none">
            <AdvancedImage className="min-w-footer-image w-footer-image h-footer-image pointer-events-none"
                           cldImg={cloudinary.image(FOOTER_IMAGE_PATH).resize(scale().width(1150))} />
        </div>
    );
}