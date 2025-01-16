import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";
import FooterContainer from "@/components/footer/container";
import Text from "@/components/text/text";
import EmailLink from "@/components/link/email";
import FooterImage from "@/components/footer/image";
import FooterFaq from "@/components/footer/faq";

export default function Footer({contact}) {
    return (
        <FooterContainer>
            <FooterImage />
            <Banner className="bg-orange" isFooter>
                <div className="w-full flex items-center justify-center gap-[1rem] xs:gap-[1.5rem] ss:gap-[3rem]">
                    <InternalLink className="text-blue-600" href="/impressum">
                        <Text size="md" className="hover:text-brown-200 transition-colors">Impressum</Text>
                    </InternalLink>
                    <InternalLink className="text-blue-600" href="/datenschutz">
                        <Text size="md" className="hover:text-brown-200 transition-colors">Datenschutz</Text>
                    </InternalLink>
                    <InternalLink className="hidden ss:inline-block text-blue-600" href="/">
                        <div className="ss:hidden">
                            <Logo scale={0.75}/>
                        </div>
                        <div className="hidden ss:inline">
                            <Logo scale={0.75}/>
                        </div>
                    </InternalLink>

                    <FooterFaq key="faq" />

                    <EmailLink className="text-blue-600" href={contact.email.email}>
                        <Text size="md" className="hover:text-brown-200 transition-colors">Kontakt</Text>
                    </EmailLink>
                </div>
            </Banner>
        </FooterContainer>
    );
}
