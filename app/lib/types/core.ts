import {ReactNode} from "react";

export type ReactNodeProps = {
    className?: string;
    children?: ReactNode;
}

export type ScreenSizeType = {
    isXs: boolean;
};

export type DinoSegmentType = {
    id: number,
    title: string,
    description: string,
    image: string,
    checkmarks: CheckmarksType,
    width: string
};

export type CheckmarksType = {
    items: string[];
    dot: DotType;
};

export type DotType = {
    backgroundColor?: string;
};

export type KeyPointType = {
    id: number;
    title: string;
    image: string;
}

export type ServiceType = {
    id: number;
    title: string;
    segment: 'Sparen' | 'Ernstfallabsicherung' | 'Zusatzversicherungen';
    example: ServiceExampleType;
}

export type ServiceExampleType = {
    input: string[];
    output: string[];
}

export type LinkType = {
    type: 'internal' | 'external' | 'email';
    url: string;
}


export type Characteristic = {
    id: number;
    title: string;
    description: string;
    iconComponent: ReactNode;
}

export type QuestionType = {
    id: number;
    question: string;
    answer: string;
}

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

export interface WindowSizeType {
    width: number | null;
    height: number | null;
}
