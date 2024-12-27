const { BasicAUTH, APICredentials} = require("../Selectors/LoginSelectors");
const { bodyForCreateFolder } = require("../Selectors/APIDashboardSelectors");
let { bodyForCreateDashboard } = require("../Selectors/APIDashboardSelectors");

let folderUid = "";
let dashboardUId = "";


async function createFolder() {
    cy.request(
        {
            method: 'POST',
            url : 'http://localhost:3000/api/folders',
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
            return folderUid = response.body.uid;
        })
}

async function createDashboard() {
    bodyForCreateDashboard.folderUid = folderUid
    cy.log("uid = ",folderUid)
    cy.log("bodyForCreateDashboard.folderUid = ", bodyForCreateDashboard.folderUid)
    cy.request(
        {
            method: 'POST',
            url : 'http://localhost:3000/api/dashboards/db',
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
            return dashboardUId = response.body.uid;
        })
}

function deleteDashboard() {
    cy.log("dashboardId = ",dashboardUId )
    cy.request(
        {
            method: 'DELETE',
            url : `http://localhost:3000/api/dashboards/uid/${dashboardUId}`,
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
    cy.request(
        {
            method: 'DELETE',
            url : `http://localhost:3000/api/folders/${folderUid}`,
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

module.exports = { createFolder, deleteFolder, createDashboard, deleteDashboard }