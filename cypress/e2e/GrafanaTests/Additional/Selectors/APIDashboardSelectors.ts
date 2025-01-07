/// <reference path="./cypress.d.ts" />

import { TypeBodyForCreateFolder } from './TypesSelectors';
import { TypeBodyForCreateDashboard } from './TypesSelectors';


const bodyForCreateFolder: TypeBodyForCreateFolder = {
    title: 'Folder for API Test'
}

const bodyForCreateDashboard: TypeBodyForCreateDashboard = {
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

module.exports = { bodyForCreateFolder, bodyForCreateDashboard }