import FooterBannerImprint from "@/components/footer/banner/imprint";
import FooterBannerPrivacy from "@/components/footer/banner/privacy";
import FooterBannerContainer from "@/components/footer/banner/container";
import FooterBannerContact from "@/components/footer/banner/contact";
import FooterBannerLogo from "@/components/footer/banner/logo";
import FooterBannerFaq from "@/components/footer/banner/faq";

export default function FooterBanner({contact}: {contact: any}) {
    return (
        <FooterBannerContainer>
            <div className="flex items-center justify-end gap-x-[16px] xs:gap-x-[24px] ss:gap-x-[48px]">
                <FooterBannerImprint />
                <FooterBannerPrivacy />
            </div>
            <FooterBannerLogo />
            <div className="flex items-center justify-start gap-x-[16px] xs:gap-x-[24px] ss:gap-x-[48px]">
                <FooterBannerFaq key="faq" />
                <FooterBannerContact email={contact.email.email} />
            </div>
        </FooterBannerContainer>
    );
}