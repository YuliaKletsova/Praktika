import api from '@shared/api/base';
import { DeleteImageDto } from './dto/delete-image';

export const deleteImage = (data: DeleteImageDto) =>
    api.post('api/drive/delete', {
        fileId: data.fileId,
    });
