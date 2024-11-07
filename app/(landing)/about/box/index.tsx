import {ReactNodeProps} from "@/lib/types/core";
import LandingAboutBoxImage from "@/(landing)/about/box/image";
import LandingAboutBoxPersonalFeatures from "@/(landing)/about/box/personalFeatures";
import {LandingProps} from "@/(landing)/landing";
import Button from "@/components/buttons";
import Text from "@/components/text/text";

export default function LandingAboutBox({aboutPageSection, contact}: Pick<LandingProps, 'aboutPageSection' | 'contact'>) {
    return (
        <LandingAboutBoxContainer>
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-sm">
                <LandingAboutBoxPersonalFeatures key="personalFeatures" aboutPageSection={aboutPageSection} />
                <LandingAboutBoxImage key="image" aboutPageSection={aboutPageSection} />
            </div>
            <div className="w-fit pt-y-xs">
                <Button key="appointment" size="sm" colors="orange" link={contact.calendly}>
                    <Text color="none">Termin vereinbaren</Text>
                </Button>
            </div>
        </LandingAboutBoxContainer>
    );
}

function LandingAboutBoxContainer({children}: ReactNodeProps) {
    return (
        <div className="w-full bg-orange-200 rounded-3xl py-y-s px-x-s sm:px-x-s flex flex-col items-center">
            {children}
        </div>
    );
}