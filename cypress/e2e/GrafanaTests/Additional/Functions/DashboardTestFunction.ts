import { DashboardSelectors, dashboardName } from "../Selectors/DashboardSelectors";
import { mainSelectors} from '../Selectors/MainSelectors';
import { containText } from './LoginTestFunction';
import { goToLink } from "./PageTestFunction";

export  function navigate (selector: string): void {
    cy.get(selector)
    .should('be.visible')
    cy.get(selector).first().click()
}

export  function ClickOnContains (text: string): void {
    cy.contains(text).click()
}

export  function saveDashboard (): void {
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

export function editDashboard (): void {
    cy.get(DashboardSelectors.editButton).click()
    cy.get(DashboardSelectors.exitEditButton).click()
}

export function deleteAllDashboards (): void {
    goToLink(`/dashboards`);
    cy.get(DashboardSelectors.childCheckboxes).click({ multiple: true, force: true})
    cy.get(DashboardSelectors.deleteDashboards).click()
    cy.get(DashboardSelectors.confirmDeleteDashboard).click()
    cy.get(DashboardSelectors.confirmDeleteDashboard).type('Delete')
    cy.get(DashboardSelectors.finalDeleteDashboards).click()
}
