import { Images } from '../types';
import api from '@shared/lib/apiClient';

export const getImages = async () => {
    const { data } = await api.get<Images>('api/image/get');

    return data;
};
