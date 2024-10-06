import { Settings } from '../types';
import api from '@shared/api/base';

export const getSettings = async () => {
    const { data } = await api.get<Settings[]>('api/settings/get');

    return data.map((item) => item.settings);
};
