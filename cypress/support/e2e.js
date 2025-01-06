// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@shelex/cypress-allure-plugin';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes("Failed to execute 'importScripts' on 'WorkerGlobalScope'")) {
        return false;
    }
    if (err.message.includes('SomeOtherError')) {
        return false;
    }

    return true;
});

before(() => {
    cy.log('Глобальный Before: Настройка окружения');
    cy.request(
        {
            method: 'POST',
            url : `/api/admin/users`,
            auth : {
                username: 'admin',
                password: 'admin'
            },
            body: {
                name :'sergeytest',
                email : 'testing@test.ru',
                login : 'sergeytest',
                password : 'test'
            },
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then ( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq('User created')
            Cypress.env('userId', response.body.id)
        })
});
