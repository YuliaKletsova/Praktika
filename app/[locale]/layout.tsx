import type { Metadata } from 'next';
import { dir } from 'i18next';
import { Providers } from '@app/providers';
import { i18nConfig } from '@app/config/i18n.config';
import { MainLayout } from '@app/layout';
import '@app/styles/global.scss';

export const metadata: Metadata = {
    title: 'Praktika',
    description: 'Praktika rehearsal studio',
};

export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: {
        locale: string;
    };
}>) {
    return (
        <html lang={locale} dir={dir(locale)}>
            <head>
                <title>Praktika</title>
                <meta name="description" content="Praktika rehearsal studio" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="preload" href="/p.png" as="image" />
            </head>
            <body>
                <Providers
                    locale={locale}
                    namespaces={['common', 'home', 'contacts', 'application']}
                >
                    <MainLayout>{children}</MainLayout>
                    {/* {children} */}
                </Providers>
            </body>
        </html>
    );
}
