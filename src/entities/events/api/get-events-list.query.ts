import api from '@shared/api/base';
import { GetAppointmentDto } from './dto/get-events-list';

export const getEvents = async ({ startDate, endDate }: GetAppointmentDto) => {
    const { data } = await api.get('/api/calendar/', {
        params: {
            timeMin: startDate,
            timeMax: endDate,
        },
    });

    return data.items;
};
