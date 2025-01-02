const { UsingSearch } = require('../Functions/PageTestFunction')
const { DashboardSelectors } = require('../Selectors/DashboardSelectors')
const { editDashboard } = require('../Functions/DashboardTestFunction')

function checkPermissionsViewer (link) {
    cy.visit(`${link}`)
    cy.url().should('not.include',link )
}

function checkPermissionsEditor() {
    UsingSearch('testdashboard')
    cy.get(DashboardSelectors.deleteDashboards).should('not.exist')
    editDashboard()
}

module.exports = { checkPermissionsViewer, checkPermissionsEditor }