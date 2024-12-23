const { DashboardPage } = require('./Additional/Classes/DashboardPage.js')

describe ("Test for dashboard", () => {

    beforeEach(() => {
        cy.login('Sergeytest', 'test');
    })

    it ("User successfully created new dashboard", () => {
        DashboardPage.createDashboard("dashboard","Last 15 minutes")
    })

    it ("User successfully deleted all dashboards", () => {
        DashboardPage.deleteAllDashboards()
    })
})