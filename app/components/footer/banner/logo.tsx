import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";

export default function FooterBannerLogo() {
    return (
        <InternalLink className="hidden ss:flex justify-center items-center px-[16px] xs:px-[24px] ss:px-[48px] text-blue-600" href="/">
            <div className="ss:hidden">
                <Logo scale={0.75}/>
            </div>
            <div className="hidden ss:inline">
                <Logo scale={0.75}/>
            </div>
        </InternalLink>
    );
}