const { mainSelectors } = require('../Selectors/MainSelectors')

function navigateAndVerify (selector,urlPart) { // переходим по ссылке и верифицируем
    cy.get(selector).should('be.visible').click()
        cy.url().should('include',urlPart)
}

function expandSection (label) { //открываем секции
    cy.get(`[aria-label="Expand section ${label}"]`).should('be.visible').click()
}

function usingSearch (request) { //используем поиск и пишем туда что либо
    cy.get(mainSelectors.search).should('be.visible').click()
    cy.get('[role="combobox"]', { timeout: 5000 }) //timeout для прогрузки поиска
    .should('be.visible')
    .first()
    .type(request)
    .wait(500)
    .type('{enter}')
    cy.url().should('include',`${request}`)
}

function goToLink (link) {
    cy.visit(link)
    cy.url().should('include', link)
}

function navigateLinks (links) { //переходим по ссылкам в цикле
    links.forEach(({selector,urlPart}) => navigateAndVerify(selector,urlPart));
}

module.exports = { expandSection, usingSearch, navigateLinks, goToLink };