import { NextApiRequest, NextApiResponse } from 'next/types';
import axios from 'axios';
import { supabase } from '../../supabase';

type DataType = {
    settings: {
        id: number;
        img: string;
        fileDownload?: string;
        title?: string;
        desc?: string;
        active: boolean;
    };
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const { data, error } = await supabase
            .from(process.env.SETTINGS_DB!)
            .select('*');

        const dataWithBase64 = await processItems(data!);

        if (error) {
            res.status(500).json(error);
        }

        res.status(200).json(dataWithBase64);
    } catch (error) {
        res.status(500).json(error);
    }
}

const fetchAndConvertToBase64 = async (url: string) => {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data, 'binary');
        const base64 = buffer.toString('base64');
        return `data:${response.headers['content-type']};base64,${base64}`;
    } catch (error) {
        console.error('Error fetching and converting to base64:', error);
        throw error;
    }
};

const processItems = async (data: DataType[]) => {
    const promises = data?.map(async (item) => {
        if (item.settings.fileDownload) {
            const base64 = await fetchAndConvertToBase64(
                item.settings.fileDownload,
            );
            return {
                ...item,
                settings: {
                    ...item.settings,
                    base64,
                },
            };
        }
        return item;
    });

    const newData = await Promise.all(promises);
    return newData;
};
