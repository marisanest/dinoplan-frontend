import {ReactNodeProps} from "@/lib/types/core";
import {PortableText} from "next-sanity";
import {LandingProps} from "@/(landing)/landing";
import CheckmarkDot from "@/components/checkmarkDot";
import Text from "@/components/text/text";

export default function LandingStartDescription({startPageSection, serviceSegmentsPageSection}: Pick<LandingProps, 'startPageSection' | 'serviceSegmentsPageSection'>) {
    return (
        <LandingStartDescriptionContainer>
            <Text key="sub-title">
                <PortableText value={startPageSection?.subTitle}/>
            </Text>
            <hr className="border-[1px] border-red-200"/>
            <div className="flex justify-between gap-[2rem]">
                {serviceSegmentsPageSection.serviceSegments.map((serviceSegment) => (
                    <div key={serviceSegment.serviceSegment._id} className="flex items-center gap-[0.5rem]">
                        <CheckmarkDot className="bg-none border-blue-600" strokeColor="#294290"/>
                        <Text>
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
        <div className="w-full flex justify-center pb-[5rem]">
            <div className="h-[6rem] flex flex-col justify-between">
                {children}
            </div>
        </div>
    );
}
