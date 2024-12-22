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
        additionalactions.forEach(selector => navigate(selector));
    }
}
//Объединить SearchFor и OpenDashboard в общий метод под названием "Create Dashboard", поменять тест, чтобы он создавал дашборд
//Далее создать тест, который будет удалять дашборд

module.exports = { DashboardPage };