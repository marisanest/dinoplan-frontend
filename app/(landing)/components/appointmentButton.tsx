"use client"

import Button from "@/components/buttons/new";
import Text from "@/components/text/text";
import {useAppContext} from "@/lib/stores/app/context";
import {useShallow} from "zustand/react/shallow";

export default function LandingAppointmentButton() {
    const contact = useAppContext(useShallow((s) => s.contact));

    return (
        <Button theme="orange"
                size="sm"
                link={contact.calendly}
        >
            <Text color="none">Termin vereinbaren</Text>
        </Button>
    );
}