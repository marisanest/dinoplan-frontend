import Title from "@/app/components/title";
import Description from "@/app/components/description";
import {PortableText} from "next-sanity";
import LandingServiceSegmentsContainer from "@/app/(landing)/serviceSegments/container";
import LandingServiceSegmentsTopContainer from "@/app/(landing)/serviceSegments/topContainer";
import LandingServiceSegment from "@/(landing)/serviceSegments/serviceSegment";
import LandingServiceSegmentsDescription from "@/app/(landing)/serviceSegments/serviceSegment/description";
import {LandingProps} from "@/(landing)/landing";

export default function LandingServiceSegments({serviceSegmentsPageSection}: Pick<LandingProps, 'serviceSegmentsPageSection'>) {
    if (!serviceSegmentsPageSection) return null;

    return (
        <LandingServiceSegmentsContainer>
            <LandingServiceSegmentsTopContainer key="top">
                <Title key="title">
                    <PortableText value={serviceSegmentsPageSection.title}/>
                </Title>
                <Description className="mt-y-xs">
                    <PortableText value={serviceSegmentsPageSection.description}/>
                </Description>
                <div className="w-full grid grid-cols-3 justify-between gap-[4rem] mt-y-s">
                    {serviceSegmentsPageSection.serviceSegments?.map((serviceSegment, index) => (
                        <LandingServiceSegment
                            key={serviceSegment.serviceSegment?._id}
                            className={index === 1 ? 'mx-auto' : (index === 2 ? 'ml-auto' : '')}
                            serviceSegment={serviceSegment.serviceSegment} />
                    ))}
                </div>
            </LandingServiceSegmentsTopContainer>
            <LandingServiceSegmentsDescription key="bottom" />
        </LandingServiceSegmentsContainer>
    );
}
