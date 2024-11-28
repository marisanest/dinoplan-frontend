import {ReactNodeProps} from "@/lib/types/core";
import Title from "@/app/components/title";
import {PortableText} from "next-sanity";
import {LandingProps} from "@/(landing)/landing";
import Text from "@/components/text/text";
import Button from "@/components/buttons";
import LandingServiceFeature from "@/(landing)/serviceFeatures/serviceFeature";

export default function LandingServiceFeatures({serviceFeaturesPageSection, contact}: Pick<LandingProps, 'serviceFeaturesPageSection' | 'contact'>) {
    if (!serviceFeaturesPageSection) return null;

    return (
        <LandingServiceFeaturesContainer>
            <Title key="title" className="max-w-text">
                <PortableText value={serviceFeaturesPageSection.title}/>
            </Title>
            <Text key="description" className="pt-y-paragraph max-w-text" size="sm">
                <PortableText value={serviceFeaturesPageSection.description}/>
            </Text>
            <div key="features" className="grid grid-cols-2 ss:grid-cols-3 py-y-section gap-x-[1rem] gap-y-[0.75rem] ss:gap-[2rem]">
                {serviceFeaturesPageSection.serviceFeatures?.map((serviceFeature) => (
                    <LandingServiceFeature key={serviceFeature.serviceFeature._id} serviceFeature={serviceFeature.serviceFeature} />
                ))}
            </div>
            <Button key="appointment" size="sm" colors="orange" link={contact.calendly}>
                <Text color="none">Termin vereinbaren</Text>
            </Button>
        </LandingServiceFeaturesContainer>
    );
}

function LandingServiceFeaturesContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center px-x-outer pb-y-block">
            <div className="w-full max-w-sm flex flex-col items-center px-[0.5rem]">
                {children}
            </div>
        </div>
    );
}
