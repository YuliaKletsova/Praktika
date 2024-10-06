import initTranslations from '@shared/lib/init-translations';

type PageProps = {
    params: {
        locale: string;
    };
};

export default async function NotFound({ params: { locale } }: PageProps) {
    const { t } = await initTranslations(locale, ['home']);

    return <div>{t('header_menu_home')}</div>;
}
