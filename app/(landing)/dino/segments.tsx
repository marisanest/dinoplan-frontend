import {ReactNodeProps, DinoSegmentType} from "@/lib/types/core";
import LandingDinoSegment from "@/app/(landing)/dino/segment";

const segments: DinoSegmentType[] = [
    {
        id: 1,
        title: 'Spar-Dino',
        description: "Mauris viverra volutpat consequat. Maecenas non iaculis dolor. Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit. Aenean ullamcorper lobortis turpis, sit amet fermentum quam tempor ac.",
        checkmarks: {
            items: [
                'Führerschein',
                'Ausbildungsgebühren',
                'Eigenheim',
                'Rente'
            ],
            dot: {
                backgroundColor: 'bg-orange'
            },
        },
        image: 'dinoplan/Dinoplan_Final_Files_Dino_Savings_cropped_egaqfj_22f51c',
        width: 'w-[16dvw]'

    },
    {
        id: 2,
        title: 'Super-Dino',
        description: "Phasellus sed porta dolor. Sed auctor turpis odio, nec venenatis neque laoreet a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer mollis, felis sit amet iaculis gravida, libero neque ullamcorper leo, at mollis lorem erat a augue. Integer vehicula scelerisque mi, vel placerat lorem porta quis.",
        image: 'dinoplan/Dinoplan_Final_Files_Dino_Super_cropped_b87i7p_3b12e1',
        checkmarks: {
            items: [
                'Unfallversicherung',
                'Pflegeversicherung',
                'Versorgeerabsicherung',
                'Berufsunfähigkeitsversicherung',
            ],
            dot: {
                backgroundColor: 'bg-blue'
            },
        },
        width: 'w-[16dvw]'
    },
    {
        id: 3,
        title: 'Fürsorge-Dino',
        description: "Nunc quis lectus congue, congue justo at, dignissim sem. Proin malesuada magna nisi, quis pretium magna luctus iaculis. Donec non justo aliquam, semper mi eu, tincidunt lorem. Donec condimentum ex ac risus semper, in blandit magna molestie.",
        image: 'dinoplan/Dinoplan_Final_Files_Dino_Caring_cropped_iprhz3_90d2ee',
        checkmarks: {
            items: [
                'Zahnzusatzversicherung',
                'Freie Wahl von Fachärzten',
                'Rooming im Krankenhaus',
                'u.v.m'
            ],
            dot: {
                backgroundColor: 'bg-red-200'
            },
        },
        width: 'w-[16dvw]'
    },
]

export default function LandingDinoSegments() {
    return (
        <LandingDinoSegmentsContainer>
            {segments.map((segment, index) => (
                <LandingDinoSegment key={segment.id} className={index === 1 ? 'mx-auto' : (index === 2 ? 'ml-auto' : '')} segment={segment} />
            ))}
        </LandingDinoSegmentsContainer>
    );
}

function LandingDinoSegmentsContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full grid grid-cols-3 justify-between gap-[4rem] mt-y-s">
            {children}
        </div>
    );
}

