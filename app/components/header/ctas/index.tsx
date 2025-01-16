import InternalLink from "@/components/link/internal";
import Text from "@/components/text/text";
import Button from "@/components/buttons";
import HeaderCtasFaq from "@/components/header/ctas/faq";

export default function HeaderCtas({contact}) {
    return (
        <div className="w-full hidden xs:flex xs:justify-end xs:items-center xs:gap-[1rem] pr-[30px] ss:pr-0">
            <InternalLink className="hidden ss:inline-block" href="/rechner/start" scroll>
                <Text className="hover:text-blue-600-faded transition-colors" size="md">Beitrag berechnen</Text>
            </InternalLink>

            <Button key="appointment" size="xs" colors="orange" link={contact.calendly}>
                <Text color="yellow" size="md">Termin vereinbaren</Text>
            </Button>

            <HeaderCtasFaq key="faq"/>
        </div>
    );
}