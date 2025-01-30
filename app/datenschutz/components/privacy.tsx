import Title from "@/components/title";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";

export type PrivacyProps = {
    privacyPageSection: any | null;
}

export default function Privacy({privacyPageSection}: PrivacyProps) {
    if (!privacyPageSection) return null;

    return (
        <main className="bg-orange-300 min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image)+var(--spacing-footer-image-currection))] pt-[5rem] flex flex-col justify-center items-center w-full">
            <Title key="title" className="mb-[1rem]">
                <PortableText value={privacyPageSection.title} />
            </Title>
            <Text key="content" size="md">
                <PortableText value={privacyPageSection.text} />
            </Text>
        </main>
    );
}