import Text from "@/components/text/text";
import {LinkType} from "@/lib/types/core";
import Link from "@/components/link";

export type CalculatorStageSharedPrevButtonProps = {
    prevLink: LinkType;
}

export default function CalculatorStageSharedPrevButton({prevLink}: CalculatorStageSharedPrevButtonProps) {
    return (
        <Link className="cursor-pointer mt-[1rem]" link={prevLink}>
            <Text className="hover:text-blue-600-faded" size="md">Zurück</Text>
        </Link>
    )
}
