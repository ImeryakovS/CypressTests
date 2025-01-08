
//Types for APIDashboardSelectors

export type TypeBodyForCreateFolder = {
    title: string;
}

type TypeDashboard = {
    id: null,
    uid: null,
    title: string,
    tags: string[],
    timezone: string,
    schemaVersion: number,
    refresh: string
};

export type TypeBodyForCreateDashboard = {
    dashboard: TypeDashboard,
    folderUid: string,
    message: string,
    overwrite: boolean
};

//Types for APILoginSelecrots

export type TypeBasicAuth = {
    Username: string;
    Password: string;
}

export type TypeAPICredentials = {
    name: string;
    email: string;
    login: string;
    password: string;
}

export type TypeSergeyCredentials = {
    name: string;
    email: string;
    login: string;
    password: string;
}

export type TypeRoles = {
    role: string;
}


//Types for MainSelectors
export const mainSelectorKeys = [
    'home',
    'alertingList',
    'alertingNotification',
    'alertingRoutes',
    'adminPlugins',
    'adminExtensions',
    'bookmarks',
    'dashboards',
    'playlists',
    'dashboardSnapshots',
    'libraryPanels',
    'dashboardPublic',
    'alerting',
    'alertingSilences',
    'alertingGroups',
    'admin',
    'search',
] as const;

export type TypeMainSelectors = Record<typeof mainSelectorKeys[number], string>;

export const ProfileSelectorsKeys = [
    'iconProfile',
    'linkProfile',
    'editUserProfileName',
    'editUserProfileEmail',
    'editUserProfileUsername',
    'saveChangesProfile',
    'alertUserUpdated',
] as const;

export type TypeProfileSelectors = Record<typeof ProfileSelectorsKeys[number], string>;
