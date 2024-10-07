import { useState } from 'react';
import cn from 'classnames';
import { Flex } from 'antd';
import { motion } from 'framer-motion';
import { LinkOutlined } from '@ant-design/icons';
import { useScreenDetector } from '@shared/hooks/useResponsive';
import styles from './LaptopLinks.module.scss';

const items = [
    {
        title: 'INSTAGRAM',
        href: 'https://www.instagram.com/praktikastudio/',
    },
    {
        title: 'TELEGRAM CHANNEL',
        href: 'https://t.me/praktikastudio_ch',
    },
    {
        title: 'TELEGRAM CHAT',
        href: 'https://t.me/+ACspuFKLISBkMjky',
    },
];

const transition = {
    duration: 0.3,
    ease: [0.6, 0.01, 0.05, 0.95],
    type: 'tween',
};

const titleTransition = {
    staggerChildren: 0.03,
};

export const LaptopLinks = () => (
    <Flex justify="space-between">
        {items.map((item, i) => (
            <AnimatedLink title={item.title} href={item.href} key={i} />
        ))}
    </Flex>
);

const AnimatedLink = ({ title, href }: { title: string; href: string }) => {
    const [isHovered, setHovered] = useState(false);
    const { isTablet } = useScreenDetector();

    return (
        <motion.a
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(styles.wrapper, styles.relativeBlock)}
            href={href}
        >
            <Flex gap={5}>
                <AnimatedWord
                    title={title}
                    animation={{
                        rest: {
                            y: 0,
                        },
                        hover: {
                            y: -30,
                            transition,
                        },
                    }}
                    isHovered={isHovered}
                />
                {!isTablet && href && (
                    <LinkOutlined style={{ fontSize: '20px' }} />
                )}
            </Flex>
            <div className={styles.hiddenBlock}>
                <AnimatedWord
                    title={title}
                    animation={{
                        rest: {
                            y: 30,
                        },
                        hover: {
                            y: 0,
                            transition,
                        },
                    }}
                    isHovered={isHovered}
                />
            </div>
        </motion.a>
    );
};

const AnimatedWord = ({
    title,
    animation,
    isHovered,
}: {
    title: string;
    animation: { rest: object; hover: object };
    isHovered: boolean;
}) => {
    return (
        <motion.span
            variants={{
                rest: {
                    transition: titleTransition,
                },
                hover: {
                    transition: titleTransition,
                },
            }}
            initial="rest"
            animate={isHovered ? 'hover' : 'rest'}
            className={styles.relativeBlock}
        >
            {title.split('').map((character, i) =>
                character === ' ' ? (
                    <span key={i}>&nbsp;</span>
                ) : (
                    <motion.span
                        key={i}
                        variants={animation}
                        className={cn(styles.char, styles.relativeBlock)}
                    >
                        {character}
                    </motion.span>
                ),
            )}
        </motion.span>
    );
};
