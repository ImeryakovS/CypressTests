const { navigate,
        ClickonContains,
        saveDashboard} = require("../Functions/DashboardTestFunction");
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
}
//Объединить SearchFor и OpenDashboard в общий метод под названием "Create Dashboard", поменять тест, чтобы он создавал дашборд
//Далее создать тест, который будет удалять дашборд

module.exports = { DashboardPage };