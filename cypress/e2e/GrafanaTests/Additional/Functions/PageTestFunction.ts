const { profileSelectors } = require('../Selectors/MainSelectors')

function navigateAndVerify (selector,urlPart) {
    cy.get(selector).should('be.visible').click()
        cy.url().should('include',urlPart)
}

function expandSection (label) { //открываем секции
    cy.get(`[aria-label="Expand section ${label}"]`).should('be.visible').click()
}

function usingSearch (request) {

    cy.get('body').type('{ctrl}k')
    cy.get('[role="combobox"]', { timeout: 5000 }) //timeout для прогрузки поиска
    .should('be.visible')
    cy.get('[role="combobox"]').first().type(request)
    cy.wait(500)
    cy.get('[role="combobox"]').type('{enter}')
    cy.url()
        .then((url)=> {
            expect(url.toLowerCase()).to.include(request.toLowerCase());
        })
        //.should('include',`${request}`)
}

function goToLink (link) {
    cy.visit(link)
    cy.url().should('include', link)
}

function navigateLinks (links) { //переходим по ссылкам в цикле
    links.forEach(({selector,urlPart}) => navigateAndVerify(selector,urlPart));
}

export function randName () {
    const random = Math.floor(Math.random() * 10000);
    return 'randTest' + random.toString();
}

function clickAndType (selector, string) {
    cy.get(selector).click()
    cy.get(selector).type(string)
}

function checkUserProfile () {
    cy.visit('/')
    cy.get(profileSelectors.iconProfile).click()
    cy.wait(100)
    cy.get(profileSelectors.linkProfile).click()
    clickAndType(profileSelectors.editUserProfileName, 'test1')
    clickAndType(profileSelectors.editUserProfileEmail, 'test1Email')
    clickAndType(profileSelectors.editUserProfileUsername, 'test1Username')
    cy.get(profileSelectors.saveChangesProfile).click()
    cy.get(profileSelectors.alertUserUpdated).should('be.visible')
}

module.exports = { expandSection, usingSearch, navigateLinks, goToLink, checkUserProfile };