'use client';
import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import initTranslations from '@shared/lib/initTranslations';

type TranslationsProviderProps = {
    children: ReactNode;
    locale: string;
    namespaces: string[];
};

export function TranslationsProvider({
    children,
    locale,
    namespaces,
}: TranslationsProviderProps) {
    const [i18nInstance, setI18nInstance] = useState<any>(null);

    useEffect(() => {
        const i18nInstance = createInstance();
        initTranslations(locale, namespaces, i18nInstance).then(() => {
            setI18nInstance(i18nInstance);
        });
    }, [locale, namespaces]);

    if (!i18nInstance) {
        return null;
    }

    return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
