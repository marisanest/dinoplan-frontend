"use client"

import Button from "@/components/buttons/new";
import Text from "@/components/text/text";

export default function LandingServiceModulesCalculateButton() {
    return (
        <div className="w-fit">
            <Button theme="calculate"
                    size="sm"
                    link={{type: 'internal', url: '/rechner/start'}}
            >
                <Text color="none">Beitrag berechnen</Text>
            </Button>
        </div>
    );
}