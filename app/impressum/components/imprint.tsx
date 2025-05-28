import Title from "@/components/title";
import Text from "@/components/text/text";

export default function Imprint() {
    return (
        <main className="bg-orange-300 min-h-[calc(100dvh-var(--height-banner)-var(--height-footer-image)+var(--spacing-footer-image-correction))] h-fit pt-[calc(var(--height-banner)+var(--spacing-y-block))] pb-[var(--spacing-y-block)] px-x-outer flex flex-col gap-y-[24px] justify-center items-center w-full">
            <div>
                <Title className="mb-[24px]">
                    <h1>Impressum</h1>
                </Title>
                <Text size="md">
                    <div>
                        <p>
                            Dominik Nolden<br/>
                            Versicherungsmakler<br/>
                            Baron-Carl-Straße 7<br/>
                            74740 Adelsheim
                        </p>
                    </div>
                </Text>
            </div>

            <div>
                <Title className="mb-[16px]" size="md">
                    <h2>Kontakt</h2>
                </Title>
                <Text size="md">
                    <div>
                        <p>
                            Telefon: +49 (0) 171 230 2322<br/>
                            E-Mail:  <a href="mailto:hallo@dinoplan.de" target="_blank" rel="noopener noreferrer">hallo@dinoplan.de</a>
                        </p>
                    </div>
                </Text>
            </div>

           <div>
               <Title className="mb-[16px]" size="md">
                   <h2>Vermittlerregister</h2>
               </Title>
               <Text size="md">
                   <p>
                       Registrierungs-Nr.: D-O201-J8FRL-18<br/>
                       <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer">www.vermittlerregister.info</a>
                   </p>
               </Text>
           </div>

            <div>
                <Title className="mb-[16px]" size="md">
                    <h2>Aufsichtsbeh&ouml;rde</h2>
                </Title>
                <Text size="md">
                    <p>
                        IHK Rhein-Neckar<br />
                        Industrie- und Handelskammer Rhein-Neckar<br />
                        L 1, 2, 68161 Mannheim<br />
                        <a href="https://www.ihk.de/rhein-neckar/" target="_blank" rel="noopener noreferrer">https://www.ihk.de/rhein-neckar/</a>
                    </p>
                </Text>
            </div>

            <div>
                <Title className="mb-[16px]" size="md">
                    <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                </Title>
                <Text size="md">
                    <p>
                        Berufsbezeichnung: Versicherungsmakler<br/>
                        Zust&auml;ndige Kammer: IHK Rhein-Neckar<br/>
                        Verliehen in: Deutschland<br/><br/>

                        Es gelten folgende berufsrechtliche Regelungen:<br/>
                        &sect; 34d Abs. 1 Gewerbeordnung<br/>
                        {/*einsehbar unter: &#91;Link zur berufsrechtlichen Regelung&#93;*/}
                    </p>
                </Text>
            </div>

            <div>
                <Title className="mb-[16px]" size="md">
                    <h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
                </Title>
                <Text size="md">
                    <p>
                        Name und Sitz des Versicherers: R+V<br/>
                        Geltungsraum der Versicherung: Deutschland
                    </p>
                </Text>
            </div>
        </main>
    );
}