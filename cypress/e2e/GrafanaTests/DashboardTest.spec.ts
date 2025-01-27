import {DashboardPage} from './Additional/Classes/DashboardPage';
import {login} from './Additional/Functions/LoginTestFunction';
import {credentials} from './Additional/Selectors/LoginSelectors';

describe ("Test for dashboard", () => {

    beforeEach(() => {
        login(credentials.username,credentials.password);
    })

    it ("User successfully created new dashboard and deleted after", () => {
        DashboardPage.createDashboard("dashboard","Last 15 minutes")
        DashboardPage.deleteAllDashboards()
    })
})