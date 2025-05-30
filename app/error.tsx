'use client'

import {usePathname} from "next/navigation";
import cn from "clsx";
import Title from "@/components/title";
import Text from "@/components/text/text";
import Button from "@/components/buttons";
import ArrowIcon from "@/components/icons/arrow";
import EmailLink from "@/components/link/email";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";
import { FALLBACK_EMAIL } from "@/lib/constants/app";

export const metadata: Metadata = getMetadata(
    "Dinoplan | Error"
);

export default function Error() {
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
            <Title className="pb-[10px]">Ups, etwas ist schiefgegangen!</Title>

            <Text className="pb-[24px]">
                Anscheinend ist ein Fehler aufgetreten. Geh zurück zur Startseite oder kontaktiere uns direkt.
            </Text>

            <div className="flex gap-[16px] justify-center items-center">
                <Button key="appointment" size="xs" colors="blue" link={{
                    type: 'internal',
                    url: '/'
                }}>
                    <Text className="pr-[10px]" color="yellow" size="md">Zurück zur Startseite</Text>
                    <ArrowIcon strokeColor="var(--orange-200)" className="rotate-90"/>
                </Button>

                <EmailLink className="flex justify-center items-center" href={FALLBACK_EMAIL ?? ''}>
                    <Text className="pr-[8px]" color="blue" size="md">Kontakt</Text>
                    <ArrowIcon className="rotate-90"/>
                </EmailLink>
            </div>
        </div>
    )
}