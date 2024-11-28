import Title from "@/components/title";
import Text from "@/components/text/text";
import ServiceSegmentsContainer from "@/components/serviceSegments/container";
import ServiceSegmentsGrid from "@/components/serviceSegments/grid";
import ServiceSegmentsCarousel from "@/components/serviceSegments/carousel";
import {PortableText} from "next-sanity";
import {ReactNodeProps} from "@/lib/types/core";

type ServiceSegmentsProps = {
    title: string | any;
    description: string | any;
} & ReactNodeProps;

export default function ServiceSegments({className, title, description}: ServiceSegmentsProps) {
    return (
        <ServiceSegmentsContainer className={className}>
            <Title>
                <PortableText value={title}/>
            </Title>
            <Text className="pb-y-[30px] xs:pb-y-s pt-[10px]" size="sm">
                <PortableText value={description}/>
            </Text>

            <ServiceSegmentsGrid />
            <ServiceSegmentsCarousel />
        </ServiceSegmentsContainer>
    );
}