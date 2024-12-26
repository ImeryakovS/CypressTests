const { BasicAUTH, APICredentials } = require('../Selectors/LoginSelectors');

let userid = 0;

async function methodCreatingNewUser() {
    return cy.request(
        {
            method: 'POST',
            url : 'http://localhost:3000/api/admin/users',
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
            return userid = response.body.id;
    })
}

function deleteNewUser() {
    cy.log('userid = ', userid)
        cy.request(
            {
                method : 'DELETE',
                url : `http://localhost:3000/api/admin/users/${userid}`,
                auth : {
                    username: BasicAUTH.Username,
                    password: BasicAUTH.Password
                }
            }).then ( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq('User deleted')
        });
}
module.exports = { deleteNewUser, methodCreatingNewUser };