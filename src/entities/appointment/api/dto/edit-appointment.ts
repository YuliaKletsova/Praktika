import { Dayjs } from 'dayjs';

export type EditAppointmentDto = {
    status: any; //AppointmentStatuses;
    fullName: string;
    phone: string;
    time: Dayjs[];
    comment: string;
    telegram: string;
    instagram: string;
    id: number;
};
