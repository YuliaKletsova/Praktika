import dayjs from 'dayjs';
import api from '@shared/api/base';
import { EditAppointmentDto } from './dto/edit-appointment';

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
