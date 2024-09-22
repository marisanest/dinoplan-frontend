import {KeyPointType, ReactNodeProps} from "@/lib/types/core";
import LandingKeyPointsPoint from "@/app/(landing)/keyPoints/point";

const points: KeyPointType[] = [
    {
        id: 1,
        title: 'Individuelles Paket',
        image: 'dinoplan/Dinoplan_Final_Files_Icon_Package_hfoiqa',
    },
    {
        id: 2,
        title: 'Beratung auf Augenhöhe',
        image: 'dinoplan/Dinoplan_Final_Files_Icon_Consultation_sxvomo',
    },
    {
        id: 3,
        title: 'Betreuung deiner Pläne',
        image: 'dinoplan/Dinoplan_Final_Files_Icon_Management_cbnxzp',
    },
    {
        id: 4,
        title: 'Keine versteckten Kosten',
        image: 'dinoplan/Dinoplan_Final_Files_Icon_Hidden_Costs_sj0jey',
    },
    {
        id: 5,
        title: 'Viel Schutz für wenig Geld',
        image: 'dinoplan/Dinoplan_Final_Files_Icon_High_protection_txlql8',
    },
    {
        id: 6,
        title: 'Flexible Anpassung deiner Verträge',
        image: 'dinoplan/Dinoplan_Final_Files_Icon_Contracts_ozo36p',
    },
]

export default function LandingKeyPointsPoints() {
    return (
        <LandingKeyPointsPointsContainer>
            {points.map((point) => (
                <LandingKeyPointsPoint key={point.id} point={point} />
            ))}
        </LandingKeyPointsPointsContainer>
    );
}

function LandingKeyPointsPointsContainer({children}: ReactNodeProps) {
    return (
        <div className="grid grid-cols-3 mt-y-s">
            {children}
        </div>
    );
}
