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