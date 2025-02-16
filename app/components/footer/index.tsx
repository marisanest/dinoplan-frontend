import FooterContainer from "@/components/footer/container";
import FooterImage from "@/components/footer/image";
import FooterBanner from "@/components/footer/banner";

export default function Footer({contact}: {contact: any}) {
    return (
        <FooterContainer>
            <FooterImage />
            <FooterBanner contact={contact} />
        </FooterContainer>
    );
}