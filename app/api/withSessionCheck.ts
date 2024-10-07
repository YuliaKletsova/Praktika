import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'app/api/auth/[...nextauth]/route';

export type NextApiRequestWithSession = NextApiRequest & { session: Session };

export function withSessionCheck(
    handler: (
        req: NextApiRequestWithSession,
        res: NextApiResponse,
    ) => Promise<void>,
) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const session = await getServerSession(req, res, authOptions);

        if (!session) {
            return res.status(401).json({ message: 'You must be logged in.' });
        }

        (req as NextApiRequestWithSession).session = session;

        return handler(req as NextApiRequestWithSession, res);
    };
}
