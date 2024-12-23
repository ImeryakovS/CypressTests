
const mainSelectors = {
     home : '[data-testid="data-testid Nav menu item"][href="/"]',
     alertingList : '[data-testid="data-testid Nav menu item"][href="/alerting/list"]',
     alertingNotification : '[data-testid="data-testid Nav menu item"][href="/alerting/notifications"]',
     alertingRoutes : '[data-testid="data-testid Nav menu item"][href="/alerting/routes"]',
     adminPlugins : '[data-testid="data-testid Nav menu item"][href="/admin/plugins"]',
     adminExtensions : '[data-testid="data-testid Nav menu item"][href="/admin/extensions"]',
     bookmarks : '[href="/bookmarks"]',
     dashboards : '[href="/dashboards"]',
     playlists : '[href="/playlists"]',
     dashboardSnapshots : '[href="/dashboard/snapshots"]',
     libraryPanels : '[href="/library-panels"]',
     dashboardPublic : '[href="/dashboard/public"]',
     alerting : '[href="/alerting"]',
     alertingSilences : '[href="/alerting/silences"]',
     alertingGroups : '[href="/alerting/groups"]',
     admin : '[href="/admin"]',
     search : '[data-testid="data-testid Command palette trigger"]',
};

const dashboards = [
    {selector : mainSelectors.bookmarks, urlPart : '/bookmarks'},
    {selector : mainSelectors.dashboards, urlPart :'/dashboards'},
    {selector : mainSelectors.playlists, urlPart :'/playlists'},
    {selector : mainSelectors.dashboardSnapshots, urlPart :'/dashboard/snapshots'},
    {selector : mainSelectors.libraryPanels, urlPart :'/library-panels'},
    {selector : mainSelectors.dashboardPublic,urlPart : '/dashboard/public'}
];

const alerting = [
    {selector : mainSelectors.alerting, urlPart : '/alerting'},
    {selector : mainSelectors.alertingList, urlPart :'/alerting/list'},
    {selector : mainSelectors.alertingNotification, urlPart :'/alerting/notifications'},
    {selector : mainSelectors.alertingRoutes, urlPart :'/alerting/routes'},
    {selector : mainSelectors.alertingSilences, urlPart :'/alerting/silences'},
    {selector : mainSelectors.alertingGroups,urlPart : '/alerting/groups'}
];

const admin = [
    {selector : mainSelectors.admin, urlPart : '/admin'},
    {selector : mainSelectors.adminPlugins, urlPart :'/admin/plugins'},
    {selector : mainSelectors.adminExtensions, urlPart :'/admin/extensions'}
];

const sections = [
    'Dashboards',
    'Alerting',
    'Administration',
    'Plugins and data',
];

module.exports = { mainSelectors , dashboards, alerting, admin, sections }