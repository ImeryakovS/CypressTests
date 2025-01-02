const { DashboardPage } = require('./Additional/Classes/DashboardPage.js')
const { Login} = require('./Additional/Functions/LoginTestFunction.js')
const { credentials } = require('./Additional/Selectors/LoginSelectors');

describe ("Test for dashboard", () => {

    beforeEach(() => {
        Login(credentials.username,credentials.password);
    })

    it.only ("User successfully created new dashboard and deleted after", () => {
        DashboardPage.createDashboard("dashboard","Last 15 minutes")
        DashboardPage.deleteAllDashboards()
    })
})