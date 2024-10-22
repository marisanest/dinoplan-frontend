import Text from "@/components/text/text";
import {LinkType} from "@/lib/types/core";
import Link from "@/components/link";

export type CalculatorStageSharedBackButtonProps = {
    onBackButtonClick?: () => void;
    link?: LinkType;
}

export default function CalculatorStageSharedPrevButton({onBackButtonClick, link}: CalculatorStageSharedBackButtonProps) {
    const className = "cursor-pointer mt-[1rem]"
    const children = <Text className="hover:text-blue-600-faded" size="md">Zurück</Text>

    if (link) {
        return (
            <Link className={className} link={link}>
                {children}
            </Link>
        )
    } else {
        return (
            <div className={className} onClick={onBackButtonClick}>
                {children}
            </div>
        )
    }
}
