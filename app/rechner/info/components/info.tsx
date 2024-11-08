import CalculatorInfoForm from "@/rechner/info/components/form";

export default function CalculatorInfo() {
    return (
        <main className="w-full min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image))] flex justify-center pt-[9rem] bg-orange-400">
            <CalculatorInfoForm />
        </main>
    );
}
