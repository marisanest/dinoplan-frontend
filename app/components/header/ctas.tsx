import AppointmentButton from "@/app/components/buttons/appointment";
import {ReactNodeProps} from "@/lib/types/core";

export default function HeaderCtas() {
    return (
        <HeaderCtasContainer>
            <a href="/" className="text-blue-600">Beitrag berechnen</a>
            <AppointmentButton key="appointment"/>
            <a href="/" className="text-blue-600">Fragen?</a>
        </HeaderCtasContainer>
    );
}

function HeaderCtasContainer({ children }: ReactNodeProps) {
    return (
        <div className="flex gap-6 items-center">
            {children}
        </div>
    );
}
