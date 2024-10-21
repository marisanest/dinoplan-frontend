import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";
import FooterContainer from "@/components/footer/container";

export default function Footer() {
    return (
        <FooterContainer>
            <Banner className="bg-orange w-full flex !justify-center !items-center" isFooter>
                <div className="w-fit flex justify-center items-center gap-[3rem]">
                    <InternalLink className="text-blue-600" href="/impressum">Impressum</InternalLink>
                    <InternalLink className="text-blue-600" href="/datenschutz">Datenschutz</InternalLink>
                    <InternalLink className="text-blue-600" href="/"><Logo/></InternalLink>
                    <InternalLink className="text-blue-600" href="/#faq" scroll>Fragen?</InternalLink>
                    <InternalLink className="text-blue-600" href="/kontakt">Kontakt</InternalLink>
                </div>
            </Banner>
        </FooterContainer>
    );
}
