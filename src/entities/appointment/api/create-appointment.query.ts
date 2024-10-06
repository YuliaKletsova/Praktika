import api from '@shared/api/base';
import { CreateAppointmentDto } from './dto/create-appointment';
import { mergeIntervals } from '@shared/lib/merge-intervals';

export const createAppointment = async (data: CreateAppointmentDto) => {
    const {
        date,
        selectedTimeSlots,
        userName,
        userNameTelegram,
        userNameInstagram,
        additionEquipment,
        comment,
    } = data;

    const mergedSelectedTimeSlots = mergeIntervals(selectedTimeSlots);

    const sendArrayData = mergedSelectedTimeSlots.map(
        (slot: { id: number; label: string; value: string }) => {
            const [startHour, endHour] = slot.value.split('-');
            const [startTime, endTime] = [
                `${date}T${startHour}:00:00`,
                `${date}T${endHour}:00:00`,
            ];

            return {
                fullName: userName,
                comment: comment,
                telegram: userNameTelegram,
                instagram: userNameInstagram,
                equipment: additionEquipment
                    .map((item: { label: string }) => item?.label)
                    .join(', '),
                startTime,
                endTime,
            };
        },
    );

    return api.post<void>('/api/supabase/appointments/insert', sendArrayData);
};
