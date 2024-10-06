import { BrokenDrumstick } from './ui/BrokenDrumstick';
import { NotFoundSvg } from './ui/NotFoundSvg';

export const NotFoundMedia = () => {
    return (
        <>
            <NotFoundSvg
                svgVariants={{
                    hidden: { rotate: 0 },
                    visible: {
                        rotate: 0,
                        transition: { duration: 1 },
                    },
                }}
                pathVariants={{
                    hidden: {
                        opacity: 0,
                        pathLength: 0,
                    },
                    visible: {
                        opacity: 1,
                        pathLength: 1,
                        transition: {
                            duration: 1,
                            ease: 'easeInOut',
                        },
                    },
                }}
            />
            <BrokenDrumstick
                stroke="#000"
                width={300}
                height={70}
                strokeWidth={1}
            />
        </>
    );
};
