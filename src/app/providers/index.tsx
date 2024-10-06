'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider } from './ModalProvider';
import { NotificationProvider } from './NotificationsProvider';

type Props = {
    client: QueryClient;
    children: ReactNode;
};

export const Providers = ({ client, children }: Props) => {
    // return (
    //     <QueryClientProvider client={client}>
    //         <ModalProvider>
    //             <NotificationProvider>{children}</NotificationProvider>
    //         </ModalProvider>
    //     </QueryClientProvider>
    // );
    return children;
};
