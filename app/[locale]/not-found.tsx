import { TranslationsProvider } from '@app/providers/TranslationsProvider';
import { NotFound } from '@pages/NotFound';
import initTranslations from '@shared/lib/init-translations';

type PageProps = {
    params: {
        locale: string;
    };
};

export default async function Page({ params: { locale } }: PageProps) {
    await initTranslations(locale, ['home']);

    return (
        <TranslationsProvider locale={locale} namespaces={['common']}>
            <main>
                <NotFound />
            </main>
        </TranslationsProvider>
    );
}
