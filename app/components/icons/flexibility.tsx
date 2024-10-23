export type FlexibilityIconProps = {
    color?: string;
}

export default function FlexibilityIcon({ color = '#294290' }: FlexibilityIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24.344*0.8} height={21.71*0.8} viewBox="0 0 24.344 21.71">
            <path d="M37.189,17.88H14a.575.575,0,1,1,0-1.15H37.189a.575.575,0,1,1,0,1.15Z"
                  transform="translate(-13.42 -14.245)"
                  fill={color}/>
            <g transform="translate(3.497)">
                <circle cx="2.6"
                        cy="2.6"
                        r="2.6"
                        transform="translate(0.575 0.575)"
                        fill={color}/>
                <path d="M19.635,20.921a3.175,3.175,0,1,1,3.175-3.175A3.182,3.182,0,0,1,19.635,20.921Zm0-5.2a2.025,2.025,0,1,0,2.025,2.025A2.028,2.028,0,0,0,19.635,15.72Z"
                      transform="translate(-16.46 -14.57)"
                      fill={color}/>
            </g>
            <path d="M37.189,31.22H14a.575.575,0,1,1,0-1.15H37.189a.575.575,0,1,1,0,1.15Z"
                  transform="translate(-13.42 -12.237)"
                  fill={color}/>
            <g transform="translate(3.497 15.359)">
                <circle cx="2.6"
                        cy="2.6"
                        r="2.6"
                        transform="translate(0.575 0.564)"
                        fill={color}/>
                <path d="M19.635,34.271A3.175,3.175,0,1,1,22.811,31.1,3.182,3.182,0,0,1,19.635,34.271Zm0-5.2A2.025,2.025,0,1,0,21.66,31.1,2.028,2.028,0,0,0,19.635,29.07Z"
                      transform="translate(-16.46 -27.92)"
                      fill={color}/>
            </g>
            <g transform="translate(0 7.674)">
                <path d="M37.189,24.55H14a.575.575,0,1,1,0-1.15H37.189a.575.575,0,1,1,0,1.15Z"
                      transform="translate(-13.42 -20.915)"
                      fill={color}/>
                <g transform="translate(14.496)">
                    <circle cx="2.6" cy="2.6" r="2.6"
                            transform="translate(0.575 0.575)"
                            fill={color}/>
                    <path d="M29.2,27.591a3.175,3.175,0,1,1,3.175-3.175A3.182,3.182,0,0,1,29.2,27.591Zm0-5.2a2.025,2.025,0,1,0,2.025,2.025A2.028,2.028,0,0,0,29.2,22.39Z"
                          transform="translate(-26.02 -21.24)"
                          fill={color}/>
                </g>
            </g>
        </svg>
    );
}
