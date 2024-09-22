export type CheckmarkIconProps = {
    strokeColor?: string;
}

export default function CheckmarkIcon({ strokeColor = '#F7F2EA' }: CheckmarkIconProps) {

    return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g>
                <path stroke={strokeColor} stroke-width="2" d="M6.5 17l6 6 13-13"></path>
            </g>
        </svg>

    );
}
