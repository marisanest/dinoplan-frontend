"use client"

import {AdvancedImage} from "@cloudinary/react";
import {cloudinary} from "@/lib/cloudinary";

import CalculatorFirst from "@/rechner/components/first";
import {useState} from "react";
import CalculatorSecond from "@/rechner/components/second";
import CalculatorThird from "@/rechner/components/third";

export const imagePath = 'dinoplan/Dinoplan_Final_Files_Footer_cropped_gcfull_pf7xn0';

export default function Calculator({serviceSegments}) {
   const [stage, setStage] = useState(1)

    return (
        <main className="bg-orange-400 min-h-[calc(100dvh-5rem)] pt-[9rem] flex flex-col justify-between items-center w-full">
            {stage === 1 && <CalculatorFirst setStage={setStage}/>}
            {stage === 2 && <CalculatorSecond setStage={setStage}/>}
            {stage === 3 && <CalculatorThird setStage={setStage} serviceSegments={serviceSegments}/>}
            <AdvancedImage className="w-full max-w-[1500px] h-auto pointer-events-none mt-[-200px]"
                           cldImg={cloudinary.image(imagePath)} />
        </main>
    );
}
