"use client"
import CalendarCalendlyEmbed from "@/kalender/components/calendlyEmbed";

export default function Calendar({contact}: {contact: any}) {
    return (
        <main className="min-w-[100dvw] w-[100dvw] max-w-[100dvw] flex justify-center pt-banner bg-orange-400">
            <div className="flex pt-y-m">
                <CalendarCalendlyEmbed baseUrl={contact.calendly.url} />
            </div>
        </main>
    );
}