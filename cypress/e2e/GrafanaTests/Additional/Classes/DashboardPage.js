const { navigate,
        ClickonContains,
        saveDashboard,
        deleteAllDashboards} = require("../Functions/DashboardTestFunction");
const { UsingSearch,
        goToLink } = require("../Functions/PageTestFunction");
const {
    actions,
    additionalActions } = require("../Selectors/DashboardSelectors");

class DashboardPage {
    static createDashboard(term, timeRange) {
        UsingSearch(term);
        goToLink(`/dashboard/new`)
        actions.forEach(selector => navigate(selector));
        ClickonContains(timeRange);
        additionalActions.forEach(selector => navigate(selector));
        saveDashboard();
    }
    static deleteAllDashboards () {
        deleteAllDashboards()
    }
}

module.exports = { DashboardPage };