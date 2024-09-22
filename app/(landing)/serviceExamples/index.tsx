import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import Button from "@/app/components/buttons";

const services = [
    {
        label: 'Führerschein',
        example: ""
    },
    {
        label: 'Ausbildungskosten',
        example: ""
    },
]

export default function LandingServiceExamples() {
    return (
        <LLandingServiceExamplesContainer>
            <Title>Schau dir deine Leistungen an unseren Beispielen an!</Title>
            <div className="py-y-s flex flex-wrap gap-[1rem]">
                {services.map((service) => (
                    <Button key={service.label} label={service.label} />
                ))}
            </div>
        </LLandingServiceExamplesContainer>
    );
}

function LLandingServiceExamplesContainer({children}: ReactNodeProps) {
    return (
        <div className="flex items-center justify-center mb-y-m">
            <div className="w-sm max-w-sm flex flex-col px-x-sm items-center justify-center">
                {children}
            </div>
        </div>
    );
}
