const { DashboardPage } = require('./Additional/Classes/DashboardPage.js')

describe ("Test for dashboard", () => {

    beforeEach(() => {
        cy.login('Sergeytest', 'test');
    })

    it.only ("User sucessfully created and deleted new dashboard", () => {
        DashboardPage.searchFor("dashboard")
        DashboardPage.openDashboard("Last 15 minutes")
    })
}) //Добавляем тест на сохранение дашборда и отдельный тест на удаление всех дашбордов.
//В тесте нужно учесть, что при сохранении дашборда нужно рандоминизировать текст