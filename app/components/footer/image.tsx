"use client"

import {ReactNodeProps} from "@/lib/types/core";
import {cloudinary} from "@/lib/cloudinary";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {AdvancedImage} from '@cloudinary/react';
import {usePathname} from "next/navigation";
import cn from "clsx";

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
    const pathname = usePathname()
    return (
        <div className={cn("relative z-10 max-w-[100dvw] max-h-footer-image overflow-hidden flex justify-center mt-[calc(-1*var(--spacing-footer-image-currection))] pointer-events-none", pathname === '/' || pathname.includes('rechner') ? '' : 'bg-orange-300')}>
            {children}
        </div>
    );
}