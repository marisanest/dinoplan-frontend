import LandingStartDescription from "@/app/(landing)/start/description";
import LandingStartBackground from "@/app/(landing)/start/background";
import LandingStartTitle from "@/(landing)/start/title";

export default function LandingStart() {
    return (
        <div className="w-full relative z-10 pt-banner bg-orange-200">
            <LandingStartBackground key="background"/>
            <div key="title-description" className="w-full flex justify-center px-x-outer py-y-block-start">
                <div className="w-full max-w-md h-[calc(100dvh-2*var(--spacing-y-block)-var(--height-banner))] ss:h-start">
                    <div className="relative z-10 h-full flex flex-col">
                        <LandingStartTitle key="title" />
                        <LandingStartDescription key="description" />
                    </div>
                </div>
            </div>
        </div>
    );
}