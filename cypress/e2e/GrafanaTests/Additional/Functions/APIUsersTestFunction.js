const { BasicAUTH } = require('../Selectors/APILoginSelectors');
const { SergeyCredentials } = require('../Selectors/APILoginSelectors');

 function createNewUser(body) {
     return cy.request(
        {
            method: 'POST',
            url : `/api/admin/users`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            body: body,
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

function findUser() {
    return cy.request(
        {
            method : 'GET',
            url : `/api/users/lookup?loginOrEmail=${SergeyCredentials.login}`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            failOnStatusCode: false
        }).then ( (response) => {
            if (response.status === 200) {
                expect(response.body.name).to.eq('sergeytest')
                Cypress.env('Sergey', response.body.id)
                return true;
            } else {
                Cypress.env('Sergey', null);
                return false;
            }

    });
}

module.exports = { deleteNewUser, createNewUser, findUser };