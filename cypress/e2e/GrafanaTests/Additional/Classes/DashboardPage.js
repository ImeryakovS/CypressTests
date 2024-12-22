const { navigate,
    ClickonContains } = require("../Functions/DashboardTestFunction");
const { UsingSearch } = require("../Functions/PageTestFunction");
const {
    actions,
    additionalactions } = require("../Selectors/DashboardSelectors");


class DashboardPage {
    static searchFor(term) {
        UsingSearch(term);
    }

    static openDashboard(timeRange) {
        actions.forEach(selector => navigate(selector));
        ClickonContains(timeRange);
    }

    static completeAddtitionalActions() {
        additionalactions.forEach(selector => navigate(selector));
    }
}

module.exports = { DashboardPage };