const { DashboardPage } = require('./Additional/Classes/DashboardPage.js')
const { Login} = require('./Additional/Functions/LoginTestFunction.js')

describe ("Test for dashboard", () => {

    beforeEach(() => {
        Login();
    })

    it ("User successfully created new dashboard", () => {
        DashboardPage.createDashboard("dashboard","Last 15 minutes")
    })

    it ("User successfully deleted all dashboards", () => {
        DashboardPage.deleteAllDashboards()
    })
})