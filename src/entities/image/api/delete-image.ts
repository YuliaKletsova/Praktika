import api from '@shared/api/base';
import { DeleteImageDto } from './dto/delete-image';

export const deleteImage = (data: DeleteImageDto) =>
    api.post('api/image/delete', {
        fileId: data.fileId,
    });
