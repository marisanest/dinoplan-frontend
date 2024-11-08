import CalculatorStartForm from "@/rechner/start/components/form";

export default function CalculatorStart() {
    return (
        <main className="w-full min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image))] flex justify-center pt-[9rem] bg-orange-400">
            <CalculatorStartForm />
        </main>
    );
}
