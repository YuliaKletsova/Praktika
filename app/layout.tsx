import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preload" href="/p.png" as="image" />
            </head>
            <body>
                <AntdRegistry>{children}</AntdRegistry>
            </body>
        </html>
    );
}
