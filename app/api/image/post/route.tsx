import stream from 'stream';
import { NextApiResponse } from 'next/types';
import { drive } from '..';
import {
    NextApiRequestWithSession,
    withSessionCheck,
} from '@shared/lib/with-check-session';

async function handler(req: NextApiRequestWithSession, res: NextApiResponse) {
    try {
        const fileType = req.body.fileType;
        const fileName = req.body.fileName;
        const url = req.body.url;

        const uploadImg = url.split(/,(.+)/)[1];
        const buf = Buffer.from(uploadImg, 'base64') as Buffer;
        const bs = new stream.PassThrough();
        bs.end(buf);

        const { data } = await drive.files.create({
            media: {
                mimeType: fileType,
                body: bs,
            },
            requestBody: {
                mimeType: fileType,
                name: fileName,
                parents: [process.env.PARENT_FOLDER!],
            },
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to retrieve access token' + error,
        });
    }
}

export default withSessionCheck(handler);
