import { Dayjs } from 'dayjs';

export const APPOINTMENTS_STATUSES = {
    APPROVED: 'APPROVED',
    PENDING: 'PENDING',
    REJECTED: 'REJECTED',
} as const;

export const APPOINTMENTS_STATUSES_COLORS = {
    APPROVED: '#52c41a',
    PENDING: '#fadb14',
    REJECTED: '#fa541c',
};

export type AppointmentStatuses = keyof typeof APPOINTMENTS_STATUSES;

export type AppointmentStatusColors =
    (typeof APPOINTMENTS_STATUSES_COLORS)[AppointmentStatuses];

export type Appointment = {
    startTimestamp: string;
    date: string;
    comment: string;
    createdAt: string;
    endTime: string;
    fullName: string;
    id: number;
    startTime: string;
    telegram: string;
    instagram: string;
    phone: string;
    status: AppointmentStatuses;
};

export type Appointments = [string, Appointment[]][];

export type FormFields = {
    date: string;
    userName: string;
    userNameTelegram: string;
    userNameInstagram: string;
    selectedTimeSlots: [];
    isCommentNeeded: boolean;
    additionEquipment: [];
    comment: string;
    weekStartDay?: Dayjs;
};

export type EditFormData = {
    status: AppointmentStatuses;
    fullName: string;
    phone: string;
    time: Dayjs[];
    comment: string;
    telegram: string;
    instagram: string;
    id: number;
};
