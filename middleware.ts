import { i18nRouter } from 'next-i18n-router';
import { i18nConfig } from './src/shared/config/i18n.config';

export function middleware(request: any) {
    const [locale, ...path] = request.nextUrl.pathname.split('/').filter((item: string) => item);
console.log('\n\n\n \n\n locale', locale, path)
    return i18nRouter(request, i18nConfig);
}

export const config = {
    matcher: '/((?!api|static|_next|.*\\..*).*)',
};
