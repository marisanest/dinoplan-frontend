import HeaderLogo from "@/app/components/header/logo";
import HeaderCtas from "@/app/components/header/ctas";
import Banner from "@/app/components/banner";

export default function Header() {
    return (
        <Banner className="backdrop-blur-[10px] bg-yellow-100-transparent" fixed isHeader>
            <HeaderLogo />
            <HeaderCtas />
        </Banner>
    );
}
