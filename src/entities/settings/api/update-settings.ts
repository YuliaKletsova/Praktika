import api from '@shared/api/base';
import { UpdateSettingsDto } from './dto/update-settings';

export const updateSettings = (data: UpdateSettingsDto) => {
    const prepareData = data?.map((item: any) => {
        return {
            settings: item,
        };
    });
    return api.post<any>('api/settings/update', prepareData);
};
