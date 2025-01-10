import { BasicAUTH } from '../Selectors/APILoginSelectors';
import { TypeRoles } from '../Selectors/TypesSelectors'
import { IChangeRoleUserResponse } from './TypesFunctions'

export function changeRole(roles: TypeRoles): Cypress.Chainable<Cypress.Response<IChangeRoleUserResponse>> {
    const userId = Cypress.env('userId');
    return cy.request(
        {
            method : 'PATCH',
            url : `/api/orgs/1/users/${userId}`,
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
