import InternalLink from "@/components/link/internal";
import Text from "@/components/text/text";

export default function FooterBannerPrivacy() {
    return (
        <InternalLink className="text-blue-600" href="/datenschutz">
            <Text size="md" className="hover:text-brown-200 transition-colors">Datenschutz</Text>
        </InternalLink>
    );
}