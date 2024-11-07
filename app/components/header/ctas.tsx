import {ReactNodeProps} from "@/lib/types/core";
import InternalLink from "@/components/link/internal";
import Text from "@/components/text/text";
import Button from "@/components/buttons";

export default function HeaderCtas({contact}) {
    return (
        <HeaderCtasContainer>
            <InternalLink className="hidden sm:inline-block" href="/rechner" scroll>
                <Text className="hover:text-blue-600-faded transition-colors" size="md">Beitrag berechnen</Text>
            </InternalLink>
            <Button key="appointment" size="xs" colors="orange" link={contact.calendly}>
                <Text color="yellow" size="md">Termin vereinbaren</Text>
            </Button>
            <InternalLink className="hidden sm:inline-block" href="/#faq" scroll>
                <Text className="hover:text-blue-600-faded transition-colors" size="md">Fragen?</Text>
            </InternalLink>
        </HeaderCtasContainer>
    );
}

function HeaderCtasContainer({ children }: ReactNodeProps) {
    return (
        <div className="gap-[1rem] items-center hidden xs:flex">
            {children}
        </div>
    );
}
