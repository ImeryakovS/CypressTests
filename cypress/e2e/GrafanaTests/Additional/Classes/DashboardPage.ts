import { navigate, ClickOnContains, saveDashboard, deleteAllDashboards } from "../Functions/DashboardTestFunction";
import { usingSearch, goToLink} from "../Functions/PageTestFunction";
import { DashboardSelectors, actions, additionalActions } from "../Selectors/DashboardSelectors";
import {useFindFunction} from "../Functions/ExternalLinksFunction";


export class DashboardPage {
    static createDashboard(term: string, timeRange: string): void {
        usingSearch(term);
        goToLink(`/dashboard/new`)
        cy.get(DashboardSelectors.addVisualisation).click()
        useFindFunction({
            selector: DashboardSelectors.buttonMixed,
            childIndex: 1,
            htmlTag: 'div',
            index: 0,
            containWord: "Mixed"
        }).click();
        actions.forEach(selector => navigate(DashboardSelectors[selector]));
        ClickOnContains(timeRange);
        additionalActions.forEach(selector => navigate(DashboardSelectors[selector]));
        saveDashboard();
    }
    static deleteAllDashboards (): void {
        deleteAllDashboards()
    }
}
