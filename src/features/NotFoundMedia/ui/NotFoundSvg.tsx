import { Variant, motion } from 'framer-motion';

export type NotFoundVariants = {
    hidden: Variant;
    visible: Variant;
};

export const NotFoundSvg = ({
    svgVariants,
    pathVariants,
}: {
    svgVariants: NotFoundVariants;
    pathVariants: NotFoundVariants;
}) => (
    <motion.svg
        fill="none"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '454px', width: '100%' }}
        viewBox="0 0 454 231"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            d="M89.9778 228V9L11 156H136.089"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
        />
        <motion.path
            d="M232.991 228C280.633 228 288 160.318 288 115.841C288 68.2426 280.633 9 232.991 9C183.063 9 177.001 71.0465 177 120.192C176.999 167.086 184.757 228 232.991 228Z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
        />
        <motion.path
            d="M404.659 228V9L327 156H450"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
        />
    </motion.svg>
);
