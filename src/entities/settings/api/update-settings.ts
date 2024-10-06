import api from '@shared/api/base';
import { UpdateSettings, UpdateSettingsDto } from './dto/update-settings';

export const updateSettings = (data: UpdateSettingsDto) => {
    const prepareData = data?.map((item: UpdateSettings) => {
        return {
            settings: item,
        };
    });
    return api.post<any>('api/settings/update', prepareData);
};
