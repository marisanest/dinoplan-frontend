import HeaderCtas from "@/app/components/header/ctas";
import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";

export default function Header() {
    return (
        <Banner className="backdrop-blur-[10px] bg-yellow-100-transparent" fixed isHeader>
            <InternalLink href="/">
                <Logo/>
            </InternalLink>
            <HeaderCtas />
        </Banner>
    );
}
