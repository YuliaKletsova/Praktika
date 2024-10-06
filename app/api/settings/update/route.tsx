import { NextApiRequest, NextApiResponse } from 'next/types';
import { supabase } from '../../supabase';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const payload = req.body;

        const { error: deleteError } = await supabase
            .from(process.env.SETTINGS_DB!)
            .delete()
            .neq('id', 0);

        if (deleteError) res.status(500).json(deleteError);

        const { data, error: insertError } = await supabase
            .from(process.env.SETTINGS_DB!)
            .insert(payload);

        if (insertError) res.status(500).json(insertError);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}
