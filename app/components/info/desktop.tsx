import Text from "@/components/text/text";
import {useState} from "react";

export default function InfoBoxDesktop({text}: {text?: string}) {
    const [height, setHeight] = useState<number>(0)

    return (
        <div className="hidden ss:flex absolute left-0 items-center justify-center"
             style={{
                 top: `calc(-1 * (${height}px))`,
                 left: 22,
             }}>
            <div ref={(el) => setHeight(el?.clientHeight ?? 0)}
                 className="bg-blue-200 text-blue-600 px-[10px] py-[12px] w-[400px] rounded-[12px]">
                <Text size="xs">
                    {text}
                </Text>
            </div>
        </div>
    );
}