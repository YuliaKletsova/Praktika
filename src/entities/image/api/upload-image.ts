import api from '@shared/api/base';
import { UploadImageDto } from './dto/upload-image';

export const uploadImage = (data: UploadImageDto) =>
    api.post(`api/drive/post`, data);
