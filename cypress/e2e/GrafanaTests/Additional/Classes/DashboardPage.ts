import { navigate, ClickOnContains, saveDashboard, deleteAllDashboards } from "../Functions/DashboardTestFunction";
import { usingSearch, goToLink} from "../Functions/PageTestFunction";
import { DashboardSelectors, actions, additionalActions } from "../Selectors/DashboardSelectors";

export class DashboardPage {
    static createDashboard(term: string, timeRange: string): void {
        usingSearch(term);
        goToLink(`/dashboard/new`)
        cy.get(DashboardSelectors.addVisualisation).click()
        cy.contains('Use multiple data sources').click({force : true})
        actions.forEach(selector => navigate(DashboardSelectors[selector]));
        ClickOnContains(timeRange);
        additionalActions.forEach(selector => navigate(DashboardSelectors[selector]));
        saveDashboard();
    }
    static deleteAllDashboards (): void {
        deleteAllDashboards()
    }
}
