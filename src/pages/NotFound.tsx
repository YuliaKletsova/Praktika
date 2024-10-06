'use client';
import { Flex, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { NotFoundMedia } from '@widgets/NotFoundMedia';
import { AnimatedBorderButton } from '@features/navigate-home';

export const NotFound = () => {
    const { t } = useTranslation();

    return (
        <Flex
            vertical
            align="center"
            justify="center"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: 'url(/p.png)',
            }}
        >
            <NotFoundMedia />
            <Typography.Title level={3}>{t('404_title')}</Typography.Title>
            <AnimatedBorderButton />
        </Flex>
    );
};
