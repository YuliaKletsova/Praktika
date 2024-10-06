import dayjs, { extend } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

extend(utc);
extend(timezone);

export const extractTime = (dateString: string) =>
    dayjs(dateString).tz('Asia/Tbilisi').format('HH:ss');

export const extractDate = (dateString: string) =>
    dayjs(dateString).tz('Asia/Tbilisi').format('DD MMMM YYYY');

export const extractDay = (dateString: string) =>
    dayjs(dateString).tz('Asia/Tbilisi').format('dddd');

export const getDayJsObject = (date: string, time: string) =>
    dayjs(date)
        .hour(dayjs(time, 'HH:mm').hour())
        .minute(dayjs(time, 'HH:mm').minute());
