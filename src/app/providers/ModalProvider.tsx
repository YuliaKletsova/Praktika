'use client';
import React, { ReactNode, createContext, useContext } from 'react';
import { Modal } from 'antd';
import { HookAPI } from 'antd/es/modal/useModal';

const ModalContext = createContext<{ modal: HookAPI }>(
    {} as { modal: HookAPI },
);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [modal, contextHolder]: readonly [HookAPI, React.ReactElement] =
        Modal.useModal();

    return (
        <ModalContext.Provider value={{ modal }}>
            {contextHolder}
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}
