"use client"

import Button from "@/components/buttons/new";
import Text from "@/components/text/text";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingTopBannerAppointmentButton() {
    const contact = useAppContext(useShallow((s) => s.contact));

    return (
        <Button theme="bright"
                link={contact.calendly}
                size="xs"
        >
            <Text size="md">Termin vereinbaren</Text>
        </Button>
    );
}