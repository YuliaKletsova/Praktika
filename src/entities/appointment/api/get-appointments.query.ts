import { Appointment } from '../types';
import api from '@shared/api/base';
import { prettifyAppointments } from './mappers/prettify-appointments';
import { extractDate, extractDay, extractTime } from '@shared/date.helpers';

export const getAppointments = async () => {
    const { data } = await api.get<Appointment[]>('api/appointment/get');

    const mappedData = data.map((item) => ({
        ...item,
        date: extractDate(item.startTime),
        startTimestamp: item.startTime,
        startTime: extractTime(item.startTime),
        endTime: extractTime(item.endTime),
        day: extractDay(item.startTime),
    }));

    return mappedData ? prettifyAppointments(mappedData) : [];
};
