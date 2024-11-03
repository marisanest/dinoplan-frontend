import HeaderCtas from "@/app/components/header/ctas";
import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";
import BurgerIcon from "@/components/icons/burger";
import useOverlayMenu from "@/lib/stores/useOverlayMenuStore";
import {useShallow} from "zustand/react/shallow";
import HeaderBurgerIcon from "@/components/header/burger";

export default function Header({contact}) {

    return (
        <Banner className="backdrop-blur-[10px] bg-yellow-100-transparent" fixed isHeader>
            <InternalLink href="/">
                <div className="sm:hidden"><Logo scale={0.75}/></div>
                <div className="hidden sm:inline"><Logo scale={1.0}/></div>
            </InternalLink>
            <HeaderCtas contact={contact} />
            <HeaderBurgerIcon />
            {/*<div className="flex flex-col gap-[0.5rem] cursor-pointer p-[1rem]">*/}
            {/*    <hr className="border-[1px] border-blue-600 rounded-full w-[40px] "/>*/}
            {/*    <hr className="border-[1px] border-blue-600 rounded-full w-[40px]"/>*/}
            {/*    <hr className="border-[1px] border-blue-600 rounded-full w-[40px]"/>*/}
            {/*</div>*/}
        </Banner>
    );
}
