import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";
import FooterContainer from "@/components/footer/container";
import Text from "@/components/text/text";
import EmailLink from "@/components/link/email";

export default function Footer({contact}) {
    return (
        <FooterContainer>
            <Banner className="bg-orange" isFooter>
                <div className="w-full flex items-center justify-center gap-[1.5rem] sm:gap-[3rem]">
                    <InternalLink className="text-blue-600" href="/impressum">
                        <Text size="md" className="hover:text-brown-200 transition-colors">Impressum</Text>
                    </InternalLink>
                    <InternalLink className="text-blue-600" href="/datenschutz">
                        <Text size="md" className="hover:text-brown-200 transition-colors">Datenschutz</Text>
                    </InternalLink>
                    <InternalLink className="hidden sm:inline-block text-blue-600" href="/">
                        <div className="sm:hidden">
                            <Logo scale={0.75}/>
                        </div>
                        <div className="hidden sm:inline">
                            <Logo scale={0.75}/>
                        </div>
                    </InternalLink>
                    <InternalLink className="text-blue-600" href="/#faq" scroll>
                        <Text size="md" className="hover:text-brown-200 transition-colors">Fragen?</Text>
                    </InternalLink>
                    <EmailLink className="text-blue-600" href={contact.email.email}>
                        <Text size="md" className="hover:text-brown-200 transition-colors">Kontakt</Text>
                    </EmailLink>
                </div>
            </Banner>
        </FooterContainer>
    );
}
