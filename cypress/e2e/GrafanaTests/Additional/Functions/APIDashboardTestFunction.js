const { BasicAUTH} = require("../Selectors/APILoginSelectors");
const { bodyForCreateFolder } = require("../Selectors/APIDashboardSelectors");
const { grafanaURl } = require("../Selectors/URL");
let { bodyForCreateDashboard } = require("../Selectors/APIDashboardSelectors");

let folderUid = "";
let dashboardUId = "";


async function createFolder() {
    return cy.request(
        {
            method: 'POST',
            url : `${grafanaURl}/api/folders`,
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

async function createDashboardApi() {
    bodyForCreateDashboard.folderUid = folderUid
    cy.log("uid = ",folderUid)
    cy.log("bodyForCreateDashboard.folderUid = ", Cypress.env('folderUid'))
    return cy.request(
        {
            method: 'POST',
            url : `${grafanaURl}/api/dashboards/db`,
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

function deleteDashboard() {
    cy.log("dashboardId = ",Cypress.env('dashboardUId') )
    return cy.request(
        {
            method: 'DELETE',
            url : `${grafanaURl}/api/dashboards/uid/${Cypress.env('dashboardUId')}`,
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

function deleteFolder() {
    cy.log("uid = ",folderUid)
    return cy.request(
        {
            method: 'DELETE',
            url : `${grafanaURl}/api/folders/${Cypress.env('folderUid')}`,
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

module.exports = { createFolder, deleteFolder, createDashboardApi, deleteDashboard }