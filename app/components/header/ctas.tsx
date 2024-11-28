import {ReactNodeProps} from "@/lib/types/core";
import InternalLink from "@/components/link/internal";
import Text from "@/components/text/text";
import Button from "@/components/buttons";

export default function HeaderCtas({contact}) {
    return (
        <HeaderCtasContainer>
            <InternalLink className="hidden ss:inline-block" href="/rechner/start" scroll>
                <Text className="hover:text-blue-600-faded transition-colors" size="md">Beitrag berechnen</Text>
            </InternalLink>
            <Button key="appointment" size="xs" colors="orange" link={contact.calendly}>
                <Text color="yellow" size="md">Termin vereinbaren</Text>
            </Button>
            <InternalLink className="hidden ss:inline-block" href="/#faq" scroll>
                <Text className="hover:text-blue-600-faded transition-colors" size="md">Fragen?</Text>
            </InternalLink>
        </HeaderCtasContainer>
    );
}

function HeaderCtasContainer({ children }: ReactNodeProps) {
    return (
        <div className="w-full hidden xs:flex xs:justify-end xs:items-center xs:gap-[1rem] pr-[30px] ss:pr-0">
            {children}
        </div>
    );
}
