"use client"
import {cloudinary} from "@/lib/cloudinary";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {AdvancedImage} from "@cloudinary/react";
import {LandingDinoSegmentProps} from "@/app/(landing)/dino/segment/index";
import useDinoCardStore from "@/lib/stores/useDinoCardStore";
import {useShallow} from "zustand/react/shallow";

export default function LandingDinoSegmentImage({segment}: LandingDinoSegmentProps) {
    const myImage = cloudinary.image(segment.image);
    myImage.resize(scale().width(2833));

    const { selectSegment } = useDinoCardStore(
        useShallow((state) => ({
            selectSegment: state.selectSegment,
        })),
    );

    return (
        <div className="cursor-pointer" onClick={() => selectSegment(segment)}>
            <AdvancedImage className={segment.width} cldImg={myImage}/>
        </div>
    );
}
