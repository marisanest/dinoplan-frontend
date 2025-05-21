import React, {useState} from "react";

export default function CalculatorCalculationCtasAppointmentEmbed({
                                                                      baseUrl,
                                                                      isAppointmentEmbedVisible,
}: {
    baseUrl: string;
    isAppointmentEmbedVisible: boolean;
}) {
    const [height, setHeight] = useState<number>(0)

    return (
        <div className="transition-[height] duration-700 overflow-y-hidden" style={{height: isAppointmentEmbedVisible ? `${height}px` : '0px'}}>
            <div ref={el => setHeight(el?.clientHeight ?? 0)}>
              <div className="flex mt-y-xs">
                <iframe className="w-[calc(375px-48px)] min-w-[calc(375px-48px)] max-w-[calc(375px-48px)] h-[2219px] xs:w-[420px] xs:min-w-[420px] xs:max-w-[420px] xs:h-[2248px]"
                        src='https://outlook.office.com/owa/calendar/Dinoplan@finanzhebel.de/bookings/?ismsaljsauthenabled'
                        height='100%'
                />
              </div>
            </div>
        </div>
    );
}