'use client';
import React from 'react';
import { Flex } from 'antd';
import { MobileLinks } from '@features/MobileLinks/MobileLinks';
import { LaptopLinks } from '@features/LaptopLinks';
import { useScreenDetector } from '@shared/hooks/useResponsive';
import styles from './CardContent.module.scss';
import { StudioInfo, GoogleMap } from './ui';

export const CardContent = () => {
    const { isTablet, isDesktop } = useScreenDetector();

    return (
        <Flex
            vertical
            justify="space-between"
            gap={50}
            className={styles.cardContent}
        >
            {isDesktop || isTablet ? (
                <>
                    <StudioInfo />
                    <LaptopLinks />
                    <GoogleMap />
                </>
            ) : (
                <MobileLinks />
            )}
        </Flex>
    );
};
