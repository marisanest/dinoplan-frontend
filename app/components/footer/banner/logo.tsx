import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";

export default function FooterBannerLogo() {
    return (
        <InternalLink className="hidden ss:inline-block text-blue-600" href="/">
            <div className="ss:hidden">
                <Logo scale={0.75}/>
            </div>
            <div className="hidden ss:inline">
                <Logo scale={0.75}/>
            </div>
        </InternalLink>
    );
}