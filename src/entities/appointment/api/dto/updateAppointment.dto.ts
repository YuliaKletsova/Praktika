import { Appointment, AppointmentStatuses } from '@entities/appointment/types';

export type UpdateAppointmentDto = {
    appointment: Appointment;
    status: AppointmentStatuses;
};
