import Title from "@/app/components/title";
import {PortableText} from "next-sanity";
import LandingServiceSegmentsContainer from "@/app/(landing)/serviceSegments/container";
import LandingServiceSegmentsTopContainer from "@/app/(landing)/serviceSegments/topContainer";
import LandingServiceSegment from "@/(landing)/serviceSegments/serviceSegment";
import {LandingProps} from "@/(landing)/landing";
import Text from "@/components/text/text";
import LandingServiceSegmentDetail from "@/(landing)/serviceSegments/serviceSegment/detail";

export default function LandingServiceSegments({serviceSegmentsPageSection}: Pick<LandingProps, 'serviceSegmentsPageSection'>) {
    if (!serviceSegmentsPageSection) return null;

    return (
        <LandingServiceSegmentsContainer>
            <LandingServiceSegmentsTopContainer key="main">
                <Title key="title">
                    <PortableText value={serviceSegmentsPageSection.title}/>
                </Title>
                <Text key="description" className="mt-y-xs" size="sm">
                    <PortableText value={serviceSegmentsPageSection.description}/>
                </Text>
                <div className="w-full grid grid-cols-3 justify-between gap-[1.5rem] sm:gap-[4rem] mt-y-s">
                    {serviceSegmentsPageSection.serviceSegments?.map((serviceSegment, index) => (
                        <LandingServiceSegment
                            key={serviceSegment.serviceSegment?._id}
                            className={index === 1 ? 'mx-auto' : (index === 2 ? 'ml-auto' : '')}
                            serviceSegment={serviceSegment.serviceSegment} />
                    ))}
                </div>
            </LandingServiceSegmentsTopContainer>
            <LandingServiceSegmentDetail key="detail" />
        </LandingServiceSegmentsContainer>
    );
}
