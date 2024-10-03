import {ReactNodeProps, ServiceType} from "@/lib/types/core";
import LandingServicesButton from "@/(landing)/services/buttons/button";

const services: ServiceType[] = [
    {
        id: 1,
        title: 'Führerschein',
        segment: 'Sparen',
        example: {
            input: [
                'Das Kind ist 2 Jahre alt und',
                'du zahlst 20€ pro Monat.'
            ],
            output: [
                'Wenn dein Kind 32 Jahre alt ist, wird es ein',
                'initales Kapital von ca. 100.000€ für ein Eigenheim',
                'zur Verfügung haben.'
            ],
        }
    },
    {
        id: 2,
        title: 'Ausbildungskosten',
        segment: 'Sparen',
        example: {
            input: [],
            output: [],
        }
    },
]

export default function LandingServicesButtons() {
    return (
        <LandingServicesButtonsContainer>
            {services.map((service) => (
                <LandingServicesButton key={service.id} service={service} />
            ))}
        </LandingServicesButtonsContainer>
    );
}

function LandingServicesButtonsContainer({children}: ReactNodeProps) {
    return (
        <div className="py-y-s flex flex-wrap gap-[1rem]">
            {children}
        </div>
    );
}
