import Title from "@/components/title";
import Text from "@/components/text/text";
import ServiceSegmentsContainer from "@/components/serviceSegments/container";
import ServiceSegmentsGrid from "@/components/serviceSegments/grid";
import ServiceSegmentsCarousel from "@/components/serviceSegments/carousel";
import {PortableText} from "next-sanity";
import {ReactNodeProps} from "@/lib/types/core";
import {PortableTextBlock} from "@portabletext/types";

type ServiceSegmentsProps = {
    title: string | PortableTextBlock | undefined;
    description: string | PortableTextBlock | undefined;
    bgColor?: string;
} & ReactNodeProps;

export default function ServiceSegments({className, title, description, bgColor = 'bg-yellow-100'}: ServiceSegmentsProps) {
    return (
        <ServiceSegmentsContainer className={className} bgColor={bgColor}>
            <Title className="max-w-text">
                {title && (typeof title === 'string' ? title : <PortableText value={title}/>)}
            </Title>
            <Text className="max-w-text pb-y-[30px] xs:pb-y-s pt-[10px]" size="sm">
                {description && (typeof description === 'string' ? description : <PortableText value={description}/>)}
            </Text>

            <ServiceSegmentsGrid />
            <ServiceSegmentsCarousel />
        </ServiceSegmentsContainer>
    );
}