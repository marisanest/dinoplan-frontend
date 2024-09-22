import {ReactNodeProps} from "@/lib/types/core";

export default function LandingStartDescription() {
    return (
        <LandingStartDescriptionContainer>
            <div className="border-b-2 border-b-red-200 pb-2 text-center w-[500px]">
                Alles was du brauchst für dein Kind - in nur einem Paket.
            </div>
            <div className="flex justify-between gap-6 pt-2">
                <div>Ernstfallabsicherung</div>
                <div>Geldanlage</div>
                <div>Zusatzversicherungen</div>
            </div>
        </LandingStartDescriptionContainer>
    );
}

function LandingStartDescriptionContainer({ children }: ReactNodeProps) {
    return (
        <div className="w-full flex justify-center">
            <div className="text-blue-600 text-lg font-light h-[15dvh] w-[500px]">
                {children}
            </div>
        </div>
    );
}
