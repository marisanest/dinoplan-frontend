import {ReactNodeProps} from "@/lib/types/core";
import LandingAboutBoxImage from "@/(landing)/about/box/image";
import LandingAboutBoxPersonalFeatures from "@/(landing)/about/box/personalFeatures";
import {LandingProps} from "@/(landing)/landing";
import Button from "@/components/buttons";
import Text from "@/components/text/text";

export default function LandingAboutBox({aboutPageSection, contact}: Pick<LandingProps, 'aboutPageSection' | 'contact'>) {
    return (
        <LandingAboutBoxContainer>
            <div className="w-full flex flex-col justify-center items-center ss:grid ss:grid-cols-2 ss:gap-x-sm">
                <LandingAboutBoxPersonalFeatures key="personalFeatures" aboutPageSection={aboutPageSection} />
                <LandingAboutBoxImage key="image" aboutPageSection={aboutPageSection} />
            </div>
            <div className="w-fit pt-y-paragraph">
                <Button key="appointment" size="sm" colors="orange" link={contact.calendly}>
                    <Text color="none">Termin vereinbaren</Text>
                </Button>
            </div>
        </LandingAboutBoxContainer>
    );
}

function LandingAboutBoxContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full bg-orange-200 rounded-3xl py-y-section px-x-s flex flex-col items-center">
            {children}
        </div>
    );
}