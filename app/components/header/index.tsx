import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";
import HeaderBurgerIcon from "@/components/header/burger";
import HeaderCtas from "@/components/header/ctas";

export default function Header() {
    return (
        <Banner className="backdrop-blur-[10px] bg-yellow-100-transparent" isHeader>
            <InternalLink href="/">
                <Logo scale={0.75}/>
            </InternalLink>
            <HeaderCtas />
            <HeaderBurgerIcon />
        </Banner>
    );
}
