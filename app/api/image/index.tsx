import { google } from 'googleapis';
import googleConfig from '@app/config/google';

const jwtClient = new google.auth.JWT(
    googleConfig.clientEmail,
    undefined,
    googleConfig.privateKey,
    'https://www.googleapis.com/auth/docs https://www.googleapis.com/auth/drive',
    undefined,
);

export const drive = google.drive({
    version: 'v3',
    auth: jwtClient,
});
