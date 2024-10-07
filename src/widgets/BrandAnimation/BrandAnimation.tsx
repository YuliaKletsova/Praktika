'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Flex } from 'antd';
import { useScreenDetector } from '@shared/hooks/useResponsive';
import styles from './BrandAnimation.module.scss';

export const BrandAnimation = ({ children }: { children: ReactNode }) => {
    const { isDesktop } = useScreenDetector();
    const finalHeight = !isDesktop
        ? window.innerHeight * 0.75
        : window.innerHeight * 0.8;
    const praktika = 'ráktika'.split('');

    return (
        <Flex vertical className={styles.wrapper}>
            <motion.div
                style={{ marginLeft: '15px' }}
                animate={{
                    y: [finalHeight / 3, 0],
                    transition: {
                        duration: 0.3,
                        delay: 1,
                    },
                }}
            >
                <motion.img
                    src={'/logo.png'}
                    alt="praktika-logo"
                    key="image"
                    className={styles.image}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1],
                        transition: {
                            duration: 0.1,
                        },
                    }}
                />
                {praktika.map((el, i) => (
                    <motion.span
                        className={styles.text}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.2,
                            delay: i / 10 + 0.15,
                        }}
                        key={i}
                    >
                        {el}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                className={styles.contentWrapper}
                animate={{
                    opacity: [0, 1],
                    transition: {
                        duration: 1,
                        delay: 1.3,
                    },
                }}
            >
                {children}
            </motion.div>
        </Flex>
    );
};
