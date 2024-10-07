export type UpdateSettings = {
    id: number;
    pictureUrl?: string;
    fileDownload?: string;
    title?: string;
    desc?: string;
    active?: boolean;
};

export type UpdateSettingsDto = UpdateSettings[];
