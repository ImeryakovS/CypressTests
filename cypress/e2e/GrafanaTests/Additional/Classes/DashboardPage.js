const { navigate,
        ClickonContains,
        saveDashboard,
        deleteAllDashboards} = require("../Functions/DashboardTestFunction");
const { UsingSearch,
        goToLink } = require("../Functions/PageTestFunction");
const {
    actions,
    additionalactions } = require("../Selectors/DashboardSelectors");


class DashboardPage {
    static createDashboard(term, timeRange) {
        UsingSearch(term);
        goToLink('http://localhost:3000/dashboard/new')
        actions.forEach(selector => navigate(selector));
        ClickonContains(timeRange);
        additionalactions.forEach(selector => navigate(selector));
        saveDashboard();
    }
    static deleteAllDashboards () {
        deleteAllDashboards()
    }
}

module.exports = { DashboardPage };