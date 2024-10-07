'use client';
import { Flex, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { NotFoundMedia } from '@features/NotFoundMedia';
import { AnimatedBorderButton } from '@features/AnimatedBorderButton';
import styles from './NotFound.module.scss';

export const NotFound = () => {
    const { t } = useTranslation();

    return (
        <Flex
            vertical
            align="center"
            justify="center"
            className={styles.wrapper}
        >
            <NotFoundMedia />
            <Typography.Title level={3}>
                {t('common:404_title')}
            </Typography.Title>
            <AnimatedBorderButton />
        </Flex>
    );
};
