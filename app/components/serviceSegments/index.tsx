import Title from "@/components/title";
import Text from "@/components/text/text";
import ServiceSegmentsContainer from "@/components/serviceSegments/container";
import ServiceSegmentsGrid from "@/components/serviceSegments/grid";
import ServiceSegmentsCarousel from "@/components/serviceSegments/carousel";

type ServiceSegmentsProps = {
    title: string;
    description: string;
}

export default function ServiceSegments({title, description}: ServiceSegmentsProps) {
    return (
        <ServiceSegmentsContainer>
            <Title>{title}</Title>
            <Text className="mb-y-xs mt-[0.5rem]" size="sm">{description}</Text>

            <ServiceSegmentsGrid />
            <ServiceSegmentsCarousel />
        </ServiceSegmentsContainer>
    );
}