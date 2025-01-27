import { BasicAUTH } from '../Selectors/APILoginSelectors';
import { SergeyCredentials } from '../Selectors/APILoginSelectors';
import { TypeAPICredentials } from '../Selectors/TypesSelectors';
import { ICreateUserResponse, IDeleteUserResponse } from './TypesFunctions'

 export function createNewUser(body: TypeAPICredentials): Cypress.Chainable<Cypress.Response<ICreateUserResponse>> {
     return cy.request(
        {
            method: 'POST',
            url : `/api/admin/users`,
            auth : {
                username: BasicAUTH.Username,
                password: BasicAUTH.Password
            },
            body: JSON.stringify(body),
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

export function deleteNewUser(userId: string): Cypress.Chainable<Cypress.Response<IDeleteUserResponse>> {
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

export function findUser(): Cypress.Chainable<boolean> {
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
