import Text from "@/components/text/text";
import {LinkType} from "@/lib/types/core";
import Link from "@/components/link";

export type CalculatorPrevButtonProps = {
    prevLink: LinkType;
}

export default function CalculatorPrevButton({prevLink}: CalculatorPrevButtonProps) {
    return (
        <Link className="cursor-pointer p-[10px]" link={prevLink}>
            <Text className="hover:text-blue-600-faded" size="md">Zurück</Text>
        </Link>
    )
}
