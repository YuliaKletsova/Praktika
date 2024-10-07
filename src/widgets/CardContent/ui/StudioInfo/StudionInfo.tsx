import { Flex, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './StudioInfo.module.scss';

export const StudioInfo = () => {
    const { t } = useTranslation();

    return (
        <Flex vertical align="baseline" gap="10px">
            <Typography.Title level={3} className={styles.text}>
                {t('content_work_hours')}
            </Typography.Title>
            <Typography.Title level={3} className={styles.text}>
                {t('content_contact_us')}
            </Typography.Title>
        </Flex>
    );
};
