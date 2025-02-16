import Title from "@/components/title";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";
import cn from "clsx";

export type PrivacyProps = {
    privacyPageSection: any | null;
}

export default function Privacy({privacyPageSection}: PrivacyProps) {
    if (!privacyPageSection) return null;

    return (
        <main className="bg-orange-300 min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image)+var(--spacing-footer-image-correction))] h-fit pt-[calc(var(--height-banner)+var(--spacing-y-block))] pb-[var(--spacing-y-block)] px-x-outer flex flex-col justify-center items-center w-full">
            <Title key="title" className="mb-[1rem]">
                <PortableText value={privacyPageSection.title} />
            </Title>
            <Text key="content" size="md">
                <PortableText value={privacyPageSection.text} />
            </Text>
        </main>
    );
}