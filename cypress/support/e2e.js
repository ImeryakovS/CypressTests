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

const { roles } = require('../e2e/GrafanaTests/Additional/Selectors/APILoginSelectors')
const { changeRole } = require('../e2e/GrafanaTests/Additional/Functions/APIChangeRoleFunction.js')
const { SergeyCredentials } = require('../e2e/GrafanaTests/Additional/Selectors/APILoginSelectors')
const { createNewUser, findUser } = require('../e2e/GrafanaTests/Additional/Functions/APIUsersTestFunction.js')

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
    findUser().then((UserExists) => {
        if(!UserExists) {
            cy.log('Пользователь не найден, создаем нового')
            createNewUser(SergeyCredentials)
                .then (()=> {
                    changeRole(roles.roleAdmin)
                })
        } else {
            cy.log('Пользователь найден, пропускаем создание')
        }
    })
})


