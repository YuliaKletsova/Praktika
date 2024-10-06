import initTranslations from '@shared/lib/init-translations';

type HomeProps = {
    params: {
        locale: string;
    };
};

export default async function Home({ params: { locale } }: HomeProps) {
    const { t } = await initTranslations(locale, ['home']);

    return (
        <main>
            <h1>{t('header_menu_home')}</h1>
        </main>
    );
}
