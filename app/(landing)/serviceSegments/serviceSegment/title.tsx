import {LandingServiceSegmentProps} from "@/(landing)/serviceSegments/serviceSegment/index";
import Title from "@/components/title";

export default function LandingServiceSegmentTitle({serviceSegment}: LandingServiceSegmentProps) {
    return (
        <Title className="cursor-pointer mt-auto" size="md">
            {serviceSegment.dinoPrefix}-Dino
        </Title>
    );
}
