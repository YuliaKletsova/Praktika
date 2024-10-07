import api from '@shared/lib/apiClient';
import { UploadImageDto } from './dto/uploadImage.dto';

export const uploadImage = (data: UploadImageDto) =>
    api.post(`api/image/post`, data);
