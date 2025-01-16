import LandingServiceModulesButtonsList from "@/(landing)/serviceModules/buttons/list";

export default function LandingServiceModulesButtons() {
    return (
        <div className="pt-y-s flex flex-wrap gap-y-[0.5rem] gap-x-[0.25rem] sm:gap-y-[0.65rem] sm:gap-x-[0.5rem] justify-center">
            <LandingServiceModulesButtonsList />
        </div>
    );
}