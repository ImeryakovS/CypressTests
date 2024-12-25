const { BasicAUTH, APICredentials } = require('../Selectors/LoginSelectors');

function methodCreatingNewUser() {
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
            return response.body.id;
    })
}
function createAndSaveNewUser () {
    methodCreatingNewUser().then((userId) => {
        cy.log('Created user ID:', userId);
        cy.writeFile('cypress/fixtures/userID.json', {userId});
    });
}
//Надо будет попробовать реализовать данную функцию через Async/await
function deleteNewUser() {
    cy.readFile('cypress/fixtures/userID.json').then((data)=> {
        const userId = data.userId;
        cy.log('Using User Id = ', userId)
    cy.request(
        {
            method : 'DELETE',
            url : `http://localhost:3000/api/admin/users/${userId}`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            }
    }).then ( (response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('User deleted')
        });
});
}
module.exports = { createAndSaveNewUser, deleteNewUser };