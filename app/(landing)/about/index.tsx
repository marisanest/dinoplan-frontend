import LandingAboutBox from "@/(landing)/about/box";
import LandingAboutTitle from "@/(landing)/about/title";
import LandingAboutDescription from "@/(landing)/about/description";
import InViewMotion from "@/components/inViewMotion";

export default function LandingAbout() {
    return (
        <InViewMotion>
            <div className="w-full flex justify-center px-x-outer pb-y-block">
                <div className="w-full max-w-sm flex flex-col items-center">
                    <LandingAboutTitle key="title" />

                    <div className="w-full flex justify-center">
                        <LandingAboutDescription key="description" />
                    </div>

                    <LandingAboutBox key="box"/>
                </div>
            </div>
        </InViewMotion>
    );
}