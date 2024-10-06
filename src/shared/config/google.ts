/* eslint-disable @typescript-eslint/no-var-requires */
const googleConfig = {
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY!.split(String.raw`\n`).join('\n'),
    clientId: process.env.GOOGLE_ADMIN_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_ADMIN_CLIENT_KEY!,
    calendarId: process.env.CALENDAR_ID,
    secret: process.env.NEXTAUTH_SECRET,
};

export default googleConfig;
