import { NextApiRequest, NextApiResponse } from 'next/types';
import dayjs from 'dayjs';
import { supabase } from '../../supabase';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const payload = req.body;
        const { data, error } = await supabase
            .from(process.env.APPOINTMENTS_DB!)
            .update({
                updatedAt: dayjs().unix(),
                status: payload.status,
            })
            .eq('id', payload.appointmentId);

        if (error) res.status(500).json(error);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}
