const { DashboardPage } = require('./Additional/Classes/DashboardPage.ts')
const { login} = require('./Additional/Functions/LoginTestFunction.ts')
const { credentials } = require('./Additional/Selectors/LoginSelectors');

describe ("Test for dashboard", () => {

    beforeEach(() => {
        login(credentials.username,credentials.password);
    })

    it ("User successfully created new dashboard and deleted after", () => {
        DashboardPage.createDashboard("dashboard","Last 15 minutes")
        DashboardPage.deleteAllDashboards()
    })
})