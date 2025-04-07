import React, {useState} from "react";
import Calendly from "@/components/calendly";

export default function CalculatorCalculationCtasAppointmentEmbed({
                                                                      baseUrl,
                                                                      isAppointmentEmbedVisible,
}: {
    baseUrl: string;
    isAppointmentEmbedVisible: boolean;
}) {
    const [height, setHeight] = useState<number>(0)

    return (
        <div className="transition-[height] duration-700 overflow-y-hidden" style={{height: isAppointmentEmbedVisible ? `${height}px` : '0px'}}>
            <div ref={el => setHeight(el?.clientHeight ?? 0)}>
                <Calendly className="h-[calc(775px+var(--spacing-y-xs))] mt-y-xs w-[calc(100dvw-2*var(--spacing-x-outer)-2*var(--spacing-x-xxs))] min-w-[calc(100dvw-2*var(--spacing-x-outer)-2*var(--spacing-x-xxs))] max-w-[calc(100dvw-2*var(--spacing-x-outer)-2*var(--spacing-x-xxs))] ss:min-w-[460px] ss:w-[460px] ss:max-w-[460px]"
                          baseUrl={baseUrl}/>
            </div>
        </div>
    );
}