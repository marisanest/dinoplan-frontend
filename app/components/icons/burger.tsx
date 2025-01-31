import { motion } from 'motion/react';

const TOP_OFFSET = 1;
const WIDTH = 24;
const STROKE_WIDTH = 2;
const GAP = 6;

type BurgerIconProps = {
    isActive: boolean;
    toggleActive: () => void;
}

export default function BurgerIcon({isActive, toggleActive}: BurgerIconProps) {
    return (

            <motion.svg
                className="cursor-pointer"
                width={WIDTH}
                height={TOP_OFFSET + 3 * STROKE_WIDTH + 2 * GAP + 4}
                viewBox={`0 0 ${WIDTH} ${TOP_OFFSET + 3 * STROKE_WIDTH + 2 * GAP + 4}`}
                initial="inactive"
                animate={isActive ? 'active' : 'inactive'}
                onClick={toggleActive}
            >
                <BurgerIconStroke
                    variants={{
                        inactive: {d: `M 0 ${TOP_OFFSET} L ${WIDTH} ${TOP_OFFSET}`},
                        active: {
                            d: `M 0 ${TOP_OFFSET + 2 * STROKE_WIDTH + 2 * GAP + 4} L ${WIDTH} ${TOP_OFFSET}`,
                        },
                    }}
                />
                <BurgerIconStroke
                    d={`M 0 ${TOP_OFFSET + STROKE_WIDTH + GAP} L ${WIDTH} ${TOP_OFFSET + STROKE_WIDTH + GAP}`}
                    variants={{
                        inactive: {opacity: 1},
                        active: {opacity: 0},
                    }}
                    transition={{duration: 0.1}}
                />
                <BurgerIconStroke
                    variants={{
                        inactive: {
                            d: `M 0 ${TOP_OFFSET + 2 * STROKE_WIDTH + 2 * GAP} L ${WIDTH} ${TOP_OFFSET + 2 * STROKE_WIDTH + 2 * GAP}`,
                        },
                        active: {
                            d: `M 0 ${TOP_OFFSET} L ${WIDTH} ${TOP_OFFSET + 2 * STROKE_WIDTH + 2 * GAP + 4}`,
                        },
                    }}
                />
            </motion.svg>
    );
}


function BurgerIconStroke({
                              strokeWidth = STROKE_WIDTH,
                              strokeColor = "#294290",
                              d,
                              variants,
                              transition,
                          }: {
    strokeWidth?: number;
    strokeColor?: string;
    d?: string;
    variants?: { inactive: any; active: any };
    transition?: any;
}) {
    return (
        <motion.path
            strokeWidth={strokeWidth}
            stroke={strokeColor}
            d={d}
            variants={variants}
            transition={transition}
        />
    );
}