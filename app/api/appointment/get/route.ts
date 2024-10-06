import { NextApiRequest, NextApiResponse } from 'next/types';
import { supabase } from '../../supabase';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const { data } = await supabase
            .from(process.env.APPOINTMENTS_DB!)
            .select('*')
            .gte('startTime', new Date().toISOString());

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}
