import InfoBoxTrigger from "@/components/info/trigger";
import InfoBoxMobile from "@/components/info/mobile";
import InfoBoxDesktop from "@/components/info/desktop";
import {useState} from "react";

export default function InfoBox() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere est ut orci lobortis, eget efficitur sem efficitur. Sed gravida interdum iaculis. Aliquam erat volutpat. Proin at lobortis urna, quis blandit felis. Pellentesque auctor semper facilisis. Sed mattis id dolor sed lobortis. Pellentesque finibus, orci vel iaculis vulputate, neque nisi bibendum tortor, sit amet laoreet nulla ex eget nisi.\n"

    return (
        <div className="relative">
            <InfoBoxTrigger setIsVisible={setIsVisible} />
            {isVisible && <InfoBoxDesktop text={text}/>}
            {isVisible && <InfoBoxMobile text={text} setIsVisible={setIsVisible}/>}
        </div>
    );
}