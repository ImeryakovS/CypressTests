const { mainSelectors } = require('./MainSelectors')

const DashboardSelectors = {
    Newpanel : '[href="dashboard/new"]',
    AddVisualisation : '[data-testid="data-testid Create new panel button"]',
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
    buttonDiscard : '.css-ttl745-button'
};

const actions = [
    DashboardSelectors.Newpanel, //было DashboardPage.Newpanel
    DashboardSelectors.AddVisualisation,
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
    DashboardSelectors.discard,
    mainSelectors.bookmarks, //было mainPage.bookmarks
    DashboardSelectors.buttonDiscard,
];

module.exports = { DashboardSelectors, additionalactions, actions };