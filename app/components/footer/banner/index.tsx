import FooterFaq from "@/components/footer/faq";
import FooterBannerImprint from "@/components/footer/banner/imprint";
import FooterBannerPrivacy from "@/components/footer/banner/privacy";
import FooterBannerContainer from "@/components/footer/banner/container";
import FooterBannerContact from "@/components/footer/banner/contact";
import FooterBannerLogo from "@/components/footer/banner/logo";

export default function FooterBanner({contact}: {contact: any}) {
    return (
        <FooterBannerContainer>
            <FooterBannerImprint />
            <FooterBannerPrivacy />
            <FooterBannerLogo />
            <FooterFaq key="faq" />
            <FooterBannerContact email={contact.email.email} />
        </FooterBannerContainer>
    );
}