import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import {PortableText} from "next-sanity";
import {LandingProps} from "@/(landing)/landing";
import LandingServiceFeature from "@/(landing)/serviceFeatures/serviceFeature";
import Text from "@/components/text/text";
import Button from "@/components/buttons";

export default function LandingServiceFeatures({serviceFeaturesPageSection, contact}: Pick<LandingProps, 'serviceFeaturesPageSection' | 'contact'>) {
    if (!serviceFeaturesPageSection) return null;

    return (
        <LandingServiceFeaturesContainer>
            <Title key="title">
                <PortableText value={serviceFeaturesPageSection.title}/>
            </Title>
            <Text key="description" className="mt-y-xs" size="sm">
                <PortableText value={serviceFeaturesPageSection.description}/>
            </Text>
            <div key="features" className="grid grid-cols-2 sm:grid-cols-3 gap-[1rem] sm:gap-[2rem] mt-y-s">
                {serviceFeaturesPageSection.serviceFeatures?.map((serviceFeature) => (
                    <LandingServiceFeature key={serviceFeature.serviceFeature._id} serviceFeature={serviceFeature.serviceFeature} />
                ))}
            </div>
            <Button key="appointment" className="mt-y-m" size="sm" colors="orange" link={contact.calendly}>
                <Text color="yellow">Termin vereinbaren</Text>
            </Button>
        </LandingServiceFeaturesContainer>
    );
}

function LandingServiceFeaturesContainer({children}: ReactNodeProps) {
    return (
        <div className="flex items-center justify-center mb-y-m">
            <div className="w-[calc(100dvw-calc(2*var(--spacing-x-outer)))] sm:w-sm px-x-xs flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}
