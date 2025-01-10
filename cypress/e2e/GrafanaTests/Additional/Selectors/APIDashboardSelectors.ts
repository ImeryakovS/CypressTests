/// <reference path="../cypress.d.ts" />

import { TypeBodyForCreateFolder,
        TypeBodyForCreateDashboard} from './TypesSelectors';


export const bodyForCreateFolder: TypeBodyForCreateFolder = {
    title: 'Folder for API Test'
}

export const bodyForCreateDashboard: TypeBodyForCreateDashboard = {
        dashboard: {
        id: null,
        uid: null,
        title: "Dashboard for API",
        tags: [ "API" ],
        timezone: "browser",
        schemaVersion: 16,
        refresh: "25s"
},
        folderUid: Cypress.env('folderUid'),
        message: "Create new dashboard with API",
        overwrite: false
}
