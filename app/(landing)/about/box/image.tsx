import {ReactNodeProps} from "@/lib/types/core";
import {LandingProps} from "@/(landing)/landing";
import {urlFor} from "@/lib/sanity/image";
import Image from "next/image";

export default function LandingAboutBoxImage({aboutPageSection}: Pick<LandingProps, 'aboutPageSection'>) {
    return (
        <LandingAboutBoxImageContainer>
            <Image
                src={urlFor(aboutPageSection.illustration)?.url()}
                alt="Illustration"
                className="max-w-[300px] w-full h-auto px-[2rem] ss:px-0 pt-y-paragraph ss:pt-y-0"
                width={aboutPageSection.illustration.width}
                height={aboutPageSection.illustration.height}
            />
        </LandingAboutBoxImageContainer>
    );
}

function LandingAboutBoxImageContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full h-fit ss:h-full flex justify-center ss:justify-end items-center">
            {children}
        </div>
    );
}