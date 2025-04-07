import React, {useEffect, useState} from "react";

export default function CalculatorCalculationCtasAppointmentEmbed({baseUrl = 'https://calendly.com/marisanest-mailbox/30min', isAppointmentEmbedVisible}: {baseUrl?: string; isAppointmentEmbedVisible: boolean}) {
    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head?.appendChild(script);
    }, []);

    return (
        <div className="transition-[height] duration-700 overflow-y-hidden"
             style={{height: isAppointmentEmbedVisible ? `${height}px` : '0px'}}>

            <div ref={el => setHeight(el?.clientHeight ?? 0)}
                 className="h-[calc(775px+var(--spacing-y-xs))] mt-y-xs w-[calc(100dvw-2*var(--spacing-x-outer)-2*var(--spacing-x-xxs))] min-w-[calc(100dvw-2*var(--spacing-x-outer)-2*var(--spacing-x-xxs))] max-w-[calc(100dvw-2*var(--spacing-x-outer)-2*var(--spacing-x-xxs))] ss:min-w-[460px] ss:w-[460px] ss:max-w-[460px]"
                 data-url={`${baseUrl}?background_color=fffffa&text_color=294290&primary_color=e6b45a`}>
            </div>
        </div>
    );
}