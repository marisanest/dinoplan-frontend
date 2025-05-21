import Calendar from "@/kalender/components/calendar";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/metadata";

export const metadata: Metadata = getMetadata(
    "Dinoplan | Kalender",
    "Vereinbare jetzt einen Termin!",
);

export default async function LandingPage() {
  return <Calendar />;
}