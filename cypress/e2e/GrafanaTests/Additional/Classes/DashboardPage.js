const { navigate,
        ClickOnContains,
        saveDashboard,
        deleteAllDashboards} = require("../Functions/DashboardTestFunction");
const { usingSearch,
        goToLink } = require("../Functions/PageTestFunction");
const {
    actions,
    additionalActions } = require("../Selectors/DashboardSelectors");

class DashboardPage {
    static createDashboard(term, timeRange) {
        usingSearch(term);
        goToLink(`/dashboard/new`)
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