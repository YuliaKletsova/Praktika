import { MIMEType } from 'util';

export type Image = {
    urlFileDownload: string;
    uid: string;
    url: string;
    name: string;
    base64: string;
    isSelected: boolean;
};

export type Images = Image[];

export type DriveImages = Array<{
    kind: string | null | undefined;
    mimeType: MIMEType;
    id: string;
    name: string;
}>;
