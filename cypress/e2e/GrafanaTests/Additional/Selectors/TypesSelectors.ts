export interface TypeBodyForCreateFolder  {
    title: string;
}

export type TypeDashboard = {
    id: null,
    uid: null,
    title: string,
    tags: string[],
    timezone: string,
    schemaVersion: number,
    refresh: string
};

export type TypeBodyForCreateDashboard = {
    dashboard: TypeDashboard,
    folderUid: string,
    message: string,
    overwrite: boolean
};