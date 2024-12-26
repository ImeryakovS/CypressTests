const { BasicAUTH, APICredentials} = require("../Selectors/LoginSelectors");
const { bodyForCreateFolder, bodyForCreateDashboard } = require("../Selectors/APIDashboardSelectors");

let folderUid = "";
let dashboardId = 0;
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
    cy.log("uid = ",folderUid)
    cy.request(
        {
            method: 'POST',
            url : '/api/dashboards/db',
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            body: bodyForCreateDashboard,
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then ( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq('Create new dashboard with API')
            return dashboardId = response.body.id;
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

module.exports = { createFolder, deleteFolder, createDashboard, folderUid }