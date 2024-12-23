const { mainSelectors } = require('./MainSelectors')

const DashboardSelectors = {
    //Newpanel : '[href="dashboard/new"]',
    addVisualisation : '[data-testid="data-testid Create new panel button"]',
    newDashboard : '.css-td06pi-button > .css-1riaxdn',
    buttonMixed : '.css-t1j6el > .css-1xwmgv3 > .css-l8ieyt > [data-testid="data-testid Built in data source list"] > :nth-child(1) > .css-17ifue9 > .css-1cqw476',
    tableView : '[aria-label="Table view"]',
    timePicker : '[data-testid="data-testid TimePicker Open Button"]',
    openCalendar : '[data-testid="data-testid Open time range calendar"]',
    inputTime : '[placeholder="Search quick ranges"]',
    timeRange : '[aria-roledescription="Time range selection"]',
    refresh : '[data-testid="data-testid RefreshPicker run button"]',
    transformations : '[data-testid="data-testid Tab Transformations"]',
    alert : '[data-testid="data-testid Tab Alert"]',
    discard : '[data-testid="data-testid Discard changes button"]',
    buttonDiscard : '.css-ttl745-button',
    //saveDashboards selectors
    saveDashboard : '[data-testid="data-testid Save dashboard button"]',
    changesSaveDashboard : '[data-testid="data-testid Tab Changes"]',
    detailsSaveDashboard : '[data-testid="data-testid Tab Details"]',
    titleFieldSaveDashboard: '[aria-label="Save dashboard title field"]',
    descriptionSaveDashboard: '[aria-label="Save dashboard description field"]',
    savingSaveDashboard : '[data-testid="data-testid Save dashboard drawer button"]',
    //deleteDashboards selectors
    markAllDashboards : '[role="columnheader"] [class="css-11ty15i"]', //'[role="columnheader"] [type="checkbox"] [class="css-11ty15i"]',
    deleteDashboards : '[class="css-ttl745-button"] [class="css-1riaxdn"]',
    confirmDeleteDashboard : '[role="dialog"] [data-testid="input-wrapper"]',
    finalDeleteDashboards : '[data-testid="data-testid Confirm Modal Danger Button"]',
    childCheckboxes : '[data-testid*="data-testid"][data-testid*="checkbox"]'

};

const actions = [
    //DashboardSelectors.Newpanel, //было DashboardPage.Newpanel
    DashboardSelectors.addVisualisation,
    DashboardSelectors.buttonMixed,
    DashboardSelectors.tableView,
    DashboardSelectors.timePicker,
    DashboardSelectors.openCalendar,
    DashboardSelectors.inputTime,
];

const additionalactions = [
    //DashboardPage.timeRange, //временно убрал, надо подумать, как сделать тест непрерывным
    DashboardSelectors.refresh,
    DashboardSelectors.transformations,
    DashboardSelectors.alert,
    DashboardSelectors.saveDashboard
    /*DashboardSelectors.discard,
    mainSelectors.bookmarks, //было mainPage.bookmarks
    DashboardSelectors.buttonDiscard*/
];

module.exports = { DashboardSelectors, additionalactions, actions };