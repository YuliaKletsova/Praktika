'use client';
import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { queryClient } from '@shared/lib/queryClient';
import { ModalProvider } from './ModalProvider';
import { NotificationProvider } from './NotificationsProvider';
import { TranslationsProvider } from './TranslationsProvider';

type Props = {
    children: ReactNode;
    locale: string;
    namespaces: string[];
};

export const Providers = ({ children, locale, namespaces }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <TranslationsProvider locale={locale} namespaces={namespaces}>
                <ModalProvider>
                    <NotificationProvider>
                        <AntdRegistry>{children}</AntdRegistry>
                    </NotificationProvider>
                </ModalProvider>
            </TranslationsProvider>
        </QueryClientProvider>
    );
};
