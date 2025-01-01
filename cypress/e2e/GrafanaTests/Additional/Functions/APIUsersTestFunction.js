const { BasicAUTH, APICredentials, roles } = require('../Selectors/APILoginSelectors');
const { grafanaURl} = require("../Selectors/URL");

 function createNewUser() {
     return cy.request(
        {
            method: 'POST',
            url : `${grafanaURl}/api/admin/users`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            body: APICredentials,
            headers : {
                'Content-Type': 'application/json'
            }
    })
        .then ( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq('User created')
            Cypress.env('userId', response.body.id)
        })
}

function deleteNewUser() {
    const userId = Cypress.env('userId');
    cy.log('userId = ', userId)
        return cy.request(
            {
                method : 'DELETE',
                url : `${grafanaURl}/api/admin/users/${userId}`,
                auth : {
                    username: BasicAUTH.Username,
                    password: BasicAUTH.Password
                }
            }).then ( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq('User deleted')
        });
}

module.exports = { deleteNewUser, createNewUser };