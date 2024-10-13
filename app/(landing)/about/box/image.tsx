import {ReactNodeProps} from "@/lib/types/core";
import {LandingProps} from "@/(landing)/landing";
import {urlFor} from "@/lib/sanity/image";
import Image from "next/image";

export default function LandingAboutBoxImage({aboutPageSection}: Pick<LandingProps, 'aboutPageSection'>) {
    return (
        <LandingAboutBoxImageContainer>
            <Image
                src={urlFor(aboutPageSection.illustration)?.url()}
                alt="Wir sind Dinoplan"
                className="w-full h-auto"
                height="310"
                width="250"
            />
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