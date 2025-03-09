"use client"

import Button from "@/components/buttons/new";
import Text from "@/components/text/text";

export default function LandingTopBannerAppointmentButton() {
    return (
        <Button theme="bright"
                link={{type: "internal", url: "/kalender"}}
                size="xs"
        >
            <Text size="md">Termin vereinbaren</Text>
        </Button>
    );
}