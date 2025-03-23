import { navigate, ClickOnContains, saveDashboard, deleteAllDashboards } from "../Functions/DashboardTestFunction";
import { usingSearch, goToLink} from "../Functions/PageTestFunction";
import { DashboardSelectors, actions, additionalActions } from "../Selectors/DashboardSelectors";

export class DashboardPage {
    static createDashboard(term: string, timeRange: string): void {
        usingSearch(term);
        goToLink(`/dashboard/new`)
        cy.get(DashboardSelectors.addVisualisation).click()
        cy.get(DashboardSelectors.buttonMixed)
            .eq(1)
            .within(():void => {
            cy.get('div').eq(0).contains("Mixed")
                .click();
        })
        actions.forEach(selector => navigate(DashboardSelectors[selector]));
        ClickOnContains(timeRange);
        additionalActions.forEach(selector => navigate(DashboardSelectors[selector]));
        saveDashboard();
    }
    static deleteAllDashboards (): void {
        deleteAllDashboards()
    }
}
