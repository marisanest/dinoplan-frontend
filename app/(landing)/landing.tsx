import LandingStart from "@/app/(landing)/start";
import Banner from "@/app/components/banner";
import LandingDino from "@/app/(landing)/dino";
import LandingKeyPoints from "@/app/(landing)/keyPoints";
import LandingServiceExamples from "@/app/(landing)/serviceExamples";

export default function Landing() {
    return (
        <main>
            <LandingStart />
            <Banner className="bg-orange"></Banner>
            <LandingDino />
            <LandingKeyPoints />
            <LandingServiceExamples />
        </main>

    );
}
