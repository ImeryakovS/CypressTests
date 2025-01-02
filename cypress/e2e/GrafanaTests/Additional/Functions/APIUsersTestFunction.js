const { BasicAUTH, APICredentials, roles } = require('../Selectors/APILoginSelectors');

 function createNewUser() {
     return cy.request(
        {
            method: 'POST',
            url : `/api/admin/users`,
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

function deleteNewUser(userId) {
    cy.log(`Deleting user with ID: ${userId}`)
        return cy.request(
            {
                method : 'DELETE',
                url : `/api/admin/users/${userId}`,
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