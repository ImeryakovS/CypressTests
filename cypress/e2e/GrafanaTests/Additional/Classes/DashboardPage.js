const { navigate,
        ClickOnContains,
        saveDashboard,
        deleteAllDashboards} = require("../Functions/DashboardTestFunction");
const { usingSearch,
        goToLink } = require("../Functions/PageTestFunction");
const {
    DashboardSelectors,
    actions,
    additionalActions } = require("../Selectors/DashboardSelectors");

class DashboardPage {
    static createDashboard(term, timeRange) {
        usingSearch(term);
        goToLink(`/dashboard/new`)
        cy.get(DashboardSelectors.addVisualisation).click()
        cy.contains('Use multiple data sources').click({force : true})
        actions.forEach(selector => navigate(selector));
        ClickOnContains(timeRange);
        additionalActions.forEach(selector => navigate(selector));
        saveDashboard();
    }
    static deleteAllDashboards () {
        deleteAllDashboards()
    }
}

module.exports = { DashboardPage };