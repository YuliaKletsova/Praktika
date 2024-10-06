import NextAuth, { AuthOptions, Account, Profile } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { authenticateWithSupabase } from 'app/api/supabase/supabase';
import googleConfig from '@shared/config/google';

export const authOptions: AuthOptions = {
    secret: googleConfig.secret,
    providers: [
        GoogleProvider({
            clientId: googleConfig.clientId,
            clientSecret: googleConfig.clientSecret,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
    callbacks: {
        async signIn({
            account,
            profile,
        }: {
            account: Account | null;
            profile?: Profile;
        }) {
            await authenticateWithSupabase(
                account?.access_token,
                account?.id_token,
            );
            if (!account || !profile) return false;
            if (
                account.provider === 'google' &&
                profile.email === googleConfig.calendarId
            ) {
                return true;
            }
            return false;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
