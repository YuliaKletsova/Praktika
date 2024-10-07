import api from '@shared/lib/apiClient';
import { DeleteImageDto } from './dto/deleteImage.dto';

export const deleteImage = (data: DeleteImageDto) =>
    api.post('api/image/delete', {
        fileId: data.fileId,
    });
