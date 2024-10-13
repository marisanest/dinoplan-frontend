import Banner from "@/app/components/banner";
import InternalLink from "@/components/link/internal";
import FooterImage from "@/components/footer/image";
import Logo from "@/components/logo/logo";

export default function Footer() {
    return (
        <div className="">
            {/*<FooterImage />*/}
            <Banner className="bg-orange w-full flex !justify-center !items-center" isFooter>
                <div className="w-fit flex justify-center items-center gap-[3rem]">
                    <InternalLink className="text-blue-600" href="/impressum">Impressum</InternalLink>
                    <InternalLink className="text-blue-600" href="/datenschutz">Datenschutz</InternalLink>
                    <a href="/"><Logo/></a>
                    <InternalLink className="text-blue-600" href="/#faq">Fragen?</InternalLink>
                    <InternalLink className="text-blue-600" href="/kontakt">Kontakt</InternalLink>
                </div>
            </Banner>
        </div>
    );
}
