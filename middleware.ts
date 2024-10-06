// import { i18nRouter } from 'next-i18n-router';
// import { i18nConfig } from './src/shared/config/i18n.config';

// export function middleware(request: any) {
//     return i18nRouter(request, i18nConfig);
// }

// export const config = {
//     matcher: '/((?!api|static|.*\\..*|_next).*)',
// };

export { default } from 'next-auth/middleware';

export const config = { matcher: ['/admin/:path*', '/admin'] };
