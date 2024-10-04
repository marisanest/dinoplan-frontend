import {Characteristic, ReactNodeProps} from "@/lib/types/core";
import LandingAboutBoxCharacteristic from "@/(landing)/about/box/characteristics/characteristic";
import HeartIcon from "@/components/icons/heart";
import FlexibilityIcon from "@/components/icons/flexibility";
import CircleIcon from "@/components/icons/circle";

const characteristics: Characteristic[] = [
    {
        id: 1,
        title: 'Leidenschaft',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra volutpat consequat. Maecenas non iaculis dolor.',
        iconComponent: <HeartIcon />,
    },
    {
        id: 2,
        title: 'Transparenz',
        description: 'Mauris viverra volutpat consequat. Maecenas non iaculis dolor. Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit.',
        iconComponent: <CircleIcon />,
    },
    {
        id: 3,
        title: 'Flexibilität',
        description: 'Aliquam facilisis dolor vel elementum mollis. Nullam dapibus at ligula eget hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        iconComponent: <FlexibilityIcon />,
    },
]

export default function LandingAboutBoxCharacteristics() {
    return (
        <LandingAboutBoxCharacteristicsContainer>
            {characteristics.map((characteristic) => (
                <LandingAboutBoxCharacteristic key={characteristic.id} characteristic={characteristic} />
            ))}
        </LandingAboutBoxCharacteristicsContainer>
    );
}

function LandingAboutBoxCharacteristicsContainer({children}: ReactNodeProps) {
    return (
        <div className="flex flex-col gap-8 w-full h-full justify-center items-start">
            {children}
        </div>
    );
}