"use client"

import Calendly from "@/components/calendly";

export default function Calendar({contact}: {contact: any}) {
    return (
        <main className="min-w-[100dvw] w-[100dvw] max-w-[100dvw] flex justify-center pt-banner bg-orange-400">
            <div className="flex pt-y-m">
                <Calendly className="w-[calc(100dvw-2*var(--spacing-x-outer))] min-w-[calc(100dvw-2*var(--spacing-x-outer))] max-w-[calc(100dvw-2*var(--spacing-x-outer))] min-h-[775px] ss:min-w-[460px] ss:w-[460px] ss:max-w-[460px]"
                          baseUrl={contact.calendly.url}/>
            </div>
        </main>
    );
}