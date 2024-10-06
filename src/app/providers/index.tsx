'use client';
import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { queryClient } from '@shared/api/query-client';
import { ModalProvider } from './ModalProvider';
import { NotificationProvider } from './NotificationsProvider';

type Props = {
    children: ReactNode;
};

export const Providers = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ModalProvider>
                <NotificationProvider>
                    <AntdRegistry>{children}</AntdRegistry>
                </NotificationProvider>
            </ModalProvider>
        </QueryClientProvider>
    );
};
