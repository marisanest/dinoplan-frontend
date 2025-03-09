"use client"

import Button from "@/components/buttons/new";
import Text from "@/components/text/text";

export default function LandingAppointmentButton() {
    return (
        <Button theme="orange"
                size="sm"
                link={{type: "internal", url: "/kalender"}}
        >
            <Text color="none">Termin vereinbaren</Text>
        </Button>
    );
}