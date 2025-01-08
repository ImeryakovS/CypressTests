const {
    usingSearch,
    navigateLinks,
    checkUserProfile
} = require("../Functions/PageTestFunction");

const {
    containText,
    login,
    logout
} = require("../Functions/LoginTestFunction");

const {
    dashboards,
    alerting,
    admin
} = require('../Selectors/MainSelectors.ts')

const { APICredentials } = require('../Selectors/APILoginSelectors')

class MainPage {
    static goToDashboardLinks() {
        navigateLinks(dashboards)
    }
    static goToAlertingLinks() {
        navigateLinks(alerting)
    }
    static goToAdminLinks() {
        navigateLinks(admin)
        //containText('div', 'Extend the UI of plugins and Grafana')
    }
    static Searching() {
        usingSearch('playlists')
    }

    static editProfile() {
        login (APICredentials.login,APICredentials.password)
        checkUserProfile ()
        logout()
    }
}

module.exports = { MainPage };