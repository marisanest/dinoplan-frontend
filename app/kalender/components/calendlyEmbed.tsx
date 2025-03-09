"use client"

import React, { useEffect } from "react";

export default function CalendarCalendlyEmbed({ baseUrl = 'https://calendly.com/marisanest-mailbox/30min' }) {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head.appendChild(script);
    }, []);

    const url = `${baseUrl}?background_color=fffffa&text_color=294290&primary_color=e6b45a`

    return (
        <div className="calendly-inline-widget w-[calc(100dvw-2*var(--spacing-x-outer))] min-w-[calc(100dvw-2*var(--spacing-x-outer))] max-w-[calc(100dvw-2*var(--spacing-x-outer))]
        min-h-[775px] ss:min-w-[460px] ss:w-[460px] ss:max-w-[460px]"
             data-url={url}>
        </div>
    );
}