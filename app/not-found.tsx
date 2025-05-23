"use client"
import {usePathname} from "next/navigation";
import cn from "clsx";
import Text from "@/components/text/text";
import Button from "@/components/buttons";
import Title from "@/components/title";
import ArrowIcon from "@/components/icons/arrow";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";

export const metadata: Metadata = getMetadata(
    "Dinoplan | Seite konnte nicht gefunden werden"
);

export default function NotFound() {
    const pathname = usePathname()
    let bgColor = ""

    if (pathname.includes('rechner/')) {
        bgColor = 'bg-orange-400'
    } else if (pathname.includes('impressum') || pathname.includes('datenschutz')) {
        bgColor = 'bg-orange-300'
    }

    return (
        <div className={cn(
            "min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image)+var(--spacing-footer-image-correction))] h-fit pt-[calc(var(--height-banner)+var(--spacing-y-block))] pb-[var(--spacing-y-block)] px-x-outer flex flex-col justify-center items-center w-full",
            bgColor
        )}>
            <Title className="pb-[10px]">Ups, wie bist du den hier gelandet?</Title>

            <Text className="pb-[24px]">
                Diese Seite scheint nicht zu existieren. Geh zurück zur Startseite.
            </Text>

            <Button key="appointment" size="xs" colors="blue" link={{
                type: 'internal',
                url: '/'
            }}>
                <Text className="pr-[10px]" color="yellow" size="md">Zurück zur Startseite</Text>
                <ArrowIcon strokeColor="var(--orange-200)" className="rotate-90"/>
            </Button>
        </div>
    )
}
