export type Settings = {
    settings: {
        id: number;
        img: string;
        title: string;
        desc: string;
        active: boolean;
        base64?: string;
    };
    created_at: Intl.DateTimeFormat;
    id: number;
};
