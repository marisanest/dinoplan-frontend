import Text from "@/components/text/text";
import {useEffect, useRef} from "react";

export default function InfoBoxMobile({text, setIsVisible}: {text: string; setIsVisible: any}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.backgroundColor = 'var(--status-background)'
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.backgroundColor = 'var(--background)'
            document.body.style.overflow = 'unset';
        }
    }, []);

    useOutsideClickHandler(ref, () => {
        setIsVisible(false)
    })

    return (
        <div className="fixed ss:hidden z-50 left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50">
            <div className="w-full h-full flex items-center justify-center px-x-outer">
                <div ref={ref} className="bg-blue-200 text-blue-600 px-[10px] py-[12px] w-[calc(100dvw-2*10px)] rounded-[12px]">
                    <div className="w-full flex justify-end items-center">
                        <div className="px-[5px]">X</div>
                    </div>
                    <Text size="xs">
                        {text}
                    </Text>
                </div>
            </div>
        </div>
    );
}

function useOutsideClickHandler(ref, onOutsideClick: () => void) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && event.target.id !== 'add-to-cart') {
                onOutsideClick()
            }
        }

        document.addEventListener("pointerdown", handleClickOutside);
        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, [ref]);
}