"use client"

import {LandingProps} from "@/(landing)/landing";
import Button from "@/components/buttons/new";
import Text from "@/components/text/text";

export default function LandingAboutBoxAppointmentButton({contact}: Pick<LandingProps, 'contact'>) {
    return (
        <Button theme="orange"
                size="sm"
                // link={contact.calendly}
        >
            <Text color="none">Termin vereinbaren</Text>
        </Button>
    );
}