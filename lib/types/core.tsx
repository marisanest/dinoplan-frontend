import {ReactNode} from "react";

export type ReactNodeProps = {
    className?: string;
    children?: ReactNode;
}

export type WindowSizeType = {
    width: number;
    height: number;
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
    id: number,
    title: string,
    image: string,
}
