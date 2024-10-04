export type CircleIconProps = {
    color?: string;
}

export default function CircleIcon({ color = '#294290' }: CircleIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <rect width="100%" height="100%" rx="99" fill={color} />
        </svg>
    );
}
