import { NextApiRequest, NextApiResponse } from 'next/types';
import { supabase } from '../../supabase';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const { data, error } = await supabase
            .from(process.env.SETTINGS_DB!)
            .select('*');

        if (error) {
            res.status(500).json(error);
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}
