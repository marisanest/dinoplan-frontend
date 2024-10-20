"use client"

import CalculatorFirst from "@/rechner/components/first";
import {useState} from "react";
import CalculatorSecond from "@/rechner/components/second";
import CalculatorThird from "@/rechner/components/third";

export default function Calculator({serviceSegments}) {
   const [stage, setStage] = useState(1)

    return (
        <main className="bg-orange-400 min-h-[calc(100dvh-5rem)] pt-[5rem] flex justify-center items-center w-full">
            <div className="py-[5rem]">
                {stage === 1 && <CalculatorFirst setStage={setStage}/>}
                {stage === 2 && <CalculatorSecond setStage={setStage}/>}
                {stage === 3 && <CalculatorThird setStage={setStage} serviceSegments={serviceSegments}/>}
            </div>
        </main>
    );
}
