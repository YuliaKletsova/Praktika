import { Images } from '../types';
import api from '@shared/api/base';

export const getImages = async () => {
    const { data } = await api.get<Images>('api/drive/get');

    return data;
};
