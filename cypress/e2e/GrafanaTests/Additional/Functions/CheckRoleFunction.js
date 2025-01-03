const { DashboardSelectors, dashboardName } = require('../Selectors/DashboardSelectors')
const { usingSearch } = require('../Functions/PageTestFunction')
const { editDashboard } = require('../Functions/DashboardTestFunction')

function checkPermissionsViewer (link) {
    cy.visit(`${link}`)
    cy.url().should('not.include',link )
}

function checkPermissionsEditor() {
    usingSearch(dashboardName.name)
    cy.get(DashboardSelectors.deleteDashboards).should('not.exist')
    editDashboard()
}

module.exports = { checkPermissionsViewer, checkPermissionsEditor }