"use client"

export default function Calendar() {
    return (
        <main className="min-w-[100dvw] w-[100dvw] max-w-[100dvw] min-h-[100dvh] flex justify-center pt-banner bg-orange-400">
            <div className="flex pt-y-m">
              <iframe className="w-[375px] min-w-[375px] max-w-[375px] h-[2268px] xs:w-[420px] xs:min-w-[420px] xs:max-w-[420px] xs:h-[2248px]"
                      src='https://outlook.office.com/owa/calendar/Dinoplan@finanzhebel.de/bookings/?ismsaljsauthenabled'
                      height='100%'
              />
            </div>
        </main>
    );
}