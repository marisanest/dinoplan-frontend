export type InfoIconProps = {
    color?: string;
    width?: number;
    height?: number;
}

export default function CrossIcon({ color = '#294290', width = 14, height = 14 }: InfoIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill={color} width={width} height={height} viewBox="0 0 24 24">
            <path d="M 4.2382812 2.9882812 A 1.250125 1.250125 0 0 0 3.3671875 5.1347656 L 10.232422 12 L 3.3613281 18.869141 A 1.2512475 1.2512475 0 1 0 5.1308594 20.638672 L 12 13.767578 L 18.865234 20.632812 A 1.250125 1.250125 0 1 0 20.632812 18.865234 L 13.767578 12 L 20.625 5.1425781 A 1.250125 1.250125 0 1 0 18.857422 3.375 L 12 10.232422 L 5.1347656 3.3671875 A 1.250125 1.250125 0 0 0 4.2382812 2.9882812 z"></path>
        </svg>
    );
}
