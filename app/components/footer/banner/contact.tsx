import Text from "@/components/text/text";
import EmailLink from "@/components/link/email";

export default function FooterBannerContact({email}: {email: string}) {
    return (
        <EmailLink className="text-blue-600" href={email}>
            <Text size="md" className="hover:text-brown-200 transition-colors">Kontakt</Text>
        </EmailLink>
    );
}