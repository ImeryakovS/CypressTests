function navigate (selector) {
    cy.get(selector)
    .should('be.visible')
    .first()
    .click()
}

function ClickonContains (text) {
    cy.contains(text).click()
}

module.exports = { navigate, ClickonContains };