export type InfoIconProps = {
    color?: string;
    width?: number;
    height?: number;
}

export default function InfoIcon({ color = '#294290', width = 20, height = 20 }: InfoIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 24 24">
            <path fill={color} d="M 12 2 C 6.4889941 2 2 6.4889982 2 12 C 2 17.511002 6.4889941 22 12 22 C 17.511006 22 22 17.511002 22 12 C 22 6.4889982 17.511006 2 12 2 z M 12 4 C 16.430126 4 20 7.5698765 20 12 C 20 16.430123 16.430126 20 12 20 C 7.5698737 20 4 16.430123 4 12 C 4 7.5698765 7.5698737 4 12 4 z M 12 7 A 1 1 0 0 0 12 9 A 1 1 0 0 0 12 7 z M 11.984375 10.986328 A 1.0001 1.0001 0 0 0 11 12 L 11 17 A 1.0001 1.0001 0 1 0 13 17 L 13 12 A 1.0001 1.0001 0 0 0 11.984375 10.986328 z">

            </path>
        </svg>
    );
}
