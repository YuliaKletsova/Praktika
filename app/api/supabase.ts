import { createClient } from '@supabase/supabase-js';
import supabaseConfig from '@app/config/supabase';

export const supabase = createClient(
    supabaseConfig.apiUrl,
    supabaseConfig.serviceKey,
);

export async function authenticateWithSupabase(
    accessToken: string | undefined,
    idToken: string | undefined,
) {
    try {
        if (!idToken) return { error: 'No token was provided' };
        const data = await supabase.auth.signInWithIdToken({
            provider: 'google',
            access_token: accessToken,
            token: idToken,
        });

        return data;
    } catch (error) {
        return { error };
    }
}
