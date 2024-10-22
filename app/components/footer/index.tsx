import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import Logo from "@/components/logo/logo";
import FooterContainer from "@/components/footer/container";
import Text from "@/components/text/text";

export default function Footer() {
    return (
        <FooterContainer>
            <Banner className="bg-orange w-full flex !justify-center !items-center" isFooter>
                <div className="w-fit flex justify-center items-center gap-[3rem]">
                    <InternalLink className="text-blue-600" href="/impressum">
                        <Text className="hover:text-brown-200 transition-colors">Impressum</Text>
                    </InternalLink>
                    <InternalLink className="text-blue-600" href="/datenschutz">
                        <Text className="hover:text-brown-200 transition-colors">Datenschutz</Text>
                    </InternalLink>
                    <InternalLink className="text-blue-600" href="/">
                        <Logo/>
                    </InternalLink>
                    <InternalLink className="text-blue-600" href="/#faq" scroll>
                        <Text className="hover:text-brown-200 transition-colors">Fragen?</Text>
                    </InternalLink>
                    <InternalLink className="text-blue-600" href="/kontakt">
                        <Text className="hover:text-brown-200 transition-colors">Kontakt</Text>
                    </InternalLink>
                </div>
            </Banner>
        </FooterContainer>
    );
}
