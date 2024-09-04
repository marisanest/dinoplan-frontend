import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">


      <div className="w-screen h-[100dvh] bg-orange-200 rounded-bl-[90px] px-20">

        <div className="text-blue-600 text-7xl font-medium flex flex-col h-[85dvh] justify-center">
          <h1>Dinoplan.</h1>
          <h2>
            Der Plan für dich
            <br/>
            und dein Kind.
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <div className="text-blue-600 text-lg font-light h-[15dvh] w-[500px]">
            <div className="border-b-2 border-b-red-200 pb-2 text-justify w-[500px]">Alles was du brauchst für dein Kind - in nur einem Paket.</div>
            <div className="flex justify-between gap-6 pt-2">
              <div>Erstfallabsicherung</div>
              <div>Geldanlage</div>
              <div>Zusatzversicherung</div>
            </div>
          </div>
        </div>

      </div>


    </main>
  );
}
