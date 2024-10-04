export type HeartIconProps = {
    color?: string;
}

export default function HeartIcon({ color = '#294290' }: HeartIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={25*0.8} height={22.061*0.8} viewBox="0 0 25 22.061">
            <path d="M23.027,2.023a6.717,6.717,0,0,0-9.561,0l-.94.94-.94-.94a6.761,6.761,0,0,0-9.561,9.561l10.5,10.5,10.5-10.5a6.717,6.717,0,0,0,0-9.561" fill={color}/>
        </svg>
    );
}
