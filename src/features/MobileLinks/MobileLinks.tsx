import {
    ArrowRightOutlined,
    InstagramOutlined,
    PhoneOutlined,
} from '@ant-design/icons';
import { Flex, Typography } from 'antd';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@shared/styles/variables';
import { LocationPinIcon, TelegramIcon } from './ui';
import styles from './MobileLinks.module.scss';

const links = [
    {
        title: 'INSTAGRAM',
        href: 'https://www.instagram.com/praktikastudio/',
        icon: <InstagramOutlined className={styles.icon} />,
    },
    {
        title: 'CHANNEL',
        href: 'https://t.me/praktikastudio_ch',
        icon: <TelegramIcon width={20} fill={COLORS.black} />,
    },
    {
        title: 'CHAT',
        href: 'https://t.me/+ACspuFKLISBkMjky',
        icon: <TelegramIcon width={20} fill={COLORS.black} />,
    },
    {
        title: 'GOOGLE MAPS',
        href: 'https://goo.gl/maps/mQv4W9rRn1dmJStN6',
        icon: <LocationPinIcon width={25} fill={COLORS.black} />,
    },
    {
        title: 'PHONE',
        href: 'tel:+995551613311',
        icon: <PhoneOutlined className={styles.icon} />,
    },
];

export const MobileLinks = () => {
    const { t } = useTranslation();

    return (
        <Flex vertical>
            <Flex vertical className={styles.info}>
                <Typography.Text className={styles.title}>
                    {t('contacts:addressPrefix')}
                </Typography.Text>
                <Typography.Text className={styles.title}>
                    {t('contacts:addressMain')}
                </Typography.Text>
                <Typography.Text className={styles.subtitle}>
                    {t('contacts:workingHoursMobile')}
                </Typography.Text>
            </Flex>
            <Flex vertical gap="15px" className={styles.buttonsList}>
                {links.map((link, i) => (
                    <Link key={i} href={link.href} target="_blank">
                        <Flex
                            align="center"
                            justify="space-between"
                            className={styles.linkStyle}
                        >
                            <Flex align="center" gap={5}>
                                {link.icon}
                                {link.title}
                            </Flex>
                            <ArrowRightOutlined />
                        </Flex>
                    </Link>
                ))}
            </Flex>
        </Flex>
    );
};
