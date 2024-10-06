import { APPOINTMENTS_STATUSES } from '../types';
import api from '@shared/api/base';
import { UpdateAppointmentDto } from './dto/update-appointment';

export const updateAppointment = async (data: UpdateAppointmentDto) => {
    let calendarEventId, calendarLink;

    if (data.status === APPOINTMENTS_STATUSES.APPROVED) {
        const { data: eventData } = await api.post(
            'api/appointment/publish-in-calendar',
            data.appointment,
        );

        calendarEventId = eventData.id;
        calendarLink = eventData.htmlLink;
    }

    return api.post('api/appointment/post', {
        calendarEventId,
        appointmentId: data.appointment.id,
        status: data.status,
        calendarLink,
    });
};
