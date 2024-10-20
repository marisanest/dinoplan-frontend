import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";
import Link from "next/link";

const APPOINTMENT_URL = "https://calendly.com"

export type AppointmentButtonProps = {
    label?: string;
    url?: string;
} & ReactNodeProps;

export default function AppointmentButton({
    className,
    label = "Termin vereinbaren",
    url = APPOINTMENT_URL
}: AppointmentButtonProps) {
    return (
        <Link href={url}
           className={cn("rounded-full h-[55px] px-[2rem] flex justify-center items-center text-lg text-yellow-100 bg-orange hover:bg-orange-faded transition-colors border-[3px] border-orange hover:border-orange-faded", className)}>
            {label}
        </Link>
    );
}

