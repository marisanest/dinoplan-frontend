import {ReactNodeProps} from "@/lib/types/core";
import cn from "clsx";

const APPOINTMENT_URL = "https://calendly.com"

export type AppointmentButtonProps = {
    label?: string;
    url?: string;
} & ReactNodeProps;

// rounded-full h-[60px] px-[2rem] flex justify-center items-center text-lg text-blue-600 hover:text-yellow-100 hover:bg-red-200 transition-colors border-[3px] border-blue-600 hover:border-red-200 cursor-pointer

export default function AppointmentButton({className, label = "Termin vereinbaren", url = APPOINTMENT_URL }: AppointmentButtonProps) {
    return (
        <a href={url}
           className={cn("rounded-full h-[55px] px-[2rem] flex justify-center items-center text-lg text-yellow-100 bg-orange hover:bg-orange-faded transition-colors border-[3px] border-orange hover:border-orange-faded", className)}>
            {label}
        </a>
    );
}

