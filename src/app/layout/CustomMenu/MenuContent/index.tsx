import { Button } from 'antd';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import styles from './MenuContent.module.scss';

const menu = [
    { text: 'header_menu_home', path: '/' },
    { text: 'header_menu_application', path: '/application' },
    { text: 'header_menu_contacts', path: '/contacts' },
];

const languages = [
    { text: 'Русский', locale: 'ru' },
    { text: 'English', locale: 'en' },
    { text: 'ქართული', locale: 'ka' },
];

export const MenuContent = ({ toggle }: { toggle: () => void }) => {
    const { t } = useTranslation();
    const { locale, push } = useRouter();
    const currentPathname = usePathname() || '/';

    const onMenuItemClick = (path: string, newLocale?: string) => {
        let finalLocale = locale;
        toggle();
        if (newLocale) finalLocale = newLocale;
        push(path, undefined, { locale: finalLocale });
    };

    return (
        <nav className={styles.clientMenu}>
            <ul className={styles.clientMenuUl}>
                {menu.map((item) => (
                    <li key={item.text} className={styles.clientMenuLi}>
                        <Button
                            type="link"
                            onClick={() => onMenuItemClick(item.path)}
                            className={styles.buttonLink}
                            style={
                                item.path !== currentPathname
                                    ? { opacity: 0.5 }
                                    : undefined
                            }
                        >
                            {t(item.text)}
                        </Button>
                    </li>
                ))}
            </ul>
            <ul className={styles.clientMenuUl}>
                {languages.map((item) => (
                    <li key={item.text} className={styles.clientMenuLi}>
                        <Button
                            type="link"
                            onClick={() =>
                                onMenuItemClick(currentPathname, item.locale)
                            }
                            className={styles.buttonLink}
                            style={
                                item.locale !== locale
                                    ? { opacity: 0.5 }
                                    : undefined
                            }
                        >
                            {item.text}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
