import api from '@shared/lib/apiClient';
import { UpdateSettings, UpdateSettingsDto } from './dto/updateSettings.dto';

export const updateSettings = (data: UpdateSettingsDto) => {
    const prepareData = data?.map((item: UpdateSettings) => {
        return {
            settings: item,
        };
    });
    return api.post<any>('api/settings/update', prepareData);
};
