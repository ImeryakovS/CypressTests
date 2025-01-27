import './commands';
import '@shelex/cypress-allure-plugin';

import { roles } from '../e2e/GrafanaTests/Additional/Selectors/APILoginSelectors';
import { changeRole } from '../e2e/GrafanaTests/Additional/Functions/APIChangeRoleFunction';
import { SergeyCredentials } from '../e2e/GrafanaTests/Additional/Selectors/APILoginSelectors';
import { createNewUser, findUser } from '../e2e/GrafanaTests/Additional/Functions/APIUsersTestFunction';

Cypress.on('uncaught:exception', (err: Error): boolean =>
        !(err.message.includes("Failed to execute 'importScripts' on 'WorkerGlobalScope'") ||
        err.message.includes('SomeOtherError'))
);

before((): void => {
    findUser().then((UserExists): void => {
        if(!UserExists) {
            cy.log('Пользователь не найден, создаем нового')
            createNewUser(SergeyCredentials)
                .then ((): void=> {
                    changeRole(roles.roleAdmin)
                })
        } else {
            cy.log('Пользователь найден, пропускаем создание')
        }
    })
})


