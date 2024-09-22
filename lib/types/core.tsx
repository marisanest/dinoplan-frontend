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
    width: string
};

export type KeyPointType = {
    id: number,
    title: string,
    image: string,
}
