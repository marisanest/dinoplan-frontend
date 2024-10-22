"use client"

import {AdvancedImage} from "@cloudinary/react";
import {cloudinary} from "@/lib/cloudinary";

import {useState} from "react";
import CalculatorStageStart from "@/rechner/components/stages/start";
import CalculatorStageFurtherInfo from "@/rechner/components/stages/furtherInfo";
import CalculatorStageServiceModules from "@/rechner/components/stages/serviceModules";

export const imagePath = 'dinoplan/Dinoplan_Final_Files_Footer_cropped_gcfull_pf7xn0';

const stages = {
    'start': {prevKey: null, key: 'start', nextKey: 'furtherInfo'},
    'furtherInfo': {prevKey: 'start', key: 'furtherInfo', nextKey: 'serviceModules'},
    'serviceModules': {prevKey: 'furtherInfo', key: 'serviceModules', nextKey: null},
}

export default function Calculator({serviceSegments, contact}) {
   const [stageKey, setStageKey] = useState(Object.keys(stages)[0])

    return (
        <main className="bg-orange-400 min-h-[calc(100dvh-5rem)] pt-[9rem] flex flex-col justify-between items-center w-full">
            {stageKey === 'start' && <CalculatorStageStart stage={stages[stageKey]} setStageKey={setStageKey} />}
            {stageKey === 'furtherInfo' && <CalculatorStageFurtherInfo stage={stages[stageKey]} setStageKey={setStageKey} />}
            {stageKey === 'serviceModules' && <CalculatorStageServiceModules stage={stages[stageKey]} setStageKey={setStageKey} serviceSegments={serviceSegments} contact={contact} />}
            <AdvancedImage className="w-full max-w-[1500px] h-auto pointer-events-none mt-[-200px]" cldImg={cloudinary.image(imagePath)} />
        </main>
    );
}
