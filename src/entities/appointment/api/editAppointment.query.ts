import dayjs from 'dayjs';
import api from '@shared/lib/apiClient';
import { EditAppointmentDto } from './dto/editAppointment.dto';

export const editAppointment = async (data: EditAppointmentDto) => {
    return api.post('api/appointment/edit', {
        comment: data.comment,
        fullName: data.fullName,
        startTime: data.time[0].format('YYYY-MM-DDTHH:ss'),
        endTime: data.time[1].format('YYYY-MM-DDTHH:ss'),
        telegram: data.telegram,
        instagram: data.instagram,
        phone: data.phone,
        updatedAt: dayjs().unix(),
        id: data.id,
        status: data.status,
    });
};
