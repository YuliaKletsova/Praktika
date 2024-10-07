import { Dayjs } from 'dayjs';
import { AppointmentStatuses } from '../../types';

export type EditAppointmentDto = {
    status: AppointmentStatuses;
    fullName: string;
    phone: string;
    time: Dayjs[];
    comment: string;
    telegram: string;
    instagram: string;
    id: number;
};
