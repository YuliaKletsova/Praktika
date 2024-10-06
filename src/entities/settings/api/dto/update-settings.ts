export type UpdateSettingsDto = {
    id: number;
    pictureUrl?: string;
    fileDownload?: string;
    title?: string;
    desc?: string;
    active?: boolean;
}[];
