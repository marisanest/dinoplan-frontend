"use client"

import {useState} from "react";
import CalculatorStageStart from "@/rechner/components/stages/start";
import CalculatorStageFurtherInfo from "@/rechner/components/stages/furtherInfo";
import CalculatorStageCalculation from "@/rechner/components/stages/calculation";
import FooterImage from "@/components/footer/image";

const stages = {
    'start': {prevKey: null, key: 'start', nextKey: 'furtherInfo'},
    'furtherInfo': {prevKey: 'start', key: 'furtherInfo', nextKey: 'calculation'},
    'calculation': {prevKey: 'furtherInfo', key: 'serviceModules', nextKey: null},
}

export default function Calculator({serviceSegments, costCalculation, contact}) {
   const [stageKey, setStageKey] = useState(Object.keys(stages)[0])

    return (
        <main className="w-full min-h-[calc(100dvh-var(--height-banner))] flex flex-col items-center pt-[9rem] bg-orange-400">
            {stageKey === 'start' && <CalculatorStageStart stage={stages[stageKey]} setStageKey={setStageKey} />}
            {stageKey === 'furtherInfo' && <CalculatorStageFurtherInfo stage={stages[stageKey]} setStageKey={setStageKey} />}
            {stageKey === 'calculation' && <CalculatorStageCalculation stage={stages[stageKey]} setStageKey={setStageKey} serviceSegments={serviceSegments} costCalculation={costCalculation} contact={contact} />}
            <FooterImage />
        </main>
    );
}
