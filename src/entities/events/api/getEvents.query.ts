import api from '@shared/lib/apiClient';
import { GetAppointmentDto } from './dto/getEvents.dto';

export const getEvents = async ({ startDate, endDate }: GetAppointmentDto) => {
    const { data } = await api.get('/api/events', {
        params: {
            timeMin: startDate,
            timeMax: endDate,
        },
    });

    return data.items;
};
