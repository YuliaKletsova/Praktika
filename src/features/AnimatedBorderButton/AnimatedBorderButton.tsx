import { Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './AnimatedBorderButton.module.scss';

export const AnimatedBorderButton = () => {
    const { t } = useTranslation();
    const { push } = useRouter();

    return (
        <motion.button
            initial={{
                backgroundImage: `linear-gradient(to right, white, white), linear-gradient(0deg, #5e63e8, white 40%)`,
            }}
            animate={{
                backgroundImage: `linear-gradient(to right, white, white), linear-gradient(360deg, #5e63e8, white 40%)`,
            }}
            transition={{
                type: 'tween',
                ease: 'linear',
                duration: 2,
                delay: 1,
                repeat: Infinity,
            }}
            className={styles.button}
            onClick={() => push('/')}
        >
            <Typography.Title level={5} style={{ margin: 0 }}>
                {t('go_home')}
            </Typography.Title>
        </motion.button>
    );
};
