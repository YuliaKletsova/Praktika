import { Dayjs } from 'dayjs';

export type CreateAppointmentDto = {
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
