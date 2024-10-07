import dayjs from 'dayjs';
import { google } from 'googleapis';
import { NextApiResponse } from 'next/types';
import { jwtClientGoogleCalendar } from '@app/config/jwtClientGoogleCalendar';
import {
    NextApiRequestWithSession,
    withSessionCheck,
} from 'app/api/withSessionCheck';
import { Appointment } from '@entities/appointment/types';

const getSummary = (appointment: Appointment) => {
    let summary = `${appointment.fullName} ${appointment.phone} tlgr: ${appointment.telegram}`;

    if (appointment.instagram) {
        summary += ` IG: ${appointment.instagram}`;
    }

    return summary;
};

async function handler(req: NextApiRequestWithSession, res: NextApiResponse) {
    try {
        const calendar = google.calendar({
            version: 'v3',
            auth: jwtClientGoogleCalendar,
        });

        const appointment = req.body;
        const prepareDate = dayjs(appointment.date).format('YYYY-MM-DD');

        const event = {
            summary: getSummary(appointment),
            description: `Created by admin: ${req.session.user?.email}`,
            start: {
                dateTime: `${prepareDate}T${appointment.startTime}:00`,
                timeZone: 'Asia/Tbilisi',
            },
            end: {
                dateTime: `${prepareDate}T${appointment.endTime}:00`,
                timeZone: 'Asia/Tbilisi',
            },
            colorId: '6',
        };
        const { data } = await calendar.events.insert({
            calendarId: process.env.CALENDAR_ID,
            auth: jwtClientGoogleCalendar,
            requestBody: event,
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error,
        });
    }
}

export default withSessionCheck(handler);
