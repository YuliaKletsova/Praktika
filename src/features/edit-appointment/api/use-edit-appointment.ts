import { useMutation } from '@tanstack/react-query';
import { appointmentApi } from '@entities/appointment';
import { queryClient } from '@shared/api/query-client';

export const useEditAppointments = () => {
    // const { notification } = useNotification();

    return useMutation({
        mutationFn: appointmentApi.editAppointment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['fetchAppointments'],
            });
            // notification.success({
            //     message: 'Appointment was successfully updated',
            //     placement: 'bottom',
            // });
        },
        onError: () => {
            // notification.error({
            //     message: 'Something went wrong',
            //     description: error.message,
            //     placement: 'bottom',
            // });
        },
    });
};
