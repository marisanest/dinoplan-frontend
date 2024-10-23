import HeaderCtas from "@/app/components/header/ctas";
import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";

export default function Header({contact}) {
    return (
        <Banner className="backdrop-blur-[10px] bg-yellow-100-transparent" fixed isHeader>
            <InternalLink href="/">
                <div className="sm:hidden"><Logo scale={0.75}/></div>
                <div className="hidden sm:inline"><Logo scale={1.0}/></div>
            </InternalLink>
            <HeaderCtas contact={contact}/>
        </Banner>
    );
}
