import { redirect } from 'next/navigation';

export default function Home() {
    const defaultLocale = 'en';
    redirect(`/${defaultLocale}`);
}
