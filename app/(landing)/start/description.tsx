import {ReactNodeProps} from "@/lib/types/core";
import {PortableText} from "next-sanity";
import {LandingProps} from "@/(landing)/landing";
import CheckmarkDot from "@/components/checkmarkDot";
import Text from "@/components/text/text";

export default function LandingStartDescription({startPageSection, serviceSegmentsPageSection}: Pick<LandingProps, 'startPageSection' | 'serviceSegmentsPageSection'>) {
    return (
        <LandingStartDescriptionContainer>
            <Text key="sub-title" className="sm:justify-center sm:text-center" size="lg" align="right">
                <PortableText value={startPageSection?.subTitle}/>
            </Text>
            <hr key="line" className="hidden sm:block border border-red-200"/>
            <div className="border-l-[2px] border-red-200 sm:hidden" />
            <div key="key-points" className="flex flex-col justify-center sm:flex-row sm:justify-between gap-[0.25rem] xs:gap-[0.5rem] sm:gap-[1rem]">
                {serviceSegmentsPageSection.serviceSegments.map((serviceSegment) => (
                    <div key={serviceSegment.serviceSegment._id} className="flex items-center gap-[0.5rem]">
                        <CheckmarkDot key="checkmark" className="bg-none border-blue-600" strokeColor="#294290"/>
                        <Text key="name" className="sm:items-center sm:justify-center sm:text-center" size="lg" align="left">
                            {serviceSegment.serviceSegment.name}
                        </Text>
                    </div>
                ))}
            </div>
        </LandingStartDescriptionContainer>
    );
}

function LandingStartDescriptionContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center mt-auto">
            <div className="grid grid-cols-[1fr_2px_1fr] gap-[0.6rem] sm:gap-[0.5rem] sm:flex sm:flex-col">
                {children}
            </div>
        </div>
    );
}
