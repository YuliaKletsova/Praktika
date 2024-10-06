import { useMutation } from '@tanstack/react-query';
import { appointmentApi } from '@entities/appointment';

export const useCreateAppointments = () => {
    return useMutation({
        mutationFn: appointmentApi.createAppointment,
        onSuccess: () => {},
        onError: () => {},
    });
};
