import LandingStart from "@/app/(landing)/start";
import Banner from "@/app/components/banner";
import LandingDino from "@/app/(landing)/dino";
import LandingKeyPoints from "@/app/(landing)/keyPoints";
import LandingServices from "@/app/(landing)/services";
import LandingAbout from "@/app/(landing)/about";
import LandingFaq from "@/(landing)/faq";

export default function Landing() {
    return (
        <main>
            <LandingStart />
            <Banner className="bg-orange"></Banner>
            <LandingDino />
            <LandingKeyPoints />
            <LandingServices />
            <LandingAbout />
            <LandingFaq />
        </main>

    );
}
