
//Types for APIDashboardSelectors

import {randName} from "../Functions/PageTestFunction";

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

//Types for LoginSelectors

export type TypeLoginSelectors = {
    user: string;
    password: string;
    submit: string;
    login: string;
    userInput: string;
    alertError: string;
    alert: string;
};

export type TypeCredentials = {
    username: string;
    password: string;
    email: string;
}

//Types for DashboardSelectors

export type TypeDashboardSelectors = {
    addVisualisation: string;
    newDashboard: string;
    buttonMixed: string;
    tableView: string;
    timePicker: string;
    openCalendar: string;
    inputTime: string;
    timeRange: string;
    refresh: string;
    transformations: string;
    alert: string;
    discard: string;
    buttonDiscard: string;
    saveDashboard: string;
    changesSaveDashboard: string;
    detailsSaveDashboard: string;
    titleFieldSaveDashboard: string;
    descriptionSaveDashboard: string;
    savingSaveDashboard: string;
    editButton: string;
    exitEditButton: string;
    markAllDashboards: string;
    deleteDashboards: string;
    confirmDeleteDashboard: string;
    finalDeleteDashboards: string;
    childCheckboxes: string;
};

export type TypeDashboardName = {
    name: string;
    description: string;
}
