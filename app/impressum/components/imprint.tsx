import Title from "@/components/title";
import {PortableText} from "next-sanity";
import Text from "@/components/text/text";

export type ImprintProps = {
    imprintPageSection: any | null;
}

export default function Imprint({imprintPageSection}: ImprintProps) {
    if (!imprintPageSection) return null;

    return (
        <main className="bg-orange-300 min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image)+var(--spacing-footer-image-correction))] h-fit pt-[calc(var(--height-banner)+var(--spacing-y-block))] pb-[var(--spacing-y-block)] px-x-outer flex flex-col justify-center items-center w-full">
            <Title key="title" className="mb-[1rem]">
                <PortableText value={imprintPageSection.title} />
            </Title>
            <Text key="content" size="md">
                <PortableText value={imprintPageSection.text} />
            </Text>
        </main>
    );
}