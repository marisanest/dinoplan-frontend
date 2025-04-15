import Imprint from "@/impressum/components/imprint";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";

export const metadata: Metadata = getMetadata(
    "Dinoplan | Impressum"
)

export default function ImprintPage() {
  return <Imprint />;
}