import { Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@shared/styles/variables';

export const AnimatedBorderButton = () => {
    const { t } = useTranslation();
    const { push } = useRouter();

    return (
        <motion.button
            initial={{
                backgroundImage: `linear-gradient(to right, white, white), linear-gradient(0deg, ${COLORS.blue}, white 40%)`,
            }}
            animate={{
                backgroundImage: `linear-gradient(to right, white, white), linear-gradient(360deg, ${COLORS.blue}, white 40%)`,
            }}
            transition={{
                type: 'tween',
                ease: 'linear',
                duration: 2,
                delay: 1,
                repeat: Infinity,
            }}
            style={{
                border: '2px solid transparent',
                borderRadius: '20px',
                backgroundClip: 'padding-box, border-box',
                backgroundOrigin: 'padding-box, border-box',
                width: 150,
                height: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
            }}
            onClick={() => push('/')}
        >
            <Typography.Title level={5} style={{ margin: 0 }}>
                {t('go_home')}
            </Typography.Title>
        </motion.button>
    );
};
