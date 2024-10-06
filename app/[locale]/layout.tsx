import type { Metadata } from 'next';
import { Providers } from '@app/providers';
import { MainLayout } from '@app/layout';

export const metadata: Metadata = {
    title: 'Praktika',
    description: 'Praktika rehearsal studio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
                <Providers>
                    {/* <MainLayout></MainLayout> */}
                    {children}
                </Providers>
            </body>
        </html>
    );
}
