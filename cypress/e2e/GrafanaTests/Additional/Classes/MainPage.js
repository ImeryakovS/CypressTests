const {
    UsingSearch,
    navigateLinks
} = require("../Functions/PageTestFunction");
const {
    containText
} = require("../Functions/LoginTestFunction");

const {
    dashboards,
    alerting,
    admin
} = require('../Selectors/MainSelectors.js')

class MainPage {
    static goToDashboardLinks() {
        navigateLinks(dashboards)
    }
    static goToAlertingLinks() {
        navigateLinks(alerting)
    }
    static goToAdminLinks() {
        navigateLinks(admin)
        containText('div', 'Extend the UI of plugins and Grafana')
    }
    static Searching() {
        UsingSearch('playlists')
    }
}

module.exports = { MainPage };