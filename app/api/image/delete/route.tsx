import { NextApiResponse } from 'next/types';
import { drive } from '..';
import {
    NextApiRequestWithSession,
    withSessionCheck,
} from '@shared/lib/with-check-session';

async function handler(req: NextApiRequestWithSession, res: NextApiResponse) {
    try {
        const fileId = req.body.fileId;

        await drive.files.delete({
            fileId,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to retrieve access token' + error,
        });
    }
}

export default withSessionCheck(handler);
