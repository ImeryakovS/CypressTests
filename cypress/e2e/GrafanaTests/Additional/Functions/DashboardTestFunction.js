const { DashboardSelectors } = require("../Selectors/DashboardSelectors");
const { containText } = require('./LoginTestFunction.js')
const { mainSelectors } = require('../Selectors/MainSelectors.js')
const { goToLink} = require("./PageTestFunction");
const { grafanaURl} = require("../Selectors/URL");

function navigate (selector) {
    cy.get(selector)
    .should('be.visible')
    .first()
    .click()
}

function ClickonContains (text) {
    cy.contains(text).click()
}

function randName () {
    const random = Math.floor(Math.random() * 10000);
    return 'test' + random.toString();
}

function saveDashboard () {
    cy.get (DashboardSelectors.changesSaveDashboard).click();
    containText ('h4', 'Full JSON diff');
    cy.get (DashboardSelectors.detailsSaveDashboard).click();
    cy.get(DashboardSelectors.titleFieldSaveDashboard).clear()
    cy.get(DashboardSelectors.titleFieldSaveDashboard).type('testDashboard');
    cy.get(DashboardSelectors.descriptionSaveDashboard).clear()
    cy.get(DashboardSelectors.descriptionSaveDashboard).type('testDashboardDescription');
    cy.get (DashboardSelectors.savingSaveDashboard).click();
    cy.get (mainSelectors.home).click()
}

function editDashboard () {
    cy.get(DashboardSelectors.editButton).click()
    cy.get(DashboardSelectors.exitEditButton).click()
}

function deleteAllDashboards () {
    goToLink(`${grafanaURl}/dashboards`);
    cy.get(DashboardSelectors.childCheckboxes).click({ multiple: true, force: true})
    cy.get(DashboardSelectors.deleteDashboards).click()
    cy.get(DashboardSelectors.confirmDeleteDashboard).click().type('Delete')
    cy.get(DashboardSelectors.finalDeleteDashboards).click()
}

module.exports = { navigate, ClickonContains, saveDashboard, deleteAllDashboards, randName, editDashboard };