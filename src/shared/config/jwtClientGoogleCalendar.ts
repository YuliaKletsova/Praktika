import { google } from 'googleapis';
import googleConfig from './google';

export const jwtClientGoogleCalendar = new google.auth.JWT(
    googleConfig.clientEmail,
    undefined,
    googleConfig.privateKey,
    'https://www.googleapis.com/auth/calendar',
    undefined,
);
