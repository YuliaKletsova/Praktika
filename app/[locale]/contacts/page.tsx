// import initTranslations from '@shared/lib/init-translations';

type HomeProps = {
    params: {
        locale: string;
    };
};

export default async function Home({ params: { locale } }: HomeProps) {
    // const { t } = await initTranslations(locale, ['admin']);

    return (
        <main>
            {locale}
            <h1>Contacts</h1>
        </main>
    );
}
