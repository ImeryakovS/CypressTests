const {grafanaURl} = require("../Selectors/URL");
const {BasicAUTH} = require("../Selectors/APILoginSelectors");

function changeRole(roles) {
    return cy.request(
        {
            method : 'PATCH',
            url : `${grafanaURl}/api/orgs/1/users/${Cypress.env('userid')}`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            body : roles
        }).then ( (response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Organization user updated')
    });
}

module.exports = { changeRole }