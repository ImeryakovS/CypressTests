const { DashboardPage } = require('./Additional/Classes/DashboardPage.js')

describe ("Test for dashboard", () => {

    beforeEach(() => {
        cy.login('Sergeytest', 'test');
    })

    it.only ("User sucessfully created and deleted new dashboard", () => {
        DashboardPage.createDashboard("dashboard","Last 15 minutes")
    })
})