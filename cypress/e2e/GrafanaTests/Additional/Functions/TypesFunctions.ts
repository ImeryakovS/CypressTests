import {bodyForCreateDashboard} from "../Selectors/APIDashboardSelectors";

export type TypeLink = {
    selector: string;
    urlPart: string;
};

export interface ICreateUserResponse {
    id: number;
    message: string;
}

export interface IDeleteUserResponse {
    message: string;
}

export interface ICreateDashboardFolderResponse {
    title: string;
    folderUid: number;
}

export interface ICreateDashboardResponse {
    DashboardUid: number;
}


export interface IDeleteDashboardResponse {
    title: string;
    message: string
}

export interface IDeleteDashboardFolderResponse {
    message: string
}
