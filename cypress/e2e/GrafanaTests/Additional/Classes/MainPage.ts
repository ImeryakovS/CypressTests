import { usingSearch, navigateLinks, checkUserProfile } from "../Functions/PageTestFunction";
import { login, logout } from "../Functions/LoginTestFunction";
import { dashboards, alerting, admin } from '../Selectors/MainSelectors';
import { APICredentials } from '../Selectors/APILoginSelectors';

export class MainPage {
    static goToDashboardLinks(): void {
        navigateLinks(dashboards)
    }
    static goToAlertingLinks(): void {
        navigateLinks(alerting)
    }
    static goToAdminLinks(): void{
        navigateLinks(admin)
        //containText('div', 'Extend the UI of plugins and Grafana')
    }
    static Searching(): void {
        usingSearch('playlists')
    }

    static editProfile(): void {
        login (APICredentials.login,APICredentials.password)
        checkUserProfile ()
        logout()
    }
}
