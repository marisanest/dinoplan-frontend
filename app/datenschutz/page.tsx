import Privacy from "@/datenschutz/components/privacy";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";

export const metadata: Metadata = getMetadata(
    "Dinoplan | Datenschutz"
);

export default async function PrivacyPage() {
  return <Privacy />;
}