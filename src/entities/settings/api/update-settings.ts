import api from '@shared/api/base';
import { UpdateSettingsDto } from './dto/update-settings';

export const updateSettings = (data: UpdateSettingsDto) => {
    const prepareData = data?.map((item: any) => {
        return {
            settings: item,
        };
    });
    return api.post<any>('api/supabase/settings/update', prepareData);
};
