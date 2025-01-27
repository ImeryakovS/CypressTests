import { DashboardSelectors, dashboardName } from '../Selectors/DashboardSelectors'
import { usingSearch } from './PageTestFunction'
import { editDashboard } from './DashboardTestFunction'

export function checkPermissionsViewer (link: string): void {
    cy.visit(`${link}`)
    cy.url().should('not.include',link )
}

export function checkPermissionsEditor(): void {
    usingSearch(dashboardName.name)
    cy.get(DashboardSelectors.deleteDashboards).should('not.exist')
    editDashboard()
}
