import {
    createFolder,
    deleteFolder,
    createDashboardApi,
    deleteDashboard
} from '../Functions/APIDashboardTestFunction';

export class createFolderAndDashboard {
    static createNewFolder(): ReturnType<typeof createFolder> {
        return createFolder();
    }

    static deleteNewFolder(): ReturnType<typeof deleteFolder> {
        return deleteFolder();
    }

    static createNewDashboard(): ReturnType<typeof createDashboardApi> {
        return createDashboardApi();
    }

    static deleteNewDashboard (): ReturnType<typeof deleteDashboard> {
        return deleteDashboard();
    }
}

