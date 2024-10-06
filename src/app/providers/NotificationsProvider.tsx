'use client';
import React, { ReactNode, createContext, useContext } from 'react';
import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';

const NotificationContext = createContext<{
    notification: NotificationInstance;
}>({} as { notification: NotificationInstance });

export function NotificationProvider({ children }: { children: ReactNode }) {
    const [api, contextHolder]: readonly [
        NotificationInstance,
        React.ReactElement<any, string | React.JSXElementConstructor<any>>,
    ] = notification.useNotification({
        placement: 'bottom',
        bottom: 50,
        duration: 3,
    });

    return (
        <NotificationContext.Provider value={{ notification: api }}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotification() {
    return useContext(NotificationContext);
}
