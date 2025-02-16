import InternalLink from "@/components/link/internal";
import Text from "@/components/text/text";

export default function FooterBannerImprint() {
    return (
        <InternalLink className="text-blue-600" href="/impressum">
            <Text size="md" className="hover:text-brown-200 transition-colors">Impressum</Text>
        </InternalLink>
    );
}