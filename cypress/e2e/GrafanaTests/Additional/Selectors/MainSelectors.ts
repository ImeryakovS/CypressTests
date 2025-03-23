//Types from TypeSelectors
import {TypeMainLinksSelectors, TypeMainSelectors, TypeProfileSelectors} from "./TypesSelectors";

export const mainSelectors: TypeMainSelectors = {
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

export const dashboards:{selector: typeof mainSelectors[keyof typeof mainSelectors]; urlPart: string}[] = [
    {selector : mainSelectors.bookmarks, urlPart : '/bookmarks'},
    {selector : mainSelectors.dashboards, urlPart :'/dashboards'},
    {selector : mainSelectors.playlists, urlPart :'/playlists'},
    {selector : mainSelectors.dashboardSnapshots, urlPart :'/dashboard/snapshots'},
    {selector : mainSelectors.libraryPanels, urlPart :'/library-panels'},
    {selector : mainSelectors.dashboardPublic,urlPart : '/dashboard/public'}
];

export const alerting:{selector: typeof mainSelectors[keyof typeof mainSelectors]; urlPart: string}[] = [
    {selector : mainSelectors.alerting, urlPart : '/alerting'},
    {selector : mainSelectors.alertingList, urlPart :'/alerting/list'},
    {selector : mainSelectors.alertingNotification, urlPart :'/alerting/notifications'},
    {selector : mainSelectors.alertingRoutes, urlPart :'/alerting/routes'},
    {selector : mainSelectors.alertingSilences, urlPart :'/alerting/silences'},
    {selector : mainSelectors.alertingGroups,urlPart : '/alerting/groups'}
];

export const admin:{selector: typeof mainSelectors[keyof typeof mainSelectors]; urlPart: string}[] = [
    {selector : mainSelectors.admin, urlPart : '/admin'},
    {selector : mainSelectors.adminPlugins, urlPart :'/admin/plugins'},
    //{selector : mainSelectors.adminExtensions, urlPart :'/admin/extensions'}
];

export const profileSelectors: TypeProfileSelectors = {
    iconProfile : '[aria-label="Profile"]',
    linkProfile : '[href="/profile"]',
    editUserProfileName : '[id="edit-user-profile-name"]',
    editUserProfileEmail : '[id="edit-user-profile-email"]',
    editUserProfileUsername : '[id="edit-user-profile-username"]',
    saveChangesProfile : '[data-testid="data-testid-user-profile-save"]',
    alertUserUpdated : '[data-testid="data-testid Alert success"]',
}

export const sections: string[] = [
    'Dashboards',
    'Alerting',
    'Administration',
    'Plugins and data',
];

export const mainLinksSelectors: TypeMainLinksSelectors = {
    mainPageLinks : '[data-testid="data-testid panel content"]'
}

export const externalLinkWelcome = [
    {index: 0, text: "Documentation"},
    {index: 1, text: "Tutorials"},
    {index: 2, text: "Community"},
    {index: 3, text: "Public Slack"},
];
