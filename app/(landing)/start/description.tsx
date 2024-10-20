import {ReactNodeProps} from "@/lib/types/core";
import {PortableText} from "next-sanity";
import {LandingProps} from "@/(landing)/landing";
import CheckmarkDot from "@/components/checkmarkDot";
import RichText from "@/components/text";

export default function LandingStartDescription({startPageSection, serviceSegmentsPageSection}: Pick<LandingProps, 'startPageSection' & 'serviceSegmentsPageSection'>) {
    return (
        <LandingStartDescriptionContainer>
            <div className="border-b-[2px] border-b-red-200 pb-[0.8rem] text-center w-[600px] font-normal text-lg">
                <PortableText value={startPageSection?.subTitle}/>
            </div>
            <div className="flex justify-between gap-6 pt-2">
                {serviceSegmentsPageSection.serviceSegments.map((serviceSegment) => (
                    <div key={serviceSegment.serviceSegment._id} className="flex gap-[0.5rem] h-fit items-center">
                        <CheckmarkDot className="bg-none border-blue-600" strokeColor="#294290" />
                        <RichText trustedHtml={serviceSegment.serviceSegment.name} />
                    </div>
                ))}
            </div>
        </LandingStartDescriptionContainer>
    );
}

function LandingStartDescriptionContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center">
        <div className="text-blue-600 text-lg font-light h-[15dvh] w-[600px]">
                {children}
            </div>
        </div>
    );
}
