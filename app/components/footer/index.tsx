import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import FooterImage from "@/components/footer/image";

export default function Footer() {
    return (
        <div className="mt-[-2vw]" >
            <FooterImage />
            <Banner className="bg-orange" isFooter>
                <InternalLink href="/impressum">Impressum</InternalLink>
                <InternalLink href="/datenschutz">Datenschutz</InternalLink>
                <InternalLink href="/#faq">Fragen?</InternalLink>
                <InternalLink href="/kontakt">Kontakt</InternalLink>
            </Banner>
        </div>
    );
}
