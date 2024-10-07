import { CSSProperties } from 'react';
import { Button } from 'antd';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useScreenDetector } from '@shared/hooks/useResponsive';

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
    const { isMobile, isSmallMobile } = useScreenDetector();
    const { locale, push } = useRouter();
    const currentPathname = usePathname() || '/';

    const onMenuItemClick = (path: string, newLocale?: string) => {
        let finalLocale = locale;
        toggle();
        if (newLocale) finalLocale = newLocale;
        push(path, undefined, { locale: finalLocale });
    };

    return (
        <nav
            className="clientMenu"
            style={{ paddingTop: isMobile || isSmallMobile ? '50px' : '100px' }}
        >
            <ul className="clientMenuUl">
                {menu.map((item) => (
                    <LiComponent
                        key={item.text}
                        text={t(item.text)}
                        onClick={() => onMenuItemClick(item.path)}
                        styles={
                            item.path !== currentPathname
                                ? { opacity: 0.5 }
                                : undefined
                        }
                    />
                ))}
            </ul>
            <ul
                className="clientMenuUl"
                style={{
                    paddingTop: isMobile ? '50px' : '100px',
                }}
            >
                {languages.map((item) => (
                    <LiComponent
                        key={item.text}
                        text={item.text}
                        onClick={() =>
                            onMenuItemClick(currentPathname, item.locale)
                        }
                        styles={
                            item.locale !== locale
                                ? { opacity: 0.5 }
                                : undefined
                        }
                    />
                ))}
            </ul>
        </nav>
    );
};

const LiComponent = ({
    text,
    onClick,
    styles,
}: {
    text: string;
    onClick: () => void;
    styles?: CSSProperties;
}) => {
    return (
        <li className="clientMenuLi">
            <Button
                type="link"
                onClick={onClick}
                style={{
                    fontWeight: 'bold',
                    fontSize: '32px',
                    padding: '10px',
                    color: 'white',
                    width: '100%',
                    ...styles,
                }}
            >
                {text}
            </Button>
        </li>
    );
};
