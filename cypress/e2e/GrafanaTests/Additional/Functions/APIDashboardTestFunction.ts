import { BasicAUTH } from '../Selectors/APILoginSelectors';
import { bodyForCreateFolder } from '../Selectors/APIDashboardSelectors';
import { bodyForCreateDashboard } from '../Selectors/APIDashboardSelectors';
import { ICreateDashboardFolderResponse,
    ICreateDashboardResponse,
    IDeleteDashboardResponse,
    IDeleteDashboardFolderResponse} from './TypesFunctions'

export function createFolder():Cypress.Chainable<Cypress.Response<ICreateDashboardFolderResponse>> {
    return cy.request(
        {
            method: 'POST',
            url : `/api/folders`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            body: bodyForCreateFolder,
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then ( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('Folder for API Test')
            Cypress.env('folderUid', response.body.uid);
        })
}

export function createDashboardApi(): Cypress.Chainable<Cypress.Response<ICreateDashboardResponse>> {
    const folderUid = Cypress.env('folderUid')
    if (!folderUid) {
        throw new Error('folder UID is missing')
    }
    bodyForCreateDashboard.folderUid = folderUid
    cy.log("Create Dashboard for folderUid: ", folderUid)
    return cy.request(
        {
            method: 'POST',
            url : `/api/dashboards/db`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            body:  bodyForCreateDashboard,
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then ( (response) => {
            expect(response.status).to.eq(200)
            Cypress.env('dashboardUId', response.body.uid);
        })
}

export function deleteDashboard(): Cypress.Chainable<Cypress.Response<IDeleteDashboardResponse>> {
    const dashboardUId = Cypress.env('dashboardUId')
    if (!dashboardUId) {
        throw new Error('Dashboard UID is missing')
    }
    cy.log("Successfully deleted dashboard with uid = ",dashboardUId )
    return cy.request(
        {
            method: 'DELETE',
            url : `/api/dashboards/uid/${dashboardUId}`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then ( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq(bodyForCreateDashboard.dashboard.title)
            expect(response.body.message).to.eq(`Dashboard ${bodyForCreateDashboard.dashboard.title} deleted`)
        })
}

export function deleteFolder(): Cypress.Chainable<Cypress.Response<IDeleteDashboardFolderResponse>> {
    const folderUid = Cypress.env('folderUid')
    if (!folderUid) {
        throw new Error('folder UID is missing')
    }
    cy.log("Successfully deleted dashboard with uid = ",Cypress.env('folderUid') )
    return cy.request(
        {
            method: 'DELETE',
            url : `/api/folders/${folderUid}`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then ( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq('Folder deleted')
        })
}
