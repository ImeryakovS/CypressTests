const { DashboardSelectors,
    dashboardName } = require("../Selectors/DashboardSelectors");
const { mainSelectors } = require('../Selectors/MainSelectors.js')
const { containText } = require('./LoginTestFunction.js')
const { goToLink} = require("./PageTestFunction");

function navigate (selector) {
    cy.get(selector)
    .should('be.visible')
    cy.get(selector).first().click()
}

function ClickOnContains (text) {
    cy.contains(text).click()
}

function saveDashboard () {
    cy.get (DashboardSelectors.changesSaveDashboard).click();
    containText ('h4', 'Full JSON diff');
    cy.get (DashboardSelectors.detailsSaveDashboard).click();
    cy.get(DashboardSelectors.titleFieldSaveDashboard).clear()
    cy.get(DashboardSelectors.titleFieldSaveDashboard).type(dashboardName.name);
    cy.get(DashboardSelectors.descriptionSaveDashboard).clear()
    cy.get(DashboardSelectors.descriptionSaveDashboard).type(dashboardName.description);
    cy.get (DashboardSelectors.savingSaveDashboard).click();
    cy.get (mainSelectors.home).click()
}

function editDashboard () {
    cy.get(DashboardSelectors.editButton).click()
    cy.get(DashboardSelectors.exitEditButton).click()
}

function deleteAllDashboards () {
    goToLink(`/dashboards`);
    cy.get(DashboardSelectors.childCheckboxes).click({ multiple: true, force: true})
    cy.get(DashboardSelectors.deleteDashboards).click()
    cy.get(DashboardSelectors.confirmDeleteDashboard).click()
    cy.get(DashboardSelectors.confirmDeleteDashboard).type('Delete')
    cy.get(DashboardSelectors.finalDeleteDashboards).click()
}

module.exports = { navigate, ClickOnContains, saveDashboard, deleteAllDashboards, editDashboard };