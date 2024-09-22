import {KeyPointType, ReactNodeProps} from "@/lib/types/core";
import LandingKeyPointsPointImage from "@/app/(landing)/keyPoints/point/image";

export type LandingKeyPointsPointProps = {
    point: KeyPointType
}

export default function LandingKeyPointsPoint({point}: LandingKeyPointsPointProps) {
    return (
        <LandingKeyPointsPointContainer key={point.id}>
            <LandingKeyPointsPointImage point={point} />
            <div className="text-blue-600 text-center">{point.title}</div>
        </LandingKeyPointsPointContainer>
    );
}

function LandingKeyPointsPointContainer({children}: ReactNodeProps) {
    return (
        <div className="">
            {children}
        </div>
    );
}
