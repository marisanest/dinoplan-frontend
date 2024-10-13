import cn from "clsx";
import Title from "@/components/title";
import Button from "@/components/buttons";

export default function Calculator() {
    return (
        <main className="bg-orange-400 min-h-[calc(100dvh-5rem)] pt-[5rem] flex justify-center items-center w-full">
            <div className="bg-orange-200 rounded-bl-[50px] rounded-tr-[50px] px-x-sm py-y-sm w-sm max-w-sm ">
                <Title>
                    Jetzt Beitrag berechnen
                </Title>
                <Title size="xs">
                    Lorem ipsum
                </Title>

                <div>
                    Starte hier:
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                    <Button className="w-fit" colors="blue">Weiter</Button>
                    <div className="text-blue-600">
                        <a href="/">Zurück</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
